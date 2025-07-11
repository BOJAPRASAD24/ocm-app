from rest_framework import serializers
from .models import User, Student, Instructor, Course, Enrollment


class userSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'role', 'password']

    def create(self, validated_data):
        validated_data['email'] = validated_data['email']
        validated_data['password'] = validated_data['password']
        return User.objects.create(validated_data)
                           

class StudentSerializer(serializers.ModelSerializer):
    user = userSerializer()

    class Meta:
        model = Student
        fields = ['id', 'user']


class InstructorSerializer(serializers.ModelSerializer):
    user = userSerializer()

    class Meta:
        model = Instructor
        fields = ['id', 'user', 'bio']


class CourseSerializer(serializers.ModelSerializer):
    instructor = InstructorSerializer()

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'instructor']


class EnrollmentSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
    course = CourseSerializer()

    class Meta:
        model = Enrollment
        fields = ['id', 'student', 'course', 'date_enrolled']
