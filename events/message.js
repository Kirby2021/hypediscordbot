module.exports = async (client, message) => {
  const db = require(`quick.db`)
  if (message.author.bot) return;
const ccschema = require(`../models/customcommands`)
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
  let data = ccschema.findOne({ Guild: message.guild.id })
  if(data){
    message.channel.send(data)
  }else{
    return
  }
  const aliases = client.commands.find(x => x.info.aliases.includes(command))
  //if (db.get(`tag_${message.guild.id}_${cmd}`) !== null) message.channel.send(db.get(`tag_${message.guild.id}_${cmd}`))


  if(cmd){
    
    let commandFetch = db.fetch(`commandToggle_${message.guild.id}`)
    if(commandFetch == null) commandFetch = []
    if(commandFetch.includes(commands.config.name)) return message.channel.send("This command is disabled")
    cmd.run(client, message, args);
  }else if(aliases){
    
    let commandFetch = db.fetch(`commandToggle_${message.guild.id}`)
    if(commandFetch == null) commandFetch = []
    if(commandFetch.includes(commands.config.name)) return message.channel.send("This command is disabled")
    aliases.run(client, message, args);
  }else return
};