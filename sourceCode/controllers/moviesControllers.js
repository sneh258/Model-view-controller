const myMovies = require('./../services/services')

exports.getMovies = (req, res) => {
    myMovies.getMovies(req, res);
};

exports.addMovies = (req, res) => {
    myMovies.addMovies(req, res)


};

exports.getMoviesByUser = (req, res) => {


    myMovies.getMoviesByUser(req, res)
};

exports.updateMovie = (req, res) => {

    myMovies.updateMovie(req, res)
};


exports.deleteMovieById = (req, res) => {
    myMovies.deleteMovieById(req, res)
};
