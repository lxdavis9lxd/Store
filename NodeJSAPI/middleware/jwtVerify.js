const jwt = require("jsonwebtoken");
const {StatusCodes} = require('http-status-codes');
const {extractToken} = require('../utils/helper');
module.exports = function (req, res, next) {
    console.log('req ', req)
    try {
        const token = extractToken(req);
        console.log('extract',extractToken(req))
        if (token == null) {
            return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized");
        }
        console.log('here',token)
       // jwt.verify(token, process.env.TOKEN_SECRET, {}, (err, user) => {
        jwt.verify(token, '8ac21a22-0589-4c10-adff-4d5a6b94c176', {}, (err, user) => {
             if (err) {
                console.log(err);
                return res.status(StatusCodes.FORBIDDEN).send("Invalid user");
            }
            
            /*req.user = "root";*/
            next();
        });
    } catch (e) {
        next(e);
    }
};

