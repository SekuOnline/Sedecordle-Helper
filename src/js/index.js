document.addEventListener("DOMContentLoaded", function(){
    //Arrow key Implementation
    document.addEventListener("keydown", function(event){
        let idArray = ['1', '2', '3', '4', '5', '6']
        let id = document.activeElement.id;
        // console.log("Checking for event keys: " + event.key);
        switch(event.key){
            case 'ArrowLeft':          //Left Arrow Key
                
                if (idArray.includes(id)){
                    id = (parseInt(id)-1).toString();
                    console.log("Moving left:");
                    document.getElementById(id).focus();
                }
                break;
            case 'ArrowUp':          //Up Arrow Key
                // console.log("Moving up:" + id);
                if(document.activeElement.id == "Clear"){
                
                    document.getElementById('6').focus();
                    break;
                }
                for (let i = 5; i > 1; i--){
                    let item = document.getElementById(i.toString())
                    if (item.value == ''){
                        item.focus();
                        break;
                    }
                }
                document.getElementById('1').focus();
                
                break;
            case 'ArrowRight':          //Right Arrow Key
                //console.log(id);
                if (idArray.includes(id)){
                    id = (parseInt(id)+1).toString();
                    console.log("Moving right:");
                    document.getElementById(id).focus();
                }
                    break;
            case 'ArrowDown':          //Down Arrow Key
                //console.log("Moving down:");
                if(document.activeElement.id == '6'){
                    document.getElementById("Clear").focus();
                    break;
                }
                document.getElementById('6').focus();
                break;
            
        }
    });

    //Clear Button
    const clearButton = document.getElementById("Clear");
    if(clearButton){
        //console.log("Clear button found");
        clearButton.addEventListener('click', clearClick);
        clearButton.addEventListener("keydown", function(event){
            if (event.key == "Enter" && document.activeElement.id == "Clear"){
                clearClick();
            }
        })
    }
    

    //Moving on letter input
    const items = document.getElementsByClassName("Letter-Input");
    //console.log("Entering letter-input event listener assigning");
    for (let i = 0; i < items.length; i++){
        //console.log("i= "+i);
        items[i].addEventListener('keydown', function(event){
            if(event.key.length == 1){
                this.value = event.key.toString();
                if(parseInt(this.id) < 6){
                    var item = document.getElementById((parseInt(this.id)+1).toString());
                    setTimeout(function(){
                        item.focus();

                        //console.log("Wait-time");
                    }, 10);
                    
                    
                    
                    //console.log("Moving down the line - debugging");
                }
                
            }
            if (event.key == 'Backspace'){
                //console.log("backspaced " + parseInt(this.id));
                if(1 < (parseInt(this.id)) && (parseInt(this.id)) < 6 ){
                    //console.log('in backspace');
                    this.value = '';
                    var item = document.getElementById((parseInt(this.id)-1).toString());
                    setTimeout(function(){
                        item.focus();
                    }, 10);
                    
                }
            }
        })
    }

    //Backspace moving backwards

})

function clearClick(){
    //console.log("clearing");
    
    for(let id = 1; id < 7; id++){
        document.getElementById(id.toString()).value = '';
    }
}