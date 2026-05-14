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

client.login('MTUwNDQyNDcwMzE2MTUzMjQzNg.G2-Cz9.UE_SfvbvhwxLMmI1BLKNzQY13p4755n0cf4Ixc');});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'start_server') {

    await interaction.reply('⏳ กำลังเปิดเซิร์ฟ...');

    try {

      await at.login();

      const servers = await at.getServers();

      await servers[0].start();

      await interaction.followUp('✅ เปิดเซิร์ฟสำเร็จ');

    } catch (e) {

      await interaction.followUp('❌ เปิดเซิร์ฟไม่สำเร็จ');
      console.log(e);

    }
  }
});

client.login('TOKEN_DISCORD');
