const express = require('express')
const app = express()
const port = process.env.PORT || 2410
const cors = require('cors')

const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     console.log(`Request Body: ${JSON.stringify(req.body)}`)
//     next()
// })

app.use(function (err, req, res, next) {
    if (err) {
        res.status(400).json({ error: err.message })
    } else {
        next()
    }
})

app.listen(port, () => {
    addDate()
    console.log(`Node app listening on port ${port}!`)
})

const { moviesList } = require('./MoviesList')
const { theatreList } = require('./TheatreList')
const { users } = require('./UsersList')

const today = new Date();
const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]
function addDate() {
    const startRange = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() - 4));
    const endRange = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + 14));
    const diff = endRange.getTime() - startRange.getTime();
    const monthNamesLength = monthNames.length;

    moviesList.forEach((object) => {
        const randomDiff = Math.floor(Math.random() * diff);
        const randomDate = new Date(startRange.getTime() + randomDiff);

        const date = randomDate.getUTCDate();
        const monthName = monthNames[randomDate.getUTCMonth() % monthNamesLength];
        const year = randomDate.getUTCFullYear();

        object.releaseDate = `${date}-${monthName}-${year}`;

        // Add random "votes" field
        const minVotes = 100;
        const maxVotes = 10000;
        object.votes = Math.floor(Math.random() * (maxVotes - minVotes + 1) + minVotes);

        // Add random "rating" field
        const minRating = 5;
        const maxRating = 9;
        object.rating = (Math.random() * (maxRating - minRating + 1) + minRating).toFixed(1);
    });
}

function sortMoviesByReleaseDate(moviesList) {
    const releasedMovies = [];
    const upcomingMovies = [];

    moviesList.forEach((movie) => {
        const movieReleaseDate = new Date(movie.releaseDate).getTime();
        if (movieReleaseDate <= today) {
            releasedMovies.push(movie);
        } else {
            upcomingMovies.push(movie);
        }
    })

    releasedMovies.sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);
        return dateB - dateA;
    });

    upcomingMovies.sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);
        return dateA - dateB;
    });


    return releasedMovies.concat(upcomingMovies);
}

// PASSPORT HANDLING

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'your_jwt_secret'

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

    const user = users.find(u => u.u_id === jwt_payload.sub);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false, { message: 'Incorrect user ID' });
    }
}));

// CUSTOMER HANDLING

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/login', function (req, res) {
    const { email, password } = req.body;

    const user = users.find(u => u.u_email === email && u.u_password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ sub: user.u_id }, 'your_jwt_secret', { expiresIn: '1h' });
    const requser = { u_id: user.u_id, name: user.u_name, email: user.u_email, mobile: user.mobile, favTheatresList: user.favTheatresList, bookings: user.bookings }
    res.json({ requser, token });
});

app.post('/updateuser/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    const { id } = req.params;
    const body = req.body;

    const index = users.findIndex((u1) => u1.u_id === id);

    if (req.user.u_id !== id) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const updateduser = { ...users[index], u_name: body.name, u_email: body.email }
    if (body.mobile)
        updateduser.mobile = body.mobile;
    if (body.password)
        updateduser.u_password = body.password;

    users[index] = updateduser;

    res.status(200).json({ msg: "Update Successful" });
});


app.get('/userdata/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    const { id } = req.params;
    const user = users.find((u1) => u1.u_id === id);
    const requser = { u_id: user.u_id, name: user.u_name, email: user.u_email, mobile: user.mobile, bookings: user.bookings }
    res.json({ requser });
});

app.get('/mybookings/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    const { id } = req.params;

    try {
        const index = users.findIndex((user) => user.u_id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.user.u_id !== id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const bookings = users[index].bookings;

        res.status(200).json({ bookings });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/savebooking/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    const { id } = req.params;
    const body = req.body;

    // console.log(id, body);

    try {
        const index = users.findIndex((user) => user.u_id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.user.u_id !== id) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const lastBId = users[index].bookings.length > 0 ?
            users[index].bookings.reduce((acc, curr) => {
                const pattern = /(\d+)/;
                const currId = curr.bID.match(pattern)[0];
                const accId = acc.match(pattern)[0];

                if (Number(currId) > Number(accId)) {
                    return curr.bID;
                }

                return acc;
            }, "b0") :
            "b0";

        const newIdNum = Number(lastBId.substring(1)) + 1;
        const newBookingId = "b" + newIdNum;

        const newBooking = { bID: newBookingId, ...body };

        users[index].bookings.push(newBooking);

        res.status(200).json({ msg: "Update Successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


// MOVIE HANDLING

app.get('/movielist', (req, res) => {
    // console.log(JSON.stringify(req.query));
    let filterMovieList = moviesList;
    const { languages, genres, format, titlesearchstr } = req.query;

    if (languages) {
        const paramsArr = languages.split(',');
        filterMovieList = filterMovieList.filter((item) => {
            return item.languages.some(p1 => paramsArr.includes(p1));
        });
    }

    if (genres) {
        const paramsArr = genres.split(',');
        filterMovieList = filterMovieList.filter((item) => {
            return item.genres.some(p1 => paramsArr.includes(p1));
        });
    }

    if (format) {
        const paramsArr = format.split(',');
        filterMovieList = filterMovieList.filter((item) => {
            return item.format.some(p1 => paramsArr.includes(p1));
        });
    }

    if (titlesearchstr) {
        filterMovieList = filterMovieList.filter((item) => {
            const lowerTitlestr = titlesearchstr.toLowerCase();
            const lowerMovieTitle = item.title.toLowerCase();

            return lowerMovieTitle.includes(lowerTitlestr);
        });
    }

    // console.log(filterMovieList.map(item => item.title));
    filterMovieList = sortMoviesByReleaseDate(filterMovieList);
    res.json(filterMovieList);
})

app.get('/buytickets', (req, res) => {
    const { location, moviename } = req.query;

    // console.log(req.query);

    // const filterTheatreList = theatreList.filter(object => {
    //     if (object.locations.includes(location))
    //         return object;
    // })

    res.json(theatreList);
})

// FAVOURITE THEATRE

app.post('/saveFavTheatreList/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    const { id } = req.params;
    const body = req.body;

    // console.log(body);

    const index = users.findIndex((u1) => u1.u_id === id);

    if (req.user.u_id !== id) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const updateduser = { ...users[index], favTheatresList: body.favTheatresList };

    users[index] = updateduser;
    // console.log(users);

    res.status(200).json({ msg: "Update Successful" });
});

