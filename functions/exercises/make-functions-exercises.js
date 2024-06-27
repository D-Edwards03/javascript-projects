//makeLine(size) function

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#'
    }
    return line;
}
console.log(makeLine(5));

//makeSquare(size) function

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n');
    }
    return square;
}
console.log(makeSquare(5));

//makeRectangle(width, height) function

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));

//makeDownwardStairs(height) function

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1); //Removes the trailing newline
}
console.log(makeDownwardStairs(5));

//makeSpaceLine(numSpaces, numChars) function

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ' '.repeat(numSpaces);
    let hashes = '#'.repeat(numChars);
    return spaces + hashes + spaces;
}
console.log(makeSpaceLine(3, 5));

//makeIsoscelesTriangle(height) function

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, -1); //Rempves the trailing newline
}
console.log(makeIsoscelesTriangle(5));

//makeDiamond(height) function

function makeDiamond(height) {
    let topTriangle = makeIsoscelesTriangle(height);
    let bottomTriangle = topTriangle.split('\n').slice(0).reverse().join('\n');
    return topTriangle + '\n' + bottomTriangle;
}
console.log(makeDiamond(5));