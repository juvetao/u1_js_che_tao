/** int playerScore - player's score */
var playerScore = 0;


/** int computerScore - computer's score */
var computerScore = 0;

/** int playerScore - accumulated score for player */
playerScore = drawgenerate(1);

/** int computerScore - accumulated score for computer */
computerScore = drawgenerate(2);

/**check computer's score to see if computer has already winned (=21) or lost(>21) before player press D/S */
if (computerScore === 21){
    alert("Haha you lose! \n Computer score: "+computerScore+"\n Player score: "+playerScore);
}
else if(computerScore >21){
    alert("Congrats, You win!!\n Computer score: "+computerScore+"\n Player score: "+playerScore);
}


/**

 * @desc generate draw value(s) and have a accumulated score from draw(s)

 * @param int num - number of draw(s) in player's/ computer's turn
                    1 - player draw once
                    2 - computer draw twice
                    -1 - computer draw once

 * @return int playerScore/ computerScore - the accumulated score from draw(s) for player/ computer

*/

function drawgenerate(num){
    if(num === 1){
        var draw = Math.floor(Math.random()*11+1); //Math.floor(Math.random()*max+min)
        console.log('player drew '+draw);
        playerScore += draw;
        console.log('player score = ' + playerScore);
        return playerScore;
    }
    if(num === 2){
        var draw1 = Math.floor(Math.random()*11+1); 
        console.log('computer drew '+draw1);
        var draw2 = Math.floor(Math.random()*11+1);
        console.log('computer drew '+draw2);
        computerScore = draw1 + draw2;
        console.log('computer score = ' + computerScore);
        return computerScore;
    }
    if(num === -1){
        var draw = Math.floor(Math.random()*11+1);
        console.log('computer drew ' +draw);
        computerScore += draw;
        console.log('computer score = ' + computerScore);
        return computerScore;
    }
}

window.addEventListener("keydown", function(event){
    if(event.code === 'KeyD'){
        drawgenerate(1);
        if (playerScore > 21){
            alert("Haha you lose! \n Computer score: "+computerScore+"\n Player score: "+playerScore);
        }
        if (playerScore === 21){
            alert("Congrats, You win!!\n Computer score: "+computerScore+"\n Player score: "+playerScore);
        }
    }
    if (event.code === 'KeyS'){
        console.log('Player stopped!');
        if (computerScore < 17){
            drawgenerate(-1);
            determineComputerWinOrNot();
        }
        else if (computerScore >= 17){
            determineComputerWinOrNot();
        }
    }
    /** end the game and clear */
    // playerScore = 0;
    // computerScore = 0;
    // console.clear();
});

/**

 * @desc make comparison between player's score and computer's score

 * @param none

 * @return none

*/

function determineComputerWinOrNot(){
    if(computerScore === playerScore){ //drew
        alert("It's a draw!\n Computer score: "+computerScore+"\n Player score: "+playerScore);
    }
    else if(computerScore > playerScore && computerScore <= 21){ // computer's score is bigger
        alert("Haha you lose! \n Computer score: "+computerScore+"\n Player score: "+playerScore);
    }
    else if(computerScore < playerScore){ // player's score is biiger
        alert("Congrats, You win!!\n Computer score: "+computerScore+"\n Player score: "+playerScore);
    }
    else if(computerScore > playerScore && computerScore > 21){ // computer's score is over 21
        alert("Congrats, You win!!\n Computer score: "+computerScore+"\n Player score: "+playerScore);
    }
    else if(playerScore === 21){ // player's score is exactly 21
        alert("Congrats, You win!!\n Computer score: "+computerScore+"\n Player score: "+playerScore);
    }
}


