const DOMStrings = {
    richtext: '.richtext',
    btnAdd: 'btn-add_step',
    btnSubmit: 'btn-submit_step',
    editor: 'editor',
    listSteps: 'list_steps',
    stepTitle: 'step_title'
}

const result = {
    name: '',
    steps: []    
}

function submitStep() {
    const tit = document.getElementById(DOMStrings.stepTitle).value;
    const content = document.getElementsByTagName('p')[1].innerHTML;
    console.log(tit);

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

function saveInstruction() {
    result.name = 1;
    console.log(result);
}
