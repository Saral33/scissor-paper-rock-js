function rpsGame(yourchoice){
var humanChoice, botChoice;
humanChoice=yourchoice.id;
botChoice= numberTochoice(rInt());
results= decideWinner(humanChoice,botChoice); //[0,1] human lost|| bot win
message= finalMessage(results); // {message:you won, color:green}
console.log(botChoice);
rpsfrontend(yourchoice.id,botChoice,message);
console.log(results);
console.log(message);
}

function rInt(){
    return Math.floor(Math.random()*3);
}
function numberTochoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourchoice,computerchoice){
    var rpsData={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    };   
var yourScore=rpsData[yourchoice][computerchoice];
var computerScore=rpsData[computerchoice][yourchoice];
return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore===0||computerScore===1){
        return {'message':"you lost noob!",'color':'red'};
    }
    else if(yourScore===0.5||computerScore===0.5){
        return{'message':'You tied!','color':'green'};
        
    }
    else {
        return{'message':'you won congrats!','color':'blue'};
    }
}
function rpsfrontend(humanimgchoice,botimgchoice,finalMessage){
    var imagesDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }//removes all elements
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv= document.createElement('div');
    var botDiv=document.createElement('div');
    var msgDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanimgchoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    msgDiv.innerHTML="<h1 style='color: " + finalMessage['color'] +"; font-size:60px; padding:30px;'>"+ finalMessage['message'] +"</h1>";
    botDiv.innerHTML="<img src='" + imagesDatabase[botimgchoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgb(85, 9, 92);'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(msgDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    

}