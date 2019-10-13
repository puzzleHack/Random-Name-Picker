const Discord= require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyNzE2ODMyMzMxMTM3MDQz.XaJ9eg.eDozWTIIltSI_2hT0rDkVdOeccw';

//List of names 
var nameList =[];

//On ready 
bot.on('ready', ()=> {
    console.log("This bot is online!");
})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

bot.on('message', msg=>{
    if(msg.content === "beammeupscotty" || msg.content === "pickmescotty" || msg.content == "pickme") {
        //message.member.user.tag
        var user = msg.member.user.tag;
        if(nameList.includes(user)) {
            msg.reply("You're already on the list. If you want to go that bad, do the macarena!")
        } else {
            nameList.push(user);
            msg.reply(' you have been added to the list!\n Current List: ' + nameList); 
        }
    }
    
    if(msg.content === "reveal!" || msg.content === "letsinterview" || msg.content === "draw") {
        if(nameList.length === 0) {
            msg.reply("Either the list is empty, or I'm not in the mood!");
        } else {
            shuffleArray(nameList);
            var chosenOne = nameList.pop(); 
            nameList = [];
            msg.reply(chosenOne + ' has been chosen! Good luck!');
        }
    }

    if(msg.content === "rnp-help") {
            msg.reply(" I can do all sorts of things!\n**Commands to join interview pool**: 'beammeupscotty', 'pickmescotty', 'pickme'\n**Commands to pick a name:** 'draw', 'letsinterview', 'reveal!' ");
        }
})

bot.login(token);
