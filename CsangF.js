let InputdoC;

while(!InputdoC){
    InputdoC=prompt("Hãy nhập giá trị độ C");
}

let doC=parseInt(InputdoC);

let doF= ((9*doC + 160)/5);
document.write(doC+ " độ C tương đương với: " + doF+" độ F" );