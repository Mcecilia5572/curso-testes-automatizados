const ClassConsumer = require('./atividade1ClassConsumer');

let stringM;
let strStringM;

describe("Consumer class mock", () => {
    it('should call the Class Consumer constructor', () => {
        strStringM = 'The Address';
        stringM = new ClassConsumer(strStringM);
    });
});

describe("Consumer class", () => {
    test("if returns a first match address", () => {
        // arrange
        const output = 'T';

        //act
        const actual = stringM.findStreetName("The Address");

        //assert
        expect(actual).toEqual(output);
    });

    test("if returns hidden address", () => {
        // arrange
        const output = '*he Address';

        //act
        const actual = stringM.hideStreetName("The Address");

        //assert
        expect(actual).toEqual(output);
    });
});
