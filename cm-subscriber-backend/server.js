const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 4000;

app.use(cors());
app.use(express.json()); // Parse JSON

// POST API - Create Subscriber Order
app.post('/create-subscriber', (req, res) => {
    const { name, email, phone, simType, subscriberCount, iccid } = req.body;

    if (!name || !email || !phone || !simType || !subscriberCount || !iccid) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    console.log(`🛒 Order Received for ${subscriberCount} subscribers`);

    // Initial response - Order Processing
    res.status(202).json({
        message: "✅ Waiting for 1 minute... Order is being processed.",
        status: "processing"
    });

    // Simulating Order Processing after 1 minute
    setTimeout(() => {
        const subscriberId = `SUB-${Math.floor(1000 + Math.random() * 9000)}`;
        console.log(`✅ Order Created: ${subscriberId}`);

        // Here, ideally, we would update a database with the subscriberId
    }, 60000); // 1 min delay
});

// Start the server
app.listen(port, () => {
    console.log(`✅ Backend running at http://localhost:${port}`);
});
