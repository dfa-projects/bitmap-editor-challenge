const Image = require('../../src/image.js');
const os = require('os');

describe('Image', function() {
    it('can show a 2x2 white grid', function() {
        const image = new Image(2, 2)
        expect(image.show()).toEqual(`OO${os.EOL}OO`);
    });
    
    it('can show a 3x3 white grid', function() {
        const image = new Image(3, 3)
        expect(image.show()).toEqual(`OOO${os.EOL}OOO${os.EOL}OOO`);
    }); 
});

describe('Colour', function(){
    it('can colour pixel (2, 3) in 4x4 grid in the colour C', function(){
          const image = new Image(4, 4)
          expect(image.colour(2, 3, 'C')).toEqual(`OOOO${os.EOL}OOOO${os.EOL}OCOO${os.EOL}OOOO`);
        });
        
    it('can colour pixel (4, 4) in 5x5 grid in the clolour C', function(){
        const image = new Image(5, 5)
        expect(image.colour(4, 4, 'C')).toEqual(`OOOOO${os.EOL}OOOOO${os.EOL}OOOOO${os.EOL}OOOCO${os.EOL}OOOOO`);
    });
});

describe('Horizontal', function(){
    it('can draw a horizontal line between colmuns 2 and 4 inclusive in 5x5 grid', function(){
        const image = new Image(5, 5)
        expect(image.horizontalLine(2, 4, 3, 'C')).toEqual(`OOOOO${os.EOL}OOOOO${os.EOL}OCCCO${os.EOL}OOOOO${os.EOL}OOOOO`);
    });
    
    it('can draw a horizontal line between columns 1 and 2 inclusive in 3x4 grid', function(){
        const image = new Image(3, 4)
        expect(image.horizontalLine(1, 2, 3, 'C')).toEqual(`OOO${os.EOL}OOO${os.EOL}CCO${os.EOL}OOO`);
    });
});

describe('Vertical', function(){
    it('can draaw a vertical line between rows 3 and 5 in 5x5 grid', function(){
        const image = new Image(5, 5)
        expect(image.verticalLine(4, 3, 5, 'C')).toEqual(`OOOOO${os.EOL}OOOOO${os.EOL}OOOCO${os.EOL}OOOCO${os.EOL}OOOCO`);
    });

    it('can draw a vartical line between rows 1 and 3 inclusive in 3x4 grid', function(){
      const image = new Image(3, 4)
      expect(image.verticalLine(2, 1, 3, 'C')).toEqual(`OCO${os.EOL}OCO${os.EOL}OCO${os.EOL}OOO`);
    });
});

describe('Clear', function(){
    it('can set all pixels to white in 3x3 grid', function(){
      const image = new Image(3, 3)
      expect(image.clear()).toEqual(`OOO${os.EOL}OOO${os.EOL}OOO`);
    });

    it('can set all pixels to white in 5x4 grid', function(){
        const image = new Image(5, 4)
        expect(image.clear()).toEqual(`OOOOO${os.EOL}OOOOO${os.EOL}OOOOO${os.EOL}OOOOO`);
    });
});