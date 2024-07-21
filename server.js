const express = require('express');
const app = express();
const port = 3000;
const { FlightRadar24API } = require('flightradarapi');

const frApi = new FlightRadar24API();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/flights', async (req, res) => {
    try {
        let flights = await frApi.getFlights();
        res.render('flights', { flights });
    } catch (error) {
        res.status(500).send('Error fetching flights data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
