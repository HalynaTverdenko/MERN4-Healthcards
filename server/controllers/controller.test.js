// import request from "supertest";
// import { app } from "../../app";

//testing method POST 
it("fails when not providing birthdate", async () => {
    await request(app)
    .post("/cards")
    .send({name: "test", 
            breed: "breed", 
            pass: "no", 
            vaccination: "no", 
            antigelm: "no", 
            food: "no", 
            photo: "no"})
    .expect(400); // bad request
}); 

it("succeeds when provided valid information", async () => {
    await request(app)
    .post("/cards")
    .send({name: "test", 
            breed: "breed", 
            birthdate: "no",
            pass: "no", 
            vaccination: "no", 
            antigelm: "no", 
            food: "no", 
            photo: "no"})
    .expect(201); // success - a new card created
});







// jest.mock('../../../../src/modules/products/service');
// const productService = require('../../../../src/modules/products/service');
// const mockFetchCard = jest.spyOn(productCard, 'getIndcard')

//fake card list

// const mockCardsArray = [
//    {name: "name", breed: "breed", birthdate: "no", pass: "no", vaccination: "no", antigelm: "no", food: "no", photo: "no" },
// {name: "name1", breed: "breed", birthdate: "no", pass: "no", vaccination: "no", antigelm: "no", food: "no", photo: "no" },
// {name: "name2", breed: "breed", birthdate: "no", pass: "no", vaccination: "no", antigelm: "no", food: "no", photo: "no" },
// {name: "name3", breed: "breed", birthdate: "no", pass: "no", vaccination: "no", antigelm: "no", food: "no", photo: "no" }
// ];

//result is defined in the format we return the API

// const mockIndcardList = jest.fn(async () => {
// return {cards: mockCardsArray};
// })

//mocking method implementation

// const httpMocks = require('node-mocks-http')

// mockFetchCard.mockImplementation(mockIndcardsList)

it('should get all cards list', async () => {
    const response = httpMocks.createResponse();
    const request = httpMocks.createRequest();
    const mockIndcardList = jest.fn(async () => {
        return { cards: mockCardsArray };
    });
    mockFetchCard.mockImplementation(Indcard);
    await getIndcards.getCards(request, response);
    expect(mockFetchCard).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toEqual(200);
    expect(response._isEndCalled()).toBeTruthy();
    expect(response._getJSONData().cards.length).toEqual(5)
})


