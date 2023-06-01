const {request} = require('graphql-request');

test('should return "Hello World!"', async()=>{
    const endpoint = "http://localhost:3000";
    const query = `
        query {
            hello
        }
    `;
    const response = await request(endpoint, query);
    expect(response.hello).toEqual('Hello World!');
})