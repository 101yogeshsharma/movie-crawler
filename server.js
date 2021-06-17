const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const configDatabase = () => {

    mongoose.connect("mongodb://localhost:27017/c4", {useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .catch(error => console.log(error));
}

const configExpress = () => {
    const app = new express();
    app.use(cookieParser())
    // app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.use('/c5', router);
    return app;
}

configDatabase();
const app = configExpress();
app.listen(process.env.PORT || 5000, () => console.log("server is running"));


