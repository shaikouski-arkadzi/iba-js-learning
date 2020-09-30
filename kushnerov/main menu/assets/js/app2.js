DOMStrings ={
    listOfInstructions: 'instrList'
}

const instructions={
    instructionOne:{
        name: "First Instruction",
        steps: []
    },
    instructionTwo:{
        name: "Second Instruction",
        steps:[]
    }
}

const fetchInstructions = instrs =>{

    for (let instr in instructions){
        instrName = instr.name

       addElement(instrName)
    };
}

const addElement = instrName =>{
    let newDiv = document.createElement("div")
    newDiv.innerHTML = "`<h3>${instrName}</h3>`"

    my_div = document.getElementById(DOMStrings.listOfInstructions)
    document.body.insertAdjacentElement("beforeend",my_div)
}

fetchInstructions(instructions)