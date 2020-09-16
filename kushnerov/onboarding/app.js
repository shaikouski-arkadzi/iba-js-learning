const DOMStrings = {
    textarea: 'textarea',
    btnAdd: 'btn-add_step',
    btnSubmit: 'btn-submit_step',
    editor: 'editor',
    listSteps: 'list_steps',
    maintext: 'maintext'
}

const result = {
    name: '',
    steps: []
}

function submitStep() {
    result.steps.push(document.getElementById("maintext").innerHTML);
    
    const node = document.createElement("li");
    node.innerHTML = result.steps[result.steps.length - 1];
    document.getElementById(DOMStrings.listSteps).appendChild(node);

    document.getElementById(DOMStrings.textarea).style.display = 'none';
    document.getElementById(DOMStrings.btnAdd).style.display = 'block';
}

function addStep() {
    document.getElementById(DOMStrings.textarea).style.display = 'block';
    document.getElementById(DOMStrings.btnAdd).style.display = 'none';
}

function saveDocument() {
    
}