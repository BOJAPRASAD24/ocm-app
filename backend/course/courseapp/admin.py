from django.contrib import admin
from .models import User, Student, Instructor, Course, Enrollment

admin.site.register(User)
admin.site.register(Student)
admin.site.register(Instructor)
admin.site.register(Course)
admin.site.register(Enrollment)


