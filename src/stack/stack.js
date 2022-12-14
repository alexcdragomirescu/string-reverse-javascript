class Stack {
    constructor() {
        this.array = [];
    }

    push(element) {
        this.array.push(element);
    }

    pop() {
        if(this.array.length === 0) 
            return "Underflow situation"; 
        else 
            return this.array.pop();
    }

    isEmpty() { 
        if(this.array.length > 0) return false;
        else return true;
    }
}

module.exports = Stack
