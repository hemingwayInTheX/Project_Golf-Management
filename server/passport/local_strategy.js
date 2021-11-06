const bcrypt = require('bcrypt');
const db = require('../application/db/user');

const localConfig = { usernameField: 'id', passwordField: 'password' };

const localVerify = async(id, password, done) => {
    try{
        const user = await db.selectUser(id);
        if(!user){
            return done(null, false, {message: "NO FUCKING USER!"});
        }
        const compareResult = await bcrypt.compare(password, user.password);
        if(!compareResult){
            return done(null, false, {message: "FUCKING WRONG PASSWORD!"});
        }
        return done(null, user);
    } catch(error){
        console.error(error);
        return done(null);
    }
};

module.exports = { localConfig, localVerify };