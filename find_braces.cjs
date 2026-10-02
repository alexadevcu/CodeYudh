const fs = require('fs');
const css = fs.readFileSync('src/index.css', 'utf8');
const lines = css.split('\n');
let openCount = 0;
let closeCount = 0;
let stack = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '{') {
      openCount++;
      stack.push(i + 1);
    } else if (line[j] === '}') {
      closeCount++;
      if (stack.length > 0) {
        stack.pop();
      } else {
        console.log(`Extra closing brace found at line ${i + 1}`);
      }
    }
  }
}

console.log(`Total Open: ${openCount}`);
console.log(`Total Close: ${closeCount}`);
if (stack.length > 0) {
  console.log(`Unclosed braces opened at lines: ${stack.join(', ')}`);
} else if (openCount === closeCount) {
  console.log('All braces match perfectly.');
}
