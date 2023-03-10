const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');
const fs = require('fs');

var connectVoiceChannel = function(){
    const connection = joinVoiceChannel({
        channelId: channelID,
        guildId: server.guild.id,
        adapterCreator: server.guild.voiceAdapterCreator,
    });
    return connection;
}

getRandomMeme = function(){
    folderPath = './src/sound/memes'
    const files = fs.readdirSync(folderPath)
    const randomIndex = Math.floor(Math.random() * files.length)
    const randomFileName = files[randomIndex]
    return `${folderPath}/${randomFileName}`
}

playSound = function(path){
    connection = connectVoiceChannel()
    const player = createAudioPlayer()
    const resource = createAudioResource(path)
    player.play(resource)
    connection.subscribe(player)
}

module.exports = {
    connectVoiceChannel,
    playSound,
    getRandomMeme
}