const { Client } = require('pg')
const client = new Client({
    user: 'ykhbunyg',
    host: 'john.db.elephantsql.com',
    database: 'ykhbunyg',
    password: 'CaHOvx03sbzcTaN2rNjN8pdMvPF3FKaZ',
    port: 5432
})

client.connect();

const action = (sql) => {
    return new Promise((resolve, reject) => {
        client.query(sql, function(err, res) {
            if (err) {
                // Returning the error
                // reject(err);
                // client.end();
                console.log(err)
                resolve(err)
            }

            resolve(res);
            // client.end();
        });
    });
}


module.exports = {
    action
}