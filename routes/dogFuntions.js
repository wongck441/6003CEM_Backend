var db = require('../config')

const getDogList = () => {
    const sql = 'SELECT * FROM Dogs'
    return db.action(sql)
        .then((x) => {
            return x.rows
        })
}

const create = (data) => {
    return getDogList().then((id) => {
        const sql = `INSERT INTO Dogs (id, image, name, breed, description, dob, location, gender) VALUES (${id.length + 1}, '${data.image}', '${data.name}', '${data.breed}', '${data.description}', '${data.dob}', '${data.location}', ${data.gender})`
        return db.action(sql)
            .then((x) => {
                return x.rows
            })
    })
}

const remove = (data) => {
    const sql = `DELETE FROM Dogs WHERE id=${+data}`
    return db.action(sql).then((x) => {
        return "Deleted"
    })
}

const edit = (data) => {
    console.log(data)
    return remove(data.id).then(() => {
        const sql = `INSERT INTO Dogs (id, image, name, breed, description, dob, location, gender) VALUES (${data.id}, '${data.image}', '${data.name}', '${data.breed}', '${data.description}', '${data.dob}', '${data.location}', ${data.gender})`
        return db.action(sql)
            .then((x) => {
                return x.rows
            })
    })
}

module.exports = {
    getDogList, create, remove, edit
}