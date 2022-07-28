
// let comSelection, plySelection, chosen_com = 0, chosen_ply = 0;

//Player function is to generate player's decision
//Computer function is to generate computer's decision

// Player Function
let temp = 0, chosen_ply, chosen_com, point_ply=0, point_com=0;
const buttons = document.querySelectorAll('button');
let gameset = 0;
// choose.onclick = () => console.log('Hello World!');      //Method 2
buttons.forEach(button =>{
  button.addEventListener('click', (e) => {

    const result_div = document.querySelector('.result');
    const child = document.querySelector('.instant-result');
    const history_u = document.querySelector('.history_u');
    const history_d = document.querySelector('.history_d');

    // console.log(e.target.textContent);                                //Method 3
    chosen_com = computerPlay();
    chosen_ply = playerPlay( plySelection = e.target.textContent );
    // console.log(chosen_com);
    // console.log(chosen_ply);
    // console.log(chosen_ply);
    if (chosen_com == chosen_ply){
      const hihi = document.querySelector('.determine');
      result_div.removeChild(hihi);
      const determine = document.createElement('div');
      determine.textContent = 'Tied';
      determine.classList = 'determine';
      result_div.insertBefore(determine, history_u);
      // console.log("Tied!");
      // alert("Again");
      //     i--;
      //     continue;
    }
    else if( (chosen_ply-chosen_com == 1) | (chosen_com - chosen_ply == 2) ){
      point_ply++;
      const hihi = document.querySelector('.determine');
      result_div.removeChild(hihi);
      const determine = document.createElement('div');
      determine.textContent = 'You win';
      determine.classList = 'determine';
      result_div.insertBefore(determine, history_u);
      // console.log('Player win');
    }
    else{
      point_com++;
      const hihi = document.querySelector('.determine');
      result_div.removeChild(hihi);
      const determine = document.createElement('div');
      determine.textContent = 'Computer win';
      determine.classList = 'determine';
      result_div.insertBefore(determine, history_u);
      // console.log('Computer win');
    }
    console.log(point_com, point_ply);


    result_div.removeChild(child);
    display = document.createElement('div');
    // display.setAttribute('class', 'instant-result');
    display.classList.add('instant-result');
    display.textContent = "(Instant Score)" + point_com + ":" + point_ply;
    result_div.insertBefore(display, history_u);

    if(point_com>=5){
      gameset++;
      const judge = document.createElement('div');
      judge.textContent = "Game" + gameset + ": Computer win!!";
      history_u.insertBefore(judge,history_d);
      console.log('Computer win');
      point_com=0;
      point_ply=0;
    }
    else if(point_ply>=5){
      gameset++;
      const judge = document.createElement('div');
      const history_u = document.querySelector('.history_u');
      const history_d = document.querySelector('.history_d');
      judge.textContent = "Game" + gameset + ": Player win!!";
      history_u.insertBefore(judge,history_d);
      console.log('Player win');
      point_com=0;
      point_ply=0;
    }


  })
})

let playerPlay = (plySelection) => {
  let temp = 0 ;
  if ( plySelection.toLowerCase() === "paper") temp = 1;
  else if( plySelection.toLowerCase() === "scissors") temp = 2;
  else if( plySelection.toLowerCase() === "rock") temp = 3;
  else {
     alert("You have some typo. Please type again!");
     //chosen_ply = playerPlay( plySelection = prompt() );
  }
  return temp;
}

// Computer Function
let computerPlay = () =>{
  let chosen_com = Math.random();
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







// chosen_com = computerPlay();
// console.log(chosen_com);
// console.log(chosen_ply);

//main code
// let point_ply = 0, point_com = 0;
// for(let i = 0; i<5 ; i++){
//   //alert( "Round " + (i+1) + "! Fight!")
//     //call player function and return its dicesion with number 1, 2 and 3.
//     //call computer function and return its dicesion with number 1, 2 and 3.
//   // chosen_ply = playerPlay( plySelection = prompt() );
//   chosen_com = computerPlay();
//   // if (chosen_com == chosen_ply){
//     alert("Tied!");
//     alert("Again");
//     i--;
//     continue;
//   }
//   else if( (chosen_ply-chosen_com == 1) | (chosen_com - chosen_ply == 2) )
//     point_ply++;
//   else
//     point_com++;
//   alert(point_ply + ":" + point_com);
//   if( (point_com&&point_ply) >= 3 | i==4 ){
//     if(point_ply>point_com) alert("Player win the competition!");
//     else alert("Computer win the competition!");
//     break;
//   }
// }
