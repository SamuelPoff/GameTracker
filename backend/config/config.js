module.exports = config = {

    PORT: process.env.PORT || 3001,

    //Sequlize configuration
    db: {
        database: process.env.DB_NAME || 'gametracker',
        user: process.env.USER || 'gametracker',
        password: process.env.PASS || 'gametracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './gametracker.sqlite'
        }
    }
};