const os = require('os');
const image = require('../src/image.js')

class BitmapEditor {
  constructor(display) {
    this.display = display
  }

  run() {
    process.stdout.write(`type ? for help${os.EOL}`);
    this.display.setPrompt('> ');
    this.display.prompt();

    this.display.on('line', (line) => {
      const command = line.trim()

      if (command === '?') {
        process.stdout.write(this.helpMessage());
      } else if (command === 'X') {
        this.display.close()
      // } else if (command === ){
        
      // } else if (command === ){

      // } else if (command === ){

      // } else if (command === ){
        
      // } else if (command === ){
         
      } else {
        process.stdout.write(`unrecognised command :(${os.EOL}`);
      }
      this.display.prompt()

    })

    this.display.on('close', () => {
      process.stdout.write(`goodbye! :)${os.EOL}`);
      process.exit(0);
    })
  }

  helpMessage() {
    return `? - Help
I M N - Create a new M x N image with all pixels coloured white (O).
C - Clears the table, setting all pixels to white (O).
L X Y C - Colours the pixel (X,Y) with colour C.
V X Y1 Y2 C - Draw a vertical segment of colour C in column X between rows Y1 and Y2 (inclusive).
H X1 X2 Y C - Draw a horizontal segment of colour C in row Y between columns X1 and X2 (inclusive).
S - Show the contents of the current image
X - Terminate the session${os.EOL}`;
  }
}

module.exports = BitmapEditor;
