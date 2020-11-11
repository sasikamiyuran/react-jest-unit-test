describe(`The sum file.....`, () => {
    beforeEach(() => {
        console.log("Before Each!");
    });

    beforeAll(() => {
        console.log("Before All");
    });

    afterEach(() => {
        console.log("After Each");
    });

    afterAll(() => {
        console.log("After All");
    });

    it(`Should test of the summation less than`, () => {
        expect(2 + 2).toBeLessThan(5);
    });

    it(`Should test of the summation equal`, () => {
        expect(2 + 2).toBe(4);
    });

});