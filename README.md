## Bitmap Editor Challenge
# Install
You can clone this program by using git clone in your terminal followed by git@github.com:hanna-98/bitmap-editor-challenge.git

# Running tests
Run the tests using npx jasmine or npm test.

# Running app
Run the app using node index.js
...

# Domain model

| Object | Properties | Messages | Context | Output | 
|------|----------|--------|-------|------|
| Image | | show() | Displays image | string |
| | colour pixel(s) @arr | clear() | Sets all pixels to white | string of Os|
| | | colour() | Colours one pixel | string of Os except one |
| | draw lines @arr | verticalLine() | Draws vertical line | string of Os except line |
| | | horizontalLine()| Draws horizontal line | string of Os except line |
| Bitmap editor | | | | |
