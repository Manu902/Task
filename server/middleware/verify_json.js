const jwt = require('jsonwebtoken');
var secretkey = 'task'
const verifyJsonToken = (req, res, next) => {
    try{
        const token = req.headers['authorization'];
        if(!token)
            return res.status(401).json({message: 'Unauthorized'})
        jwt.verify(token, secretkey, (err, decoded) => {
            if(err){
                return res.status(401).json({message: 'Unauthorized'})
            }
        });
        next();
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    verifyJsonToken
}