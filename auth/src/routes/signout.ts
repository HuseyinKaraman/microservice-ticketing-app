import express from 'express';

const router = express.Router();

router.post('/signout', (req, res) => {
    req.session = null;

    res.send({});
})

export {router as signoutRouter}
