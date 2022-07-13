
let comSelection, plySelection, chosen_com = 0, chosen_ply = 0;

//Player function is to generate player's decision
//Computer function is to generate computer's decision

// Player Function
let playerPlay = (plySelection) => {
  let temp = 0 ;
  if ( plySelection.toLowerCase() === "paper") temp = 1;
  else if( plySelection.toLowerCase() === "scissors") temp = 2;
  else if( plySelection.toLowerCase() === "rock") temp = 3;
  else {
     alert("You have some typo. Please type again!");
     chosen_ply = playerPlay( plySelection = prompt() );
  }
  return temp;
}

// Computer Function
let computerPlay = () =>{
  chosen_com = Math.random();
  if(chosen_com <= 1/3){
    comSlection = "Paper";
    return 1;
  }
  else if (chosen_com > 2/3){
    comSlection = "Rock";
    return 3;
  }
  else {
    comSlection = "Scissors";
    return 2;
  }
}

//main code
let point_ply = 0, point_com = 0;
for(let i = 0; i<5 ; i++){
  alert( "Round " + (i+1) + "! Fight!")
    //call player function and return its dicesion with number 1, 2 and 3.
    //call computer function and return its dicesion with number 1, 2 and 3.
  chosen_ply = playerPlay( plySelection = prompt() );
  chosen_com = computerPlay();
  if (chosen_com == chosen_ply){
    alert("Tied!");
    alert("Again");
    i--;
    continue;
  }
  else if( (chosen_ply-chosen_com == 1) | (chosen_com - chosen_ply == 2) )
    point_ply++;
  else
    point_com++;
  alert(point_ply + ":" + point_com);
  if( (point_com&&point_ply) >= 3 | i==4 ){
    if(point_ply>point_com) alert("Player win the competition!");
    else alert("Computer win the competition!");
    break;
  }
}
