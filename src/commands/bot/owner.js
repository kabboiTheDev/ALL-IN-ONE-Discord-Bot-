const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Kabboi`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Idk XD`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CoreWare`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `https://kabboithedev.carrd.co/`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
