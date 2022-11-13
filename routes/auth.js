const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticat('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
})

// @desc Logout User
// @route GET /auth/logout
router.get('/logout', (req, res) => {
    req.logout((err)=>console.log(err));
    res.redirect('/')
})



module.exports = router;