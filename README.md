## Bitmap Editor Challenge

```
 ~-------------------~
 |  _     __         |
 | | \   |     /\    |
 | |  \  |_   /__\   |
 | |  /  |   /    \  |
 | |_/   |  /      \ |
 |                   |
 ~-------------------~
```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by 9am Monday morning, wherever you get to.
* Evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

## Quickstart
1. Fork this repo
2. `git clone git@github.com:digital-futures-academy/bitmap-editor-challenge.git && cd bitmap-editor-challenge`
3. `npm install` to install project dependencies
4. `node index.js` to run the app

## Running tests
This project uses the [Jasmine](https://jasmine.github.io/tutorials/your_first_suite.html) test framework. Have a look at the API documentation for [matchers](https://jasmine.github.io/api/edge/matchers.html)
```sh
npm test
# or
npx jasmine path/to/spec
```

## Linting code
```sh
npx eslint --fix
```


# Task

1. Convert acceptance criteria into a representative domain model
2. To complete the standard acceptance criteria, there's no need to test reading and writing from `process.stdin`/`process.stdin`.
4. Focus on test-driving the additional business logic you write. You will need to refactor the design.

### Acceptance Criteria

Implement the following commands
```
I M N - Create a new M x N image with all pixels coloured white (O).
C - Clears the table, setting all pixels to white (O).
L X Y C - Colours the pixel (X,Y) with colour C.
V X Y1 Y2 C - Draw a vertical segment of colour C in column X between rows Y1 and Y2 (inclusive).
H X1 X2 Y C - Draw a horizontal segment of colour C in row Y between columns X1 and X2 (inclusive).
S - Show the contents of the current image
X - Terminate the session"
```

- NB: Colours are represented by different characters.
- Hint: one possible implementation could involve representing the MxN image as a nested array. For example you might represent a 3x3 White image as:
```js
[
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
]
```

### Extended Criteria

1. Here's an additional command to implement:
```
F X Y C - Fill the region R with the colour C. R is defined as: Pixel (X,Y) belongs to R. Any other pixel which is the same colour as (X,Y) and shares a common side with any pixel in R also belongs to this region.
```

2. Write e2e tests to test your program works as expected from the command line.

3. Publish your program as a node package to the NPM Registry
