const supertest = require("supertest")
const server = require("./index")

test("welcome route", async () => {
    const res = await supertest(server).get("/")
    //Does return an expected status code
    expect(res.status).toBe(200)
    //Does it return the expected data format
    expect(res.type).toBe("application/json")
    //Does it return the expected data?
    expect(res.body.message).toBe("Welcome")
})