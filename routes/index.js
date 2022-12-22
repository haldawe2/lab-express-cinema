const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies',  async (req, res, next) => {
    try {
        const moviesFromDB = await Movie.find({})
        res.status(200).render('movies', {moviesFromDB});
    } catch (error) {
        console.error(error);
        next(error);
    }
})

/* GET movie showtimes */
router.get('/movie/:id', async (req, res, next) => {
    try {
        const movieData = await Movie.findById(req.params.id);
        res.status(200).render('movie', movieData);
    } catch (error) {
        console.error(error);
        next(error);
    }
})

module.exports = router;
