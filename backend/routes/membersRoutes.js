const express = require('express');
const router = express.Router();
const { createMember, getMember, updateMember, deleteMember, getMemberBookings } = require('../controllers/membersController');

router.post('/', createMember);
router.get('/:id', getMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);
router.get('/:id/bookings', getMemberBookings);

module.exports = router;
