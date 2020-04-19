/* import { Router } from 'express'; */
const express = require('express');
const CourseController = require('./Controllers/CourseController');
const UserController = require('./Controllers/UserController');
const EnrollmentController = require('./Controllers/EnrollmentController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.create);

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);

routes.post('/enrollment', EnrollmentController.create);
routes.get('/enrollment', EnrollmentController.index);
routes.delete('/enrollment/:id', EnrollmentController.delete);
routes.get('/enrollment/selectCoursesByUser', EnrollmentController.selectCoursesByUser);

module.exports = routes;