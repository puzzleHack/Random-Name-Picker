const Discord= require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyNzE2ODMyMzMxMTM3MDQz.XaJkeQ.7KGFx0KWujWk8KkHP4e6NuGBE8c';

//List of names 
var array =[];

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
    if(msg.content === "beammeupscotty" || msg.content === "pickmescotty") {
        //message.member.user.tag
        var user = msg.member.user.tag;
        array.push(user);
        msg.reply(' you have been added to the list!\n Current List: ' + array);
    }
    if(msg.content === "reveal!" || msg.content === "letsinterview") {
        if(array.length === 0) {
            msg.reply("Either the list is empty, or I'm not in the mood!");
        } else {
            shuffleArray(array);
            var chosenOne = array.pop(); 
            array = [];
            msg.reply(chosenOne + ' has been chosen! Good luck!');
        }
    }
})

bot.login(token);