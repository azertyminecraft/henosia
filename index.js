const Discord = require('discord.js');

var bot = new Discord.Client();
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
    
if (message.content.startsWith(prefix + 'embed')) {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send("Vous voulez rien me faire répéter ?");
    message.delete()
    var embed = new Discord.RichEmbed();
    embed.setColor(0xFF358B)
      .setDescription(args)
    message.channel.sendEmbed(
      embed, {
        disableEveryone: true
      }
    );
  }}
