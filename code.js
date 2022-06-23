window.addEventListener('load', (event) => {

window.addEventListener("keydown", function(e){
    if(e.code=="ArrowLeft"){shiftLeft();}
    else if(e.code=="ArrowRight"){shiftRight();}
    else if(e.code=="ArrowUp"){shiftUp();}
    else if(e.code=="ArrowDown"){shiftDown();}
})
var grid = document.getElementsByClassName("field");
for(var i=0; i<16; i+=1){
    grid[i].innerHTML="";
}
var score = document.getElementById("score");
score.innerHTML=0;

var game = document.getElementById("game");
var colors=["white","white","blue","darkorange","greenyellow","khaki","firebrick","magenta","indianred","mediumslateblue","purple"]
var subTotal=0;

game.style.display="block";
addNew();
addNew();

// [0,  1,   2,   3],
// [4,  5,   6,   7],
// [8,  9,   10, 11],
// [12, 13,  14, 15];
/*------------Shift Down-----------------*/

function shiftDown(){
    var finishedMove=false;
    var doubled = false;
    var k;
    var score = document.getElementById("score");
    var combined=false;

    for(var i=11; i>7; i-=1){ //start from 3rd row going across
        doubled = false;
        for(var j=i; j>=0; j=j-4){ //for all elements in a column
            if(grid[j].innerHTML!==""){
                k=j;
                while(k<12 && (parseInt(grid[k+4].innerHTML)===parseInt(grid[k].innerHTML) || grid[k+4].innerHTML==="")){
                    if( parseInt(grid[k+4].innerHTML)===parseInt(grid[k].innerHTML) && doubled===false ){
                        subTotal = parseInt(grid[k+4].innerHTML)+parseInt(grid[k].innerHTML);
                        grid[k+4].innerHTML= subTotal;
                        // borderColor(subTotal,k+4);
                        
                        grid[k].innerHTML=""; finishedMove=true;doubled=true;
                        score.innerHTML=parseInt(grid[k+4].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(grid[k+4].innerHTML)===parseInt(grid[k].innerHTML) && doubled===true ){doubled===false;}
                    else if(grid[k+4].innerHTML===""){grid[k+4].innerHTML=parseInt(grid[k].innerHTML);
                        grid[k].innerHTML=""; finishedMove=true;
                    }
                    k+=4;
                }
            }
        }
    }
    if(finishedMove){
        colorBorders();
        fieldsAvailable();
    }
}

/*------------Shift UP-----------------*/

function shiftUp(){
    var finishedMove=false;
    var doubled = false;
    var k;
    var score = document.getElementById("score");

    for(var i=7; i>3; i-=1){//start from 2rd row going across
        doubled = false;
        for(var j=i; j<(i+9); j+=4){//for all elements in a column
            if(grid[j].innerHTML!==""){
                k=j;
                while(k>=i && (parseInt(grid[k-4].innerHTML)===parseInt(grid[k].innerHTML) || grid[k-4].innerHTML==="")){
                    if( parseInt(grid[k-4].innerHTML)===parseInt(grid[k].innerHTML) && doubled===false ){
                        subTotal = parseInt(grid[k-4].innerHTML)+parseInt(grid[k].innerHTML);
                        grid[k-4].innerHTML= subTotal;
                        // borderColor(subTotal,k-4);
                        
                        grid[k].innerHTML=""; finishedMove=true;doubled=true;
                        score.innerHTML=parseInt(grid[k-4].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(grid[k-4].innerHTML)===parseInt(grid[k].innerHTML) && doubled===true ){doubled===false;}
                    else if(grid[k-4].innerHTML===""){grid[k-4].innerHTML=parseInt(grid[k].innerHTML);
                        grid[k].innerHTML=""; finishedMove=true;
                    }
                    k-=4;
                }
            }
        }
    }
    if(finishedMove){
        colorBorders();
        fieldsAvailable();
    }
}

/*------------Shift Right-----------------*/

function shiftRight(){
    var finishedMove=false;
    var doubled = false;
    var k;
    var score = document.getElementById("score");

    for(var i=14; i>0; i-=4){//start from 3rd column going down
        doubled = false;
        for(var j=i; j>=i-2; j--){//for all elements in a column
            if(grid[j].innerHTML!==""){
                k=j;
                while(k<(i+1) && (parseInt(grid[k+1].innerHTML)===parseInt(grid[k].innerHTML) || grid[k+1].innerHTML==="") ){
                if( parseInt(grid[k+1].innerHTML)===parseInt(grid[k].innerHTML) && doubled===false ){
                        subTotal=parseInt(grid[k+1].innerHTML)+parseInt(grid[k].innerHTML);
                        grid[k+1].innerHTML=subTotal
                        // borderColor(subTotal,k+1);
                        score.innerHTML=parseInt(grid[k+1].innerHTML)+parseInt(score.innerHTML);
                        grid[k].innerHTML=""; finishedMove=true;doubled=true;
                    }
                    else if( parseInt(grid[k+1].innerHTML)===parseInt(grid[k].innerHTML) && doubled===true ){doubled===false;}
                    else if(grid[k+1].innerHTML===""){grid[k+1].innerHTML=parseInt(grid[k].innerHTML);
                        grid[k].innerHTML=""; finishedMove=true;
                    }
                    k+=1;
                }
            }
        }
        
    }
    if(finishedMove){
        colorBorders();
        fieldsAvailable();
    }
}

/*------------Shift Left-----------------*/

function shiftLeft(){
    var finishedMove=false;
    var doubled = false;
    var k;
    var score = document.getElementById("score");

    for(var i=13; i>0; i-=4){//start from 2nd column going down
        doubled = false;
        for(var j=i; j<=i+2; j++){//for all elements in a column
            if(grid[j].innerHTML!==""){
                k=j;
                while(k>(i-(i%4)) && (parseInt(grid[k-1].innerHTML)===parseInt(grid[k].innerHTML) || grid[k-1].innerHTML==="")){
                    if( parseInt(grid[k-1].innerHTML)===parseInt(grid[k].innerHTML) && doubled===false ){
                        subTotal = parseInt(grid[k-1].innerHTML)+parseInt(grid[k].innerHTML);
                        grid[k-1].innerHTML= subTotal;
                        // borderColor(subTotal,k-1);
                        grid[k].innerHTML=""; finishedMove=true;doubled=true;
                        score.innerHTML=parseInt(grid[k-1].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(grid[k-1].innerHTML)===parseInt(grid[k].innerHTML) && doubled===true ){doubled===false ;}
                    else if(grid[k-1].innerHTML===""){grid[k-1].innerHTML=parseInt(grid[k].innerHTML);
                        grid[k].innerHTML=""; finishedMove=true;
                    }
                    k-=1;
                }
            }
        }
        
    }
    if(finishedMove){
        colorBorders();
        fieldsAvailable();
    }
}


function colorBorders(){
    var val;
    var power;
    for(var i=0;i<=15;i++){
        if(grid[i].innerHTML===""){
            document.getElementsByClassName("field").item(i).setAttribute("style", "border-color:white"); 
        }else{
            val=parseInt(grid[i].innerHTML)
            power=Math.log2(val);
            document.getElementsByClassName("field").item(i).setAttribute("style", "border-color:"+colors[power]); 
        }
    }
}

//End the Game
function endGame(){
    // alert("Your Score Is:"+document.getElementById("score").innerHTML+" Game Over");
    var endSreen = document.getElementById("endScreen");
    endSreen.style.display="block";
}

var restartBtn = document.getElementById("playAgain");
restartBtn.addEventListener("click",restart);
function restart(){
    window.location.reload();
}

//add new 2-4 block
function addNew(){
        var done=false;
        var newEl;
        while(done===false){
            var num = Math.floor(Math.random()*16);
            if(grid[num].innerHTML===""){
                var k=0;
                newEl = 2+getRandomInt(0,2)*2;
                while(newEl===4&&k<3){ //make it 1/8 or 16% chance of getting 4 as new element
                    newEl = 2+getRandomInt(0,2)*2;
                    k++;
                }                    
                grid[num].innerHTML=newEl;
                done=true;
            }
        }
}
//------Used method implementation that i found on MDN
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

//iterate through grid to check if anymore fields are available              
function fieldsAvailable(){
    var hasEmpty = false;
    var count=0;
    for(var i=0; i<16;i++){
        if(grid[i].innerHTML===""){hasEmpty=true;count++;}
    }
    if(hasEmpty){addNew();}
    if(count===1){check()}; //last field was already taken in last statement, check all adjacent fields for potential doubles - use Check()
    // to check for another move or verify the end of game
}


// [0,  1,   2,   3],
// [4,  5,   6,   7],
// [8,  9,   10, 11],
// [12, 13,  14, 15];
//Find the remaining move, checking all adjacent fields for either identical values to double 
//*finding a list of possible moves for each field results in symmetrical checks (done on the same pair of fields), which are removed from the following try
// and catch block to minimise the number of checks as well as cut off extra code.
function check(){
    var x = false;
    for(var i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(grid[1].innerHTML===grid[0].innerHTML||grid[4].innerHTML===grid[0].innerHTML){
                    x=true;    
                };
                break;
            case (1):
                if(grid[2].innerHTML===grid[1].innerHTML||grid[1].innerHTML===grid[5].innerHTML){
                    x=true;    
                };
                break;
            case (2):
                if(grid[3].innerHTML===grid[2].innerHTML||grid[2].innerHTML===grid[6].innerHTML){
                    x=true; 
                };
                break;
            case (3):
                if(grid[3].innerHTML===grid[7].innerHTML){
                    x=true; 
                };
                break;
            case (4):
                if(grid[4].innerHTML===grid[8].innerHTML||grid[4].innerHTML===grid[5].innerHTML){
                  x=true;   
                };
                break;
            case (5):
                if(grid[5].innerHTML===grid[1].innerHTML||grid[4].innerHTML===grid[5].innerHTML){
                    x=true; 
                };
                break;
            case (6):
                if(grid[6].innerHTML===grid[5].innerHTML||grid[6].innerHTML===grid[2].innerHTML){
                    x=true; 
                };
                break;
            case (7):
                if(grid[7].innerHTML===grid[3].innerHTML||grid[7].innerHTML===grid[6].innerHTML){
                    x=true; 
                };
                break;
            case (8):
                if(grid[8].innerHTML===grid[12].innerHTML||grid[8].innerHTML===grid[9].innerHTML){
                    x=true; 
                };
                break;
            case (9):
                if(grid[9].innerHTML===grid[5].innerHTML||grid[9].innerHTML===grid[10].innerHTML){
                    x=true; 
                };
                break;
            case (10):
                if(grid[10].innerHTML===grid[11].innerHTML||grid[10].innerHTML===grid[6].innerHTML
                    ||grid[10].innerHTML===grid[14].innerHTML){
                    x=true; 
                };
                break;
            case (11):
                if(grid[11].innerHTML===grid[7].innerHTML||grid[11].innerHTML===grid[15].innerHTML){
                    x=true; 
                };
                break;
            case (12):
                if(grid[12].innerHTML===grid[8].innerHTML||grid[12].innerHTML===grid[13].innerHTML){
                    x=true; 
                };
                break;
            case (13):
                if(grid[13].innerHTML===grid[12].innerHTML||grid[13].innerHTML===grid[9].innerHTML){
                    x=true; 
                };
                break;
            case (14):
                if(grid[14].innerHTML===grid[13].innerHTML||grid[14].innerHTML===grid[15].innerHTML){
                    x=true; 
                };
                break;
            case (15):
                if(grid[15].innerHTML===grid[11].innerHTML){
                    x=true; 
                };
                break;
        }
    }
    if(!x){endGame();}
}

});