const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("//");
const express = require('express');
const app = express();

//DEBUT PARAGRAPHE HEROKU
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
    console.log(`bot en fonctionnement sur le port ${app.get('port')}`)
})
bot.on('ready', () => {
    bot.user.setPresence({game: { name: 'Henosia - h!help', type: "WATCHING"}})
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);
