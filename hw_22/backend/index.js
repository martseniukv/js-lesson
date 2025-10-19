const express = require('express');
const app = express();
const cors = require('cors');
let movieCounter = 3;
let reviewCounter = 3;

app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log('Server is running'));

const movies = new Map([
    [1, {
        id: 1,
        title: "The Matrix",
        director: "Max",
        year: 1999,
        rating: 8.5
    }],

    [2, {
        id: 2,
        title: "The Godfather",
        director: "Father",
        year: 1972,
        rating: 10
    }],

    [3, {
        id: 3,
        title: "Bad Boys",
        director: "Mikle Bay",
        year: 2999,
        rating: 9.3
    }],
]);

const reviews = new Map([
    [1, [{
        id: 14,
        movieId: 1,
        author: "Bill",
        text: "Great!"
    }]],

    [2, [{
        id: 22,
        movieId: 2,
        author: "Karina",
        text: "Awesome!"
    }]],

    [3, [{
        id: 31,
        movieId: 3,
        author: "Bob",
        text: "Perfect!"
    }]],
]);

app.get('/movies', (req, res) => {
    res.json(Array.from(movies.values()));
});

app.get('/movie/:id', (req, res) => {
    let movieId = +req.params.id;
    if (!movies.has(movieId)) {
        res.status(404).send();
    } else {
        res.json(movies.get(movieId));
    }
});

app.post('/movie', (req, res) => {
    //TODO: add some validation

    const movie = {
        id: ++movieCounter,
        ...req.body
    };
    movies.set(movie.id, movie);
    res.status(201).json(movie);
});

app.put('/movie/:id', (req, res) => {

    const movieId = +req.params.id;
    const movieRequest = req.body;

    console.log(movieId);
    console.log(movieRequest);
    console.log(movies.has(movieId));
    if (!movies.has(movieId)) {
        res.status(404).send();
    } else {
        //TODO: add some validation
        const movie = {
            id: movieId,
            ...movieRequest
        }
        movies.set(movieId, movie);
        res.status(200).json(movie);
    }
});


app.delete('/movie/:id', (req, res) => {

    const movieId = +req.params.id;

    if (!movies.has(movieId)) {
        res.status(404).send();
    } else {
        movies.delete(movieId);
        res.status(204).send();
    }
});


app.get('/movie/:id/reviews', (req, res) => {
    let movieId = +req.params.id;
    if (!reviews.has(movieId)) {
        res.status(404).send();
    } else {
        res.json(reviews.get(movieId));
    }
});

app.post('/movie/:id/review', (req, res) => {
    //TODO: add some validation

    let movieId = +req.params.id;
    const newReview = {
        id: ++reviewCounter,
        movieId,
        ...req.body
    };
    reviews.set(newReview.id, newReview);
    res.status(201).json(newReview);
});