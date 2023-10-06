/*
in java bc my head sees it clearer in java
public void Buttonpressed(){
    if(buttonpressed=penny){
        penny++;
        pennyval+=.01;
        totalval+=.01;
    }
    if(buttonpressed=nickel){
        nickel++;
        nickelval+=.05;
        totalval+=.05;
    }
    if(buttonpressed=dime){
        dime++;
        dimeval+=.1;
        totalval+=.1;
    }
    if(buttonpressed=quarter){
        quarter++;
        quarterval+=.25;
        totalval+=.25;
    }



    another idea:

    pb.onClick runs a function that calls addition(.01)

}*/

//declare variables

const pb = document.getElementByClass("add");
const nb = document.getElementById("nb");
const db = document.getElementById("db");
const qb = document.getElementById("qb");
const pa = 0;
const na = 0;
const da = 0;
const qa = 0;
pb.addEventListener("click", test());
nb.addEventListener("click", addition(.05));
db.addEventListener("click", addition(.1));
qb.addEventListener("click", addition(.25));


function test(){
    console.log("a");
}
function addition(num){
    if(num=.01){
        pa++;
        p.innerText = "Pennies: " + pa;
    }
    if(num=.05){

    }
    if(num=.1){

    }
    if(num=.25){

    }
}




