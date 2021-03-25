const jwt = require('jsonwebtoken')
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    //check json exist and verify login
    if (token) {
        jwt.verify(token, 'tumeraputrchuttikarr', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                console.log('any error');
            } else {
                console.log(decodedToken);
                console.log('token verifyed');
                next();

            }
        })
    }
    else {
        console.log('any prolem occures redirect to login');
    }
}
module.exports = { requireAuth };
