const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const BitmapEditor = require('./src/bitmap-editor.js')
const bitmapEditor = new BitmapEditor(rl)

bitmapEditor.run()