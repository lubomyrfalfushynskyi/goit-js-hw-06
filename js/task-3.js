class StringBuilder{
    #value;
    constructor(initialValue){
        this.#value = initialValue;
    }
    getValue(){
        return this.#value;
    }
    
    padStart(str){
        let val = str + this.#value;
        this.#value = val; 
    }
    padEnd(str){
        let val = this.#value + str;
        this.#value = val; 
    }
    padBoth(str){
        let val = str + this.#value + str;
        this.#value = val; 
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="