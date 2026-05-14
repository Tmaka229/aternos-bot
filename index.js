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
      .setCustomId('start_server')
      .setLabel('🟢 เปิดเซิร์ฟ')
      .setStyle(ButtonStyle.Success)
  );

  await channel.send({
    content: 'กดปุ่มเพื่อเปิดเซิร์ฟ Minecraft',
    components: [row]
  });

});

client.on(Events.InteractionCreate, async interaction => {

  if (!interaction.isButton()) return;

  if (interaction.customId === 'start_server') {

    await interaction.reply('✅ กำลังเปิดเซิร์ฟ...');

  }

});

client.login(process.env.TOKEN);
