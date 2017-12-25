module.exports = {
    development: {
        client: 'pg',
        connection: {
            host : '127.0.0.1',
            port: 5433,
            user : 'postgres',
            password : 'abc',
            database : 'exchanges'
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    },
    production: {

    }
}