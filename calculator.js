class Calculator{
    constructor(){
        this.numOne = ""
        this.numTwo = ""
        this.result = ""
        this.prevResult = ""
        this.operation = ""
    }
    add(){
        this.result = parseInt(this.numOne) + parseInt(this.numTwo);
    }
    subtract(){
        this.result = this.numOne - this.numTwo;
    }
    setNumOne(value){
        this.numOne += value;
    }
    setNumTwo(value){
        this.numTwo += value;
    }
    setOperation(operation){
        this.operation = operation;
    }
}

const calculator=new Calculator();


const dayTheme = ()=>{
    const daytheme= document.getElementById("day");
    daytheme.innerHTML=`<link rel="stylesheet" href="./calculatorday.css"/>`
}
const nightTheme= ()=>{
    const daytheme= document.getElementById("day");
    daytheme.innerHTML=`<link rel="stylesheet" href="./calculatornight.css"/>`
}
