const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies',  async (req, res, next) => {
    res.status(200).render('movies')
})

module.exports = router;
