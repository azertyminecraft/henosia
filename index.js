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

bot.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sender = message.author;
  let msg = message.content.toUpperCase();
//Code

if(cmd === `${prefix}say`){
    if(message.author.id === '205752580251451392'){
      let say = args.join(" ").slice();
      message.delete(message.author)

      message.channel.send(say)
      console.log(`commande "say" demandé depuis le serveur ${message.guild.name}`)
    } else {
      message.reply("Tu n'es pas mon **créateur**.")
    }
  }
