const os = require('os');

class Image {
    constructor(x, y) {
      this.width = x
      this.height = y
      this.grid = Array(y).fill('O').map(i => Array(x).fill('O'))
  }

  clear(){
    return this.grid.map(row => {
        return row.join('')
      }).join(os.EOL);
  }

  colour(X, Y, clr){
      this.grid[Y-1][X-1] = clr 
      return this.grid.map(row => {
        return row.join('')
      }).join(os.EOL);
  }

  verticalLine(X, Y1, Y2, clr){
    for (let i = Y1-1; i < Y2; i++){
        this.grid[i][X-1] = clr
    }
    return this.grid.map(row => {
        return row.join('')
      }).join(os.EOL);
  }

  horizontalLine(X1, X2, Y, clr){
      let row = this.grid[Y-1]
      for (let i = X1-1; i < X2; i++){
          row[i] = clr
      }
      return this.grid.map(row => {
        return row.join('')
      }).join(os.EOL)
    }


  show() {
    return this.grid.map(row => {
      return row.join('')
    }).join(os.EOL)
  }
}

module.exports = Image;

let image = new Image(4, 4)
console.log(image.show())
console.log(typeof image.show())