// REMEMBER TO FILL IN THE CLIENT ID              V V V V V V V
const client = require('discord-rich-presence')('798297420928122890');

client.updatePresence({
  // Fill in the text and customize it to your liking
  details: 'Hey there!',
  state: 'This is awesome!',

  // If you added any images
  // Remove this section if you don't want any images
  largeImageKey: 'red',
  largeImageText: 'I like red',

  // If you wish to add any links
  // Remove this if you do not want any links
  buttons: [
    {label: 'Join my Discord Server!', url: 'https://discord.gg'},
    {label: 'How I got my cool status!', url: 'https://github.com/Referee1536/discord-rp-tutorial'}
  ],

  // Do not remove
  instance: true,
});

console.log("Displaying status");