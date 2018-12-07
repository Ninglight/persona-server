process.env.NODE_ENV = 'test';

const request = require('supertest-as-promised');
const app = require('./../api/init.js');
const { sequelize } = require('./../api/models/index.js');

const User = sequelize.models.User

describe('Auth', () => {

  let { token, refreshToken } = '';

  before(async () => {
    await User.sync({ force: true });
    await User.create({
      username: 'Alf',
      email: 'afl@persona.email',
      password: '1234',
    });
  });

  describe('POST /auth', () => {
    it('It should auth the user Alf', (done) => {
      request(app)
        .post('/auth')
        .send({
          username: 'Alf',
          password: '1234',
        })
        .expect(201)
        .then((res) => {
          token = res.body.token;
          refreshToken = res.body.refreshToken;
          done();
        });
    });
  });

  describe('POST /auth/refresh', () => {
    it('It should refresh the user Alf\'s token', (done) => {
      request(app)
        .post('/auth/refresh')
        .send({
          username: 'Alf',
          'refreshToken': refreshToken,
        })
        .expect(201)
        .then((res) => {
          token = res.body.token;
          done();
        });
    });
  });

});