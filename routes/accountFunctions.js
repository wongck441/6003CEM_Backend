var db = require('../config')

const checkPassword = (sql) => {
    return db.action(sql)
        .then((pwdRes) => {
            if (pwdRes.rows.length > 0) {
                return pwdRes.rows
            } else {
                return "Incorrect Password Entered"
            }
        })
}

const login = (data) => {
    const checkUserExistSQL = `SELECT * FROM users WHERE username='${data.username}'`

    return db.action(checkUserExistSQL)
        .then((x) => {
            if (x.rows.length > 0) {
                const checkPasswordSQL = `SELECT * FROM users WHERE username='${data.username}' AND password='${data.password}'`
                return checkPassword(checkPasswordSQL)
            } else {
                return "no user found"
            }
        })
}

const getToken = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const register = (data) => {
    const token = data.usertype === "normal" ? "" : getToken(15)
    const registerSQL = `INSERT INTO users (firstName, lastName, username, password, passwordsalt, email, avatarurl, usertype, token) VALUES('${data.firstName}', '${data.lastName}', '${data.username}', '${data.password}', '${data.passwordsalt}', '${data.email}', '${data.avatarurl}', '${data.usertype}', '${token}')`
    return db.action(registerSQL)
        .then((x) => {
            return "done"
        })
}

module.exports = {
    login,
    register
}