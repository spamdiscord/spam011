const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Mr.Dragon `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === 'فلوسي'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === 'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === 'كريديت'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'فلوسي'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'كريديت'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Mr.Dragon , Farm Credit By Mr.Dragon,**`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**ايا هادي 1000DA
هادي 2000DA**`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
