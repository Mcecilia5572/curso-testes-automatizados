const StringManipulations = require('./atividade1');

let stringM;
let shortStringM;
let strStringM;
let shortStrStringM;

describe("String Manipulations class mock", () => {
    beforeEach(() => {
      jest.spyOn(StringManipulations.prototype, 'findFirstMatch').mockImplementation(() => 't');
      jest.spyOn(StringManipulations.prototype, 'findLastMatch').mockImplementation(() => 'g');
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('should call the String Manipulations constructor', () => {
        strStringM = 'testing';
        stringM = new StringManipulations(strStringM);
    });

    it('should call the String Manipulations constructor', () => {
        shortStrStringM = 't';
        shortStringM = new StringManipulations(shortStrStringM);
    });
  
  });

describe ("String Manipulations class", () => {
    test ("if returns a first match substring", () => {
        // arrange
        const output = 't';

        //act
        const actual = stringM.findFirstMatch("testing");

        //assert
        expect(actual).toEqual(output);
    });

    test ("if returns a last match substring", () => {
        // arrange
        const output = 'g';

        //act
        const actual = stringM.findLastMatch("testing");

        //assert
        expect(actual).toEqual(output);
    });

    test ("if returns the substring between two strings", () => {
        // arrange
        const output = 'sti';

        //act
        const actual = stringM.substringBetweenMatches("te", "ng");

        //assert
        expect(actual).toEqual(output);
    });

    test ("if returns first and last two strings", () => {
        // arrange
        const output = 'teng';

        //act
        const actual = stringM.both_ends();

        //assert
        expect(actual).toEqual(output);
    });

    test ("if returns first and last two strings empty", () => {
        // arrange
        const output = '';

        //act
        const actual = shortStringM.both_ends();

        //assert
        expect(actual).toEqual(output);
    });

    test ("if returns string changed to *", () => {
        // arrange
        const output = '*abble';

        //act
        const actual = shortStringM.fix_start("babble");

        //assert
        expect(actual).toEqual(output);
    });

});
