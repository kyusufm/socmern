import express from 'express';

const router = express.Router();

router.get('/', (req, res)=> {
    res.send("This WOrks");
});

export default router