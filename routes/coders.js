var express = require('express');
var router = express.Router();


/* GET coders list */
router.get('/all', function(req, res) {
  res.render('coders/codersIndex');
});

module.exports = router;
