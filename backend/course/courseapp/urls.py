from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import *

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('students', StudentViewSet)
router.register('instructors', InstructorViewSet)
router.register('courses', CourseViewSet)
router.register('enrollments', EnrollmentViewSet)

urlpatterns = [
    path('course/', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
