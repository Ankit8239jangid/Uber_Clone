import express from 'express';
import {
    createCaptain,
    loginCaptain,
    logoutCaptain,
    getCaptainProfile
} from '../controllers/Captain.controller.js';
import {
    createCaptainValidation,
    loginCaptainValidation,
    verifyCaptainToken
} from '../middleware/Captain.auth.js';

const captainRouter = express.Router();

// Captain registration route
captainRouter.post('/create', createCaptainValidation, createCaptain);

// Captain login route
captainRouter.post('/login', loginCaptainValidation, verifyCaptainToken, loginCaptain);

// Captain logout route
captainRouter.post('/logout', verifyCaptainToken, logoutCaptain);

// Get captain profile route
captainRouter.get('/profile', verifyCaptainToken, getCaptainProfile);

export default captainRouter;
