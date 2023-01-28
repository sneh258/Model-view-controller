const express = require('express');
const router = express.Router();
const moviesController = require('./../controllers/moviesControllers');

router.route("/")
    .get(moviesController.getMovies)
    .post(moviesController.addMovies);

router.route("/:id")
    .get(moviesController.getMoviesByUser)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovieById);

module.exports = router;    