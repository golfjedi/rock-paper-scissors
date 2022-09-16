function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * 3)]
}

    //Computer makes selection rock, paper, scissors
    //User inputs selection rock, paper, scissors
    //If computer choice is rock run this code: user choice rock send tie message, else if user choice paper send win message, else send loss message
    //else if computer choice is paper run this code: user choice paper seend tie message, else if user choice scissors send win message, else send loss message
    //else computer choice is scissors run this code: user choice scissors send tie message, else if user choise rock send win message, else send loss message