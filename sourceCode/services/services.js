
const fs = require("fs");



let file = JSON.parse(fs.readFileSync('moviesData.json'));


exports.getMovies = (req, res) => {
    res.status(200).json({
        status: "success",
        requestedAt: req.requestedAt,
        count: file.length,
        data: {
            movies: file
        }
    });

};

exports.addMovies = (req, res) => {
    console.log(req.body);

    const newId = file.length + 1;
    const newMovie = Object.assign({ id: newId }, req.body);
    file.push(newMovie);
    fs.writeFile("./moviesData.json", JSON.stringify(file), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        });
    });


};

exports.getMoviesByUser = (req, res) => {


    const id = req.params.id * 1;
    let movie = file.find((item) => item.id === id);
    if (movie) {
        res.status(200).json({
            status: "success",
            data: {
                movie: movie
            }
        });
    }
    else {
        res.status(404).json({
            status: "failed",
            message: `movie with id ${id} not found`
        });
    }
};

exports.updateMovie = (req, res) => {

    let id = req.params.id * 1;
    let movieToUpdate = file.find((item) => item.id === id);

    if (!movieToUpdate) {
        res.status(404).json({
            status: "failed",
            message: `no movie id with the id : ${id}`
        });
    }
    else {
        let index = file.indexOf(movieToUpdate);
        Object.assign(movieToUpdate, req.body);

        file[index] = movieToUpdate;
        fs.writeFile("./moviesData.json", JSON.stringify(file), (err) => {

            res.status(200).json({
                status: "sucess",
                data: {
                    movie: movieToUpdate
                }

            });



        });
    }

};


exports.deleteMovieById = (req, res) => {
    const id = req.params.id * 1;
    const movieToDelete = file.find((item) => item.id === id);

    if (!movieToDelete) {
        res.status(404).json({
            status: "failed",
            message: `no movie id with the id : ${id}`
        });
    }
    else {
        const index = file.indexOf(movieToDelete);

        file.splice(index, 1);

        fs.writeFile("./moviesData.json", JSON.stringify(file), (err) => {

            res.status(204).json({
                status: "sucess",
                data: {
                    movie: null
                }

            });
        });
    }
};
