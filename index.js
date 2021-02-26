// REMEMBER TO FILL IN THE CLIENT ID              V V V V V V V
const client = require("discord-rich-presence")("client-id-here");

client.updatePresence({
  // Fill in the text and customize it to your liking
  details: "Secondary Text",
  state: "Tertiary text",

  // If you added any images
  // Remove this section if you don"t want any images
  largeImageKey: "image-name-here",
  largeImageText: "Text that appears when a mouse is hovered over the image",

  // If you would like a small icon-like image
  // Remove this section if you don"t want this
  smallImageKey: "image-name-here",
  smallImageText: "Text that appears when a mouse is hovered over the image",

  // If you wish to add any links
  // Remove this if you do not want any links
  buttons: [
    {label: "The text on the button", url: "The link"},
    {label: "The text on the button", url: "The link"}
  ],

  // Do not remove
  instance: true,
});
