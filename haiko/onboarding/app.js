const DOMStrings = {
    richtext: '.richtext',
    btnAdd: 'btn-add_step',
    btnSubmit: 'btn-submit_step',
    editor: 'editor',
    listSteps: 'list_steps',
    stepTitle: 'step_title',
    btnInstrName: 'change_instruction_name', 
    instrNameInput: 'instruction_name_input',
    instrChangeName: 'instruction_change_name',
    btnSubmitInstrName: 'btn-submit_instruction_name'
}

const result = {
    name: '',
    steps: []    
}

function submitStep() {
    const tit = document.getElementById(DOMStrings.stepTitle).value;
    const content = document.getElementsByTagName('p')[1].innerHTML;

    if(content && content !== '<br>' && tit) {
        
        const step = {
            title: tit,
            body: content 
        }
    result.steps.push(step);

    document.getElementsByTagName('p')[1].innerHTML = '';
    document.getElementById(DOMStrings.stepTitle).value = '';
    
    const node = document.createElement("li");
    node.innerHTML = `${result.steps[result.steps.length - 1].title}: ${result.steps[result.steps.length - 1].body}`;
    document.getElementById(DOMStrings.listSteps).appendChild(node);

    document.querySelector(DOMStrings.richtext).style.display = 'none';
    document.getElementById(DOMStrings.btnAdd).style.display = 'block';
    }
}

function addStep() {
    document.querySelector(DOMStrings.richtext).style.display = 'block';
    document.getElementById(DOMStrings.btnAdd).style.display = 'none';
}

document.getElementById(DOMStrings.btnInstrName).addEventListener('click', () => {
    const title = document.getElementsByTagName('h1')[0];
    const input = document.getElementById(DOMStrings.instrNameInput);
    input.value = title.textContent;    

    title.style.display = 'none';
    input.style.display = 'inline-block';
    document.getElementById(DOMStrings.btnSubmitInstrName).style.display = 'inline-block';
    document.getElementById(DOMStrings.btnInstrName).style.display = 'none';
})

document.getElementById(DOMStrings.btnSubmitInstrName).addEventListener('click', () => {
    const input = document.getElementById(DOMStrings.instrNameInput);
    const title = document.getElementsByTagName('h1')[0];
    title.textContent = input.value;

    title.style.display = 'inline-block';
    input.style.display = 'none';
    document.getElementById(DOMStrings.btnSubmitInstrName).style.display = 'none';
    document.getElementById(DOMStrings.btnInstrName).style.display = 'inline-block';
})

function saveInstruction() {
    result.name = 1;
    console.log(result);
}
