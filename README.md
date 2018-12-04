# persona-server

## Quick start

Clone the projet in HTTP or SSH.

Duplicate `.env.file` file and rename it as `.env`.
Edit it with your database connection.

Execute following commands :
```
sequelize db:migrate 
sequelize db:seed:all
npm run start
```


For undoing seeds, you can execute the following command :
```
sequelize db:migrate:undo:all
```

For undoing seeds, you can execute the following command :
```
sequelize db:seed:undo:all
```

## Docs

- [Express](http://expressjs.com/)
- [Sequelize](http://docs.sequelizejs.com/)
- [Nunjucks](https://pugjs.org/api/getting-started.html)

