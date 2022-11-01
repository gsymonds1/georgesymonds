const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    let state = {} 
    showTextNode(1)
    
}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option =>{
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }

    } )
}
//new show Player balance 
//function showPlayerBalance(playerBalanceIndex){
//    let text = document.getElementById("balance").textContent;
//    document.getElementById("balanceStyle").innerHTML = text; 
//}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state,option.setState)
    showTextNode(nextTextNodeId)
}

//player balance assigning
//const playerBalance = [
//    {
//        id: 1,
//        balance: 0,
//    }
    
//]



const textNodes = [
    {
        id: 1,
        text: 'You just woke up',
        options : [
            {
                
                text: 'Work',
                setState: { work: true},
                nextText: 2
            },
            {
                text: 'Cry',
                nextText: 2

            }
        ]
    },
    {
        id: 2,
        text: 'Youre happiness is low',
        options: [
            {

                text: 'Buy something new',
                requiredState: (currentState) => currentState.work,
                setState: {work: false, sword: true},
                nextText: 3
            },
            {

                text: 'Do nothing',
                requiredState: (currentState) => currentState.work,
                setState: {work: false, imagination: true},
                nextText: 3
            },
            {

                text: 'Cry',
                nextText: 3
            }
        ]
    }

]

startGame()