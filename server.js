const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongofun")

app.listen(PORT, () => {
    console.log(`API server now listening on PORT ${PORT}!`)
})