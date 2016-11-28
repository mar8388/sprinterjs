const express = require('express');


const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Это данные, полученные из API после авторизации."
  });
});


module.exports = router;
