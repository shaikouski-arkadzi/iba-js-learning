const DOMStrings = {
    richtext: '.richtext',
    btnAdd: 'btn-add_step',
    btnSubmit: 'btn-submit_step',
    editor: 'editor',
    listSteps: 'list_steps'
}

const result = {
    name: '',
    steps: []
}

function submitStep() {
    result.steps.push(document.getElementsByTagName('p')[1].innerHTML);
    document.getElementsByTagName('p')[1].textContent = '';
    
    const node = document.createElement("li");
    node.innerHTML = result.steps[result.steps.length - 1];
    document.getElementById(DOMStrings.listSteps).appendChild(node);

    document.querySelector(DOMStrings.richtext).style.display = 'none';
    document.getElementById(DOMStrings.btnAdd).style.display = 'block';
}

function addStep() {
    document.querySelector(DOMStrings.richtext).style.display = 'block';
    document.getElementById(DOMStrings.btnAdd).style.display = 'none';
}

function saveInstruction() {
    result.name = 1;
}
