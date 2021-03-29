const Image = require('../src/image.js') // relative path not working but tests pass when using absolute path

describe('Image', function() {
    it('can show a 2x2 white grid', function() {
        const image = new Image(2, 2)
        expect(image.show()).toEqual("OO\nOO");
    });
    
    it('can show a 3x3 white grid', function() {
        const image = new Image(3, 3)
        expect(image.show()).toEqual("OOO\nOOO\nOOO");
    }); 
});

describe('Colour', function(){
    it('can colour pixel (2, 3) in 4x4 grid in the colour C', function(){
          const image = new Image(4, 4)
          expect(image.colour(2, 3, 'C')).toEqual("OOOO\nOOOO\nOCOO\nOOOO");
        });
        
    it('can colour pixel (4, 4) in 5x5 grid in the clolour C', function(){
        const image = new Image(5, 5)
        expect(image.colour(4, 4, 'C')).toEqual("OOOOO\nOOOOO\nOOOOO\nOOOCO\nOOOOO");
    });
});

describe('Horizontal', function(){
    it('can draw a horizontal line between colmuns 2 and 4 inclusive in 5x5 grid', function(){
        const image = new Image(5, 5)
        expect(image.horizontalLine(2, 4, 3, 'C')).toEqual("OOOOO\nOOOOO\nOCCCO\nOOOOO\nOOOOO");
    });
    
    it('can draw a horizontal line between columns 1 and 2 inclusive in 3x4 grid', function(){
        const image = new Image(3, 4)
        expect(image.horizontalLine(1, 2, 3, 'C')).toEqual("OOO\nOOO\nCCO\nOOO");
    });
});

describe('Vertical', function(){
    it('can draaw a vertical line between rows 3 and 5 in 5x5 grid', function(){
        const image = new Image(5, 5)
        expect(image.verticalLine(4, 3, 5, 'C')).toEqual("OOOOO\nOOOOO\nOOOCO\nOOOCO\nOOOCO");
    });

    it('can draw a vartical line between rows 1 and 3 inclusive in 3x4 grid', function(){
      const image = new Image(3, 4)
      expect(image.verticalLine(2, 1, 3, 'C')).toEqual("OCO\nOCO\nOCO\nOOO");
    });
});

describe('Clear', function(){
    it('can set all pixels to white in 3x3 grid', function(){
      const image = new Image(3, 3)
      expect(image.clear()).toEqual("OOO\nOOO\nOOO");
    });

    it('can set all pixels to white in 5x4 grid', function(){
        const image = new Image(5, 4)
        expect(image.clear()).toEqual("OOOOO\nOOOOO\nOOOOO\nOOOOO");
    });
});