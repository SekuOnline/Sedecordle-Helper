document.addEventListener("keydown", function(event){
    let id;
    switch(event.key){
        case '37':          //Left Arrow Key
            id = document.activeElement.id;
            if (id in ['2', '3', '4', '5']){
                id = (parseInt(id)-1).toString();
                document.getElementById(id).focus;
            }
            break;
        case '38':          //Up Arrow Key
            document.getElementById('1').focus;
            break;
        case '39':          //Right Arrow Key
        id = document.activeElement.id;
        if (id in ['1', '2', '3', '4']){
            id = (parseInt(id)+1).toString();
            document.getElementById(id).focus;
        }
            break;
        case '40':          //Down Arrow Key
            document.getElementById('6').focus();
            break;
    }
});