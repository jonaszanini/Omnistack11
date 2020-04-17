/* import { Router } from 'express'; */
const express = require('express');
const CourseController = require('./Controllers/CourseController')
const UserController = require('./Controllers/UserController')
const EnrollmentController = require('./Controllers/EnrollmentController')

const routes = express.Router();

routes.get('/courses', CourseController.index)
routes.post('/courses', CourseController.create);

routes.post('/users', UserController.create)
routes.get('/users', UserController.index)

routes.post('/enrollment', EnrollmentController.create)
routes.get('/enrollment', EnrollmentController.index)
routes.delete('/enrollment:id', EnrollmentController.delete)

module.exports = routes;