var db = require('../config')

const getDogList = () => {
    const sql = 'SELECT * FROM Dogs'
    return db.action(sql)
        .then((x) => {
            return x.rows
        })
}

const tokenValidation = (token) => {
    let sql = `SELECT token FROM users WHERE token='${token}'`
    return db.action(sql).then((x) => {
        return x.rows.length > 0
    })
}

const create = (data) => {
    return tokenValidation(data.token).then((ok) => {
        if (ok) {
            return getDogList().then((id) => {
                const sql = `INSERT INTO Dogs(id, image, name, breed, description, dob, location, gender) VALUES(${id.length + 1}, '${data.image}', '${data.name}', '${data.breed}', '${data.description}', '${data.dob}', '${data.location}', ${data.gender})`
                return db.action(sql)
                    .then((x) => {
                        return x.rows
                    })
            })
        } else {
            return "Invalid API token"
        }
    })
}

const remove = (data) => {
    return tokenValidation(data.token).then((ok) => {
        if (ok) {
            const sql = `DELETE FROM Dogs WHERE id=${data.id} `
            return db.action(sql).then((x) => {
                return "Deleted"
            })
        } else {
            return "Invalid API token"
        }
    })
}

const edit = (data) => {
    console.log(data)
    return tokenValidation(data.token).then((ok) => {
        if (ok) {
            const sql = `DELETE FROM Dogs WHERE id=${+data.id} `
            return db.action(sql).then((x) => {
                const addsql = `INSERT INTO Dogs(id, image, name, breed, description, dob, location, gender) VALUES(${data.id}, '${data.image}', '${data.name}', '${data.breed}', '${data.description}', '${data.dob}', '${data.location}', ${data.gender})`
                return db.action(addsql)
                    .then((x) => {
                        return x.rows
                    })
            })
        } else {
            return "Invalid API token"
        }
    })

}

module.exports = {
    getDogList,
    create,
    remove,
    edit
}