const request = require('supertest');
const { app, server } = require('./app.js'); // Import both app and server

describe('Express Routes', () => {
  afterAll((done) => {
    server.close(done); // Close the server after all tests
  });

  it('should return "Hello from Node.js 22!" for the root path', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node.js 22!');
  });

  it('should return JSON data for /api/data', async () => {
    const res = await request(app).get('/api/data');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Data from API' });
  });
});