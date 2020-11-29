const jwt = require('jsonwebtoken');

function createToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET,{ expiresIn: "1h" });
}

// function authenticateToken(req, res, next) {
//     //const token = req.header("Authorization");
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (token === null) return res.sendStatus(401);

//     jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
//         if(err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// }


// function getSignedToken(payload, cb) {
//     jwt.sign(
//           payload,
//           process.env.SECRET,
//           { expiresIn: 60 * 60 * 1000 },
//           (err, token) => {
//             if (err) throw err;
//             cb(token);
//           }
//         );
//   }


module.exports = {
    createToken,
    // authenticateToken,
};