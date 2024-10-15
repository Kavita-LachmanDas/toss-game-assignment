alert("lets play a toss game...")

var userinput = prompt("Head or Tail").toLowerCase()
// var user = prompt("chose one head(0) or tail(1) just write 0 or 1 ")
alert("Head value is 0 \n Tail value is 1 oky \n you opt "+ userinput)

var hi = prompt("you  are ready to see the results that you loss or win..\n if ready  then write i am ready")

var generate = Math.floor(Math.random()*2);
var tail = 1;
var head = 0
 if(tail === generate && tail === 1){
 alert("conggrats you wonnn your number is matched" + generate)
}
else if(tail !== generate){
    alert("sorryy unmatched number" + generate)
   }



