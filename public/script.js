body = document.getElementById('myContainer');
win_Combos = [
    ["id_00","id_01","id_02"],
    ["id_10","id_11","id_12"],
    ["id_20","id_21","id_22"],
    ["id_00","id_10","id_20"],
    ["id_01","id_11","id_21"],
    ["id_02","id_12","id_22"],
    ["id_00","id_11","id_22"],
    ["id_02","id_11","id_20"]
  ];
endDiv = document.getElementById('LoseDiv');
endDivH1 = document.getElementById('h1');
multi = false;
playturn = true;

function reload() {
  location.reload();
  return false;
}


function initButton(){
  console.log("here");
  for (i=0; i<3; i++){
    for (j=0; j<3; j++){
      btn = document.createElement("button"); 
      btn.value = "-";
      btn.innerHTML = "-";
      btn.id = "id_" + i + j;
      btn.name = "button";
      btn.setAttribute("onClick", "onClickButton(this.id)");
      body.appendChild(btn);
    }
    br = document.createElement("BR");
    body.appendChild(br);
  }
}

function Win(){
  c = body.children;
   player = [];
   for (i = 0; i < c.length; i++) {
    if (c[i].name == "button"){
      if (c[i].value == "X"){
        player.push(c[i].id);
      }
    }
  }
  for(i=0; i<win_Combos.length; i++){
    if(player.includes(win_Combos[i][0]) && player.includes(win_Combos[i][1]) && player.includes(win_Combos[i][2])){
      document.getElementById(win_Combos[i][0]).style.color = "#32CD32";
      document.getElementById(win_Combos[i][1]).style.color = "#32CD32";
      document.getElementById(win_Combos[i][2]).style.color = "#32CD32";
      return true;
    }
  }
  return false;
}

function Lose(){
  c = body.children;
  comp = [];
  for (i = 0; i < c.length; i++) {
    if (c[i].name == "button"){
      if (c[i].value == "O"){
        comp.push(c[i].id);
      }
    }
  }

  for(i=0; i<win_Combos.length; i++){
    if(comp.includes(win_Combos[i][0]) && comp.includes(win_Combos[i][1]) && comp.includes(win_Combos[i][2])){
      document.getElementById(win_Combos[i][0]).style.color = "#FF0000";
      document.getElementById(win_Combos[i][1]).style.color = "#FF0000";
      document.getElementById(win_Combos[i][2]).style.color = "#FF0000";
      return true;
    }
  }
  return false;
}

function Tie(){
  c = body.children;
  blank = [];
  for (i = 0; i < c.length; i++) {
    if (c[i].name == "button"){
      if (c[i].value == "-"){
        blank.push(c[i].id);
      }
    }
  }
  if (blank.length == 0){
    return true;
  }
  return false;
}

function compPlay(){
  c = body.children;
  player = [];
  comp = [];
  blank = [];
  for (i = 0; i < c.length; i++) {
    if (c[i].name == "button"){
      if (c[i].value == "X"){
        player.push(c[i].id);
      }
      else if (c[i].value == "O"){
        comp.push(c[i].id);
      }
      else{
        blank.push(c[i].id);
      }
    }
  }

  // computer checks to see if it can win
  for(i=0; i<win_Combos.length; i++){
    if(comp.includes(win_Combos[i][0]) && comp.includes(win_Combos[i][1])){
      if(blank.includes(win_Combos[i][2])){
        btn = document.getElementById(win_Combos[i][2]);
        btn.value = "O";
        btn.innerHTML = "O";
        return true;
      }
    }
    if(comp.includes(win_Combos[i][0]) && comp.includes(win_Combos[i][2])){
      if(blank.includes(win_Combos[i][1])){
        btn = document.getElementById(win_Combos[i][1]);
        btn.value = "O";
        btn.innerHTML = "O";
        return true;
      }
    }
    if(comp.includes(win_Combos[i][1]) && comp.includes(win_Combos[i][2])){
      if(blank.includes(win_Combos[i][0])){
        btn = document.getElementById(win_Combos[i][0]);
        btn.value = "O";
        btn.innerHTML = "O";
        return true;
      }
    }
  }

  // computer checks to see if user can win
  for(i=0; i<win_Combos.length; i++){
    if(player.includes(win_Combos[i][0]) && player.includes(win_Combos[i][1])){
      if(blank.includes(win_Combos[i][2])){
        btn = document.getElementById(win_Combos[i][2]);
        btn.value = "O";
        btn.innerHTML = "O";
        return true;
      }
    }
    if(player.includes(win_Combos[i][0]) && player.includes(win_Combos[i][2])){
      if(blank.includes(win_Combos[i][1])){
        btn = document.getElementById(win_Combos[i][1]);
        btn.value = "O";
        btn.innerHTML = "O";
        return true;
      }
    }
    if(player.includes(win_Combos[i][1]) && player.includes(win_Combos[i][2])){
      if(blank.includes(win_Combos[i][0])){
        btn = document.getElementById(win_Combos[i][0]);
        btn.value = "O";
        btn.innerHTML = "O";
        return true;
      }
    }
  }

  // computer picks random space
  x = Math.floor(Math.random() * blank.length);
  btn = document.getElementById(blank[x]);
  btn.value = "O";
  btn.innerHTML = "O";
  return true;
}

function onClickButton(id){
  if (Win()){
    endDivH1.innerHTML="WINNER";
    endDiv.style.color="#32CD32";
    endDiv.style.display="block";
  }
  else if (Lose()){
    endDivH1.innerHTML="LOSER";
    endDiv.style.color="#FF0000";
    endDiv.style.display="block";
  }
  else if (Tie()){
    endDivH1.innerHTML="TIE";
    endDiv.style.color="#FF8C00";
    endDiv.style.display="block";
  }
  else if(playturn){
    btn = document.getElementById(id);
    if (btn.value == "X"){
      alert("You played here already");
    }
    else if (btn.value == "O"){
      alert("Computer played here already");
    }
    else{
      playturn = false;
      btn.value = "X";
      btn.innerHTML = "X";
      if (Win()){
        setTimeout (function() {
          endDivH1.innerHTML="WINNER";
          endDiv.style.color="#32CD32";
          endDiv.style.display="block";
        }, 200);
      }
      else if (Tie()){
        setTimeout (function() {
          endDivH1.innerHTML="TIE";
          endDiv.style.color="#FF8C00";
          endDiv.style.display="block";
        }, 200);
      }
      else {
        if (!multi) {
          setTimeout(function() {
            compPlay();
            playturn = true;
            if (Lose()){
              setTimeout (function () {
                endDivH1.innerHTML="LOSER";
                endDiv.style.color="#FF0000";
                endDiv.style.display="block";
              }, 200);
            } 
          }, 600);
        }
      }
    }
  }
}
