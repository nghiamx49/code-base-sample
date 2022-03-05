const authenticateRouter = require('express').Router();
const passport = require('passport')
const jwt = require('jsonwebtoken');
const User = require('../models/user')

authenticateRouter.post('/login', passport.authenticate('local', {session: false}), async (req, res) => {
    if(req.isAuthenticated()) {
        res.status(200).json({
            message: "login success",
            user: req.user,
            token: jwt.sign({sub: req.user.username}, process.env.SECRET_KEY, {expiresIn: '86400s'}),
            isAuthenticated: true
        })
    }
})

authenticateRouter.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.status(200).json({user: req.user})
})

authenticateRouter.post('/register', async (req, res) => {
    const { username } = req.body;
    const checkExisted = await User.findOne({username});
    if(checkExisted) {
        res.status(400).json({message: "Account existed"})
    }
    else {
        const newAccount = new User({...req.body});
        await newAccount.save();
        res.status(201).json({message: "Registed", account: newAccount})
    }
})

module.exports = authenticateRouter;