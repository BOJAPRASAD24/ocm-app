from rest_framework import viewsets
from .models import User, Student, Instructor, Course, Enrollment
from .serializers import ( UserSerializer, StudentSerializer, InstructorSerializer, CourseSerializer, EnrollmentSerializer)
from django.contrib.auth.models import user
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes=[IsAuthenticated]

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.select_related('user').all()
    serializer_class = StudentSerializer
    permission_classes=[IsAuthenticated]

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.select_related('user').all()
    serializer_class = InstructorSerializer
    permission_classes=[IsAuthenticated]

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.select_related('instructor__user').all()
    serializer_class = CourseSerializer
    permission_classes=[IsAuthenticated]

class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.select_related('student__user', 'course__instructor__user').all()
    serializer_class = EnrollmentSerializer
    permission_classes=[IsAuthenticated]

