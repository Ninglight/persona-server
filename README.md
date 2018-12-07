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

### Endpoints

On the server we now have the following controllers and endpoints:

Controller | Endpoint | Description
-----------|----------|------------
userResource.create | POST /users | Create a user
userResource.list | GET /users  | Get a listing of users
userResource.read | GET /users/:id | Get details about a user
userResource.update | PUT /users/:id | Update a user
userResource.delete | DELETE /users/:id | Delete a user

## Docs

- [Yarn](https://yarnpkg.com/en/docs)
- [Express](http://expressjs.com/)
- [Sequelize](http://docs.sequelizejs.com/)
- [Epilogue](https://github.com/dchester/epilogue)
- [Pug](https://pugjs.org/api/getting-started.html)

