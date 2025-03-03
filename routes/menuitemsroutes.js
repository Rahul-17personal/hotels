const express = require('express');
const router = express.Router();
const menuitems = require('./../models/menuitems.js');


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newmenuitems = new menuitems(data);

        const response = await newmenuitems.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error.' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await menuitems.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error.' })
    }
})

router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        if (taste == 'spicy' || taste == 'sour' || taste == 'sweet') {

            const response = await menuitems.find({ taste: taste });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'invalid work type' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
})


module.exports = router;