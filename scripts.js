var table = document.getElementById("table");
const line = document.querySelector(".line");
var addLineButton = document.getElementById("addLine");
var saveButton = document.getElementById("save");
var saveLog = document.getElementById("saveLog");

SetDeleteListener(line);
SetUpListener(line);
SetDownListener(line);
addLineButton.addEventListener("click", function(){
    var cleanLine =  line.cloneNode(true);
    var inputs = cleanLine.querySelectorAll("input");
    inputs.forEach(input => {input.value = "";});
    SetDeleteListener(cleanLine);
    table.append(cleanLine);
    SetUpListener(cleanLine);
    SetDownListener(cleanLine);
    console.log("line is added!");
}, false);

var listOfSavedLines = [];

saveButton.addEventListener("click", function(){
    var massOfLines = table.querySelectorAll(".line");
    massOfLines.forEach(line => {
        var inputs = line.querySelectorAll('input');
        listOfSavedLines.push(inputs[0].value + " : " + inputs[1].value);
    })
    saveLog.textContent = listOfSavedLines;
    
})


function SetDeleteListener(newLine){
    var deleteButton = newLine.querySelector('.deleteButton');
    deleteButton.addEventListener("click", function(){
    var parrentLine = deleteButton.parentElement;
    parrentLine.remove();
});
}

function SetUpListener(newLine){
    var upButton = newLine.querySelector('.upButton');
    console.log(newLine.previousElementSibling);
    upButton.addEventListener("click", function(){
        var lines = [];
        lines = table.querySelectorAll('.line');
        if(newLine != table.firstElementChild){
            newLine.previousElementSibling.before(newLine);
        }
            
    });
}

function SetDownListener(newLine){
    var downButton = newLine.querySelector('.downButton');
    console.log(newLine.previousElementSibling);
    downButton.addEventListener("click", function(){
        var lines = [];
        lines = table.querySelectorAll('.line');
        if(newLine != table.lastElementChild)
            newLine.nextElementSibling.after(newLine);
    });
}