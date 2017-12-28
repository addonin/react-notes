const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send([{id:1, title:'title', text:'text'}]);
});

module.exports = router;