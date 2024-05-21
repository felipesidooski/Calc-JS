function CheckOperators(operator) {
    // Regex to check if the operators are allowed
    let regex = /^[+\-*/.\[\]\(\)]+$/;
    return regex.test(operator);
}

function CheckValues(Values) {
    // Regex to check if the input values are allowed
    let regex = /^[0-9]+$/;
    return regex.test(Values);
}

function MakeEquations(){
    //function to make equations designed by the user
    let equation = document.getElementById("IDEquation");
    try{
        //Using Hegex to verify operators and values are allowed
        if (/^[0-9()+\-*/.\[\]\(\)]+$/.test(equation.value) == false) { 
            throw new Error('Equação contém caracteres inválidos');
        }else{
            let result = eval(equation.value); //Execute equation
            SetterEquation(result);
        }
    }
    catch (error){
        alert("Calculation Error: " + error.message);
    }
}

function GetterEquation(){
    //function to getter value inside IDEquation
    var Equation = document.getElementById("IDEquation");
    return Equation.value;
}

function DeleteEquation(){
    //function to delete value inside IDEquation
    var Equation = document.getElementById("IDEquation");
    Equation.value = "";
}

function SetterEquation(NewValue){
    //function to set value inside IDEquation
    var Equation = document.getElementById("IDEquation");
    Equation.value = NewValue;
    console.log(NewValue);
}

function AddEquation(NewElement){
    //function to add new element inside the IDEquation
    let ActualEquation = GetterEquation();
    let EquationElement = document.getElementById("IDEquation");
    EquationElement.value = ActualEquation + NewElement;
}

function SetterOperator(operator){
    //function to add a new Operator
    if (CheckOperators(operator) == true){
        AddEquation(operator);
    }else{
        alert("Sorry, only basic operators are allowed");
    }
}

function SetterNumber(Number){
    //function to set a new number on the equation
    if (CheckValues(Number) == true){
        AddEquation(Number);
    }else{
        alert("Sorry, only values 0-9 are allowed on the equation");
    }
}