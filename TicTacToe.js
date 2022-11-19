  // Let's build a X-O Game;
  var turn = true; // true means X turn ;
  var squares = [];
  function reset(A,B,C){
     document.getElementById('A'+A).style.color="orange";
     document.getElementById('A'+B).style.color="orange";
     document.getElementById('A'+C).style.color="orange";
           setTimeout(function(){location.reload()},1500);
           // Location.reload() pour actualiser la page a x(t) a difine ;
  }
  function checkWinner(){
     for(var i=1;i<=9 ; i++){
         squares[i] = document.getElementById('A'+i).innerHTML;
     }
 // chekWinner for Horizontal ! ;
     if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=""){
       alert('Player '+squares[1]+' Wins The Game'); 
       reset(1,2,3);
     }
     if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=""){
         alert('Player '+squares[4]+' Wins The Game');
         reset(4,5,6);
     }
     if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=""){
         alert('Player '+squares[7]+' Wins The Game');
         reset(7,8,9);
     }
     // checkWinner for Vertical ! ;
     if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=""){
         alert('Player '+squares[1]+' Wins The Game');
         reset(1,4,7);
     }
     if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=""){
         alert('Player '+squares[2]+' Wins The Game');
         reset(2,5,8);
     }
     if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=""){
         alert('Player '+squares[3]+' Wins The Game');
         reset(3,6,9);
     }
     // checkWinner for Tendal;
     if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=""){
         alert('Player '+squares[1]+' Wins The Game');
         reset(1,5,9);
     }
     if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=""){
         alert('Player '+squares[3]+' Wins The Game');
         reset(3,5,7);
     }
  }
    function insert(id){
        var S= document.getElementById(id)
        if(turn && S.innerHTML==""){
         S.innerHTML = "X";
            turn = !turn;
        }else if(!turn && S.innerHTML ==""){
        S.innerHTML = "O";
            turn = !turn;
        }
        checkWinner();
    }