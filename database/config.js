module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        "database": "persona",
        "host": "127.0.0.1",
        "port": "8889",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "root",
        "database": "persona",
        "host": "127.0.0.1",
        "port": "8889",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": "root",
        "database": "persona",
        "host": "127.0.0.1",
        "port": "8889",
        "dialect": "mysql"
    }
}

/*{
    "development": {
        "username": process.env.DATABASE_DEVELOPMENT_USERNAME,
        "password": process.env.DATABASE_DEVELOPMENT_PASSWORD,
        "database": process.env.DATABASE_DEVELOPMENT_DATABASE,
        "host": process.env.DATABASE_DEVELOPMENT_HOST,
        "dialect": 'mysql',
        "port": process.env.DATABASE_DEVELOPMENT_PORT,
    },
    "test": {
        "username": process.env.DATABASE_TEST_USERNAME,
        "password": process.env.DATABASE_TEST_PASSWORD,
        "database": process.env.DATABASE_TEST_DATABASE,
        "host": process.env.DATABASE_TEST_HOST,
        "dialect": process.env.DATABASE_TEST_DIALECT,
        "port": process.env.DATABASE_TEST_PORT,
    },
    "production": {
        "username": process.env.DATABASE_PRODUCTION_USERNAME,
        "password": process.env.DATABASE_PRODUCTION_PASSWORD,
        "database": process.env.DATABASE_PRODUCTION_DATABASE,
        "host": process.env.DATABASE_PRODUCTION_HOST,
        "dialect": process.env.DATABASE_PRODUCTION_DIALECT,
        "port": process.env.DATABASE_PRODUCTION_PORT,
    }
}*/