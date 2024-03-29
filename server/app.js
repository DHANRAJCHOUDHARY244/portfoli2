const express = require('express');
const requestIp = require('request-ip');
const axios = require('axios');
const useragent = require('express-useragent');

const app = express();
const port = 3000;

// Middleware to get IP address
app.use(requestIp.mw());

// Middleware to get user agent information
app.use(useragent.express());

// Route to track user details
app.get('/', async (req, res) => {
    const ip = req.clientIp;
    const userAgent = req.useragent;

    let country = '';

    try {
        // Fetch country based on IP address using axios
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        country = response.data.country;
    } catch (error) {
        console.error('Error fetching country:', error.message);
    }

    const userTrack = {
        ip,
        country,
        userAgent
    };

    // Here you can store userTrack in your database or perform other actions
    console.log('User details:', userTrack);

    res.json(userTrack);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
