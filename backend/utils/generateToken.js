import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId }, ENV_VARS.JWT_SECRET, {
        expiresIn: "15d", // Token expires in 15 days
    });

    res.cookie('pixy-jwt', token, {
        maxAge:15*24*60*60*1000, // 15 days in milliseconds
        httpOnly: true,
        secure: ENV_VARS.NODE_ENV !=="development",
        sameSite: 'strict',
    });

    return token;
}