const jwt = require('jsonwebtoken');

const { JWT_ACCESS_TOKEN_SECRET, JWT_ACCESS_TOKEN_EXPIRE } = process.env;

exports.createJwtAccessToken = (data) => {
    const token = jwt.sign(
        { id: data}, 
        JWT_ACCESS_TOKEN_SECRET, 
        {expiresIn: '7d'});
    return token;
}