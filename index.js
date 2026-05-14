const {
  Client,
  GatewayIntentBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, async () => {

  console.log('Bot Online');

  const channel = await client.channels.fetch('1504422664469610576');

  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setLabel('🟢 เปิดหน้า Aternos')
      .setStyle(ButtonStyle.Link)
      .setURL('https://aternos.org/server/')
  );

  await channel.send({
    content: 'กดเพื่อเข้าไปเปิดเซิร์ฟ Minecraft',
    components: [row]
  });

});

client.login(process.env.TOKEN);
