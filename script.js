


const aud = document.querySelector("audio");



//Pennies
const pb = document.getElementById("pb");
const pb2 = document.getElementById("pb2");
pb.addEventListener("click", pennyAdd);
pb2.addEventListener("click", pennySubtract);
var pa = 0;
var pw = 0;

function pennyAdd() {
  pa++;
  pw += 0.01;
  p.innerText = "Pennies: " + pa;
  pval.innerText = "Pennies Total Value: $" + pw.toFixed(2);
  tt();
  aud.play();
}
function pennySubtract() {
  if (pa != 0) {
    pa--;
    pw -= 0.01;
    p.innerText = "Pennies: " + pa;
    pval.innerText = "Pennies Total Value: $" + pw.toFixed(2);
    tt();
  }
}

//Nickels
const nb = document.getElementById("nb");
const nb2 = document.getElementById("nb2");
nb.addEventListener("click", nickelAdd);
nb2.addEventListener("click", nickelSubtract);
var na = 0;
var nw = 0;

function nickelAdd() {
  na++;
  nw += 0.05;
  n.innerText = "Nickels: " + na;
  nval.innerText = "Nickels Total Value: $" + nw.toFixed(2);
  tt();
  aud.play();
}
function nickelSubtract() {
  if (na != 0) {
    na--;
    nw -= 0.05;
    n.innerText = "Nickels: " + na;
    nval.innerText = "Nickels Total Value: $" + nw.toFixed(2);
    tt();
  }
}

//Dimes
const db = document.getElementById("db");
const db2 = document.getElementById("db2");
db.addEventListener("click", dimeAdd);
db2.addEventListener("click", dimeSubtract);
var da = 0;
var dw = 0;

function dimeAdd() {
  da++;
  dw += 0.1;
  d.innerText = "Dimes: " + da;
  dval.innerText = "Dimes Total Value: $" + dw.toFixed(2);
  tt();
  aud.play();
}
function dimeSubtract() {
  if (da != 0) {
    da--;
    dw -= 0.1;
    d.innerText = "Dimes: " + da;
    dval.innerText = "Dimes Total Value: $" + dw.toFixed(2);
    tt();
  }
}

//Quarters
const qb = document.getElementById("qb");
const qb2 = document.getElementById("qb2");
qb.addEventListener("click", quarterAdd);
qb2.addEventListener("click", quarterSubtract);
var qa = 0;
var qw = 0;

function quarterAdd() {
  qa++;
  qw += 0.25;
  q.innerText = "Quarters: " + qa;
  qval.innerText = "Quarters Total Value: $" + qw.toFixed(2);
  tt();
  aud.play();
}
function quarterSubtract() {
  if (qa != 0) {
    qa--;
    qw -= 0.25;
    q.innerText = "Quarters: " + qa;
    qval.innerText = "Quarters Total Value: $" + qw.toFixed(2);
    tt();
  }
}


function tt(){
  var totalValue = qw+dw+nw+pw;
  tval.innerText = "Total Value of All Coins: $" + totalValue.toFixed(2);
}

