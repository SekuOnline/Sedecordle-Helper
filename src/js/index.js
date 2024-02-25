document.addEventListener("keydown", function(event){
    let id;
    let idArray = ['1', '2', '3', '4', '5', '6']
    console.log("Checking for event keys: " + event.key);
    switch(event.key){
        case 'ArrowLeft':          //Left Arrow Key
            id = document.activeElement.id;
            if (idArray.includes(id)){
                id = (parseInt(id)-1).toString();
                console.log("Moving left:");
                document.getElementById(id).focus();
            }
            break;
        case 'ArrowUp':          //Up Arrow Key
            console.log("Moving up:" + id);
            document.getElementById('1').focus();
            break;
        case 'ArrowRight':          //Right Arrow Key
            id = document.activeElement.id;
            console.log(id);
            if (idArray.includes(id)){
                id = (parseInt(id)+1).toString();
                console.log("Moving right:");
                document.getElementById(id).focus();
            }
                break;
        case 'ArrowDown':          //Down Arrow Key
            console.log("Moving down:");
            document.getElementById('6').focus();
            break;
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const clearButton = document.getElementById("Clear");
    if(clearButton){
        console.log("Clear button found");
        clearButton.addEventListener('click', clearClick);
    }
    else{
        console.log(" Clear button not found");
    }

    const items = document.getElementsByClassName("Letter-Input");
    console.log("Entering letter-input event listener assigning");
    for (let i = 0; i < items.length; i++){
        console.log("i= "+i);
        items[i].addEventListener('keyup', function(){
            if(parseInt(this.id) < 6){
                document.getElementById((parseInt(this.id)+1).toString()).focus();
                console.log("Moving down the line - debugging");
            }
            else{
                console.log("Wrong element - didn't move down");
            }
        })
    }
})

function clearClick(){
    console.log("clearing");
    
    for(let id = 1; id < 7; id++){
        document.getElementById(id.toString()).value = '';
    }
}