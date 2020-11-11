const mordor = require('./mordor');

describe('Who is the taking ring to mordor', () => {
    it('should sending by baggins', ()=>{
        jest.spyOn(mordor, 'functionBilbo').mockImplementation(()=>'Bilbo going with ring');
        jest.spyOn(mordor, 'functionFrodo').mockImplementation(()=>'Frodo going without ring');

        expect(mordor.functionBaggins()).toBe('Bilbo going with ring and Frodo going without ring');
    });
})
