const express = require('express');
const router = express.Router();
const person = require('./../models/person.js');


router.post('/', async (req, res) => {
    try {
        const data = req.body

        const newPerson = new person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error.' })
    }
})

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {

            const response = await person.find({ work: worktype });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error.' })
    }

})

router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const updatedpersondata = req.body;

        const response = await person.findByIdAndUpdate(personid, updatedpersondata, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ error: 'person not found' });
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error.' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const personid = req.params.id;
        const deletedperson = await person.findByIdAndDelete(personid);
        if (!personid) {
            return res.status(404).json({ error: 'person not found' });
        }
        console.log('data deleted');
        res.status(200).json({ message: 'person data deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server error.' })
    }
})

module.exports = router;