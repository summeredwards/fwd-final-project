export function sameLetterNotification(setter){
    setter(true);
    setTimeout(() =>{
        setter(false);
    }, 2000);
}

export function checkForWin(correct, wrong, word){
    let status = 'win';

    //check is player won
    word.split('').forEach(letter =>{
        if(!correct.includes(letter)){
            status = '';
        }
    })

    //check if player loss
    if (wrong.length === 6) status = "lose";

    return status;
}