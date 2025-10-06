const express = require('express');
const router = express.Router();
const { addFacility, listFacilities } = require('../controllers/facilitiesController');

router.post('/', addFacility);
router.get('/', listFacilities);

module.exports = router;
