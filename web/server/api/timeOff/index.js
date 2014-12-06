'use strict';

var express = require('express');
var controller = require('./timeOff.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/api/organizations/:organizationId/timeOffs', auth.ensureOrganizationUser(), controller.index);
router.post('/api/organizations/:organizationId/timeOffs/new', auth.ensureOrganizationUser(), controller.create);
router.put('/api/organizations/:organizationId/timeOffs/:id', auth.ensureOrganizationUser(), controller.update);
router.patch('/api/organizations/:organizationId/timeOffs/:id', auth.ensureOrganizationUser(), controller.update);
router.delete('/api/organizations/:organizationId/timeOffs/:id', auth.ensureOrganizationUser(), controller.destroy);

module.exports = router;