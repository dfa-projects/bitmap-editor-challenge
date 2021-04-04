const os = require('os');
const Image = require('../src/image.js');

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
      const args = command.split(' ')
      

      if (command === '?') {
        process.stdout.write(this.helpMessage());
      } else if (command === 'X') {
        this.display.close()
      } else if (command[0] === 'I'){
        this.image = new Image(Number(args[1]), Number(args[2]))
        console.log(this.image.show())
      } else if (command[0] === 'C'){
        console.log(this.image.clear())
      } else if (command[0] === 'L'){
        console.log(this.image.colour(Number(args[1]), Number(args[2]), args[3]))
      } else if (command[0] === 'V'){
        console.log(this.image.verticalLine(Number(args[1]), Number(args[2]), Number(args[3]), args[4]))
      } else if (command[0] === 'H'){
        console.log(this.image.horizontalLine(Number(args[1]), Number(args[2]), Number(args[3]), args[4]))
      } else if (command[0] === 'S'){
        console.log(this.image.show())
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

module.exports = BitmapEditor
