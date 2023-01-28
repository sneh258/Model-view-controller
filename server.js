const port = 4000;
const express = require("express");
const moviesRouter = require('./sourceCode/routes/moviesRoutes');
const app = express();
app.use(express.json())



//using routes
app.use("/api/movies", moviesRouter)




app.listen(port, () => {
    console.log("server has started");
});




