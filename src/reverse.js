let Stack = require('./stack');

function reverse(str) {
    let stack = new Stack;
    let i = 0;
    let resersedStr = "";

    while(i !== str.length) {
        stack.push(str.charAt(i));
        i++;
    }
    
    while (!stack.isEmpty()) {
        resersedStr += stack.pop();
    }

    return resersedStr;
}

var input = String(process.argv.slice(2));
console.log(reverse(input));
