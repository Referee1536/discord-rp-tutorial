# Super-Customize your Discord Status to Show Off

## Disclaimer
Not much to say here, except that you do not need any programming experience to do this, and all instructions given are assuming your PC has Windows installed.

### Introduction
Hello! I am Referee#1536 and I'm the developer of [Ref-bot](https://bit.ly/ref-bot-web), the first and only sports Discord bot, as well as a proud moderator of [Y0ken's Domain](http://discord.gg/nNfGqsZ), the home of Great Games and Guides. Today, I would like to show you how to spice up and customize your status on Discord to include more detail, images, links, and more. Let's get started!

### Discord
First, you need to create an application on the [Discord Developer Portal](https://discord.com/developers). Log in, and then click on **New Application**, next to your avatar.
Type in a name for the application -- this can be changed, but the name is what appears next to **Playing** on your status.

Once you've created an application, you should see something like this:

![](https://i.imgur.com/eK07D1L.png)

Take note of the Client ID, as this is what you'll need later.

Now, if you would like to add images to your status, then follow the steps below:
1) Click on **Rich Presence** on the left column, and make sure Art Assets is selected.
2) Select **Add Image(s)**, and upload any images that you would like to show off!
3) Name the image. Try to make it short, as you'll need to type this in later.

### Install Node.js
Next, we must install Node.js to be able to get our customized status up and running. Simply go to the [Node.js website](https://nodejs.org/), select your OS and download the latest version, open up the file, and follow the steps.

### Download Code and Customize
Yes, the fun part! Now, we get to the customization of your status, so that you can show it off and your friends will wonder how your status looks so good.

First, download my code above. Don't worry, you don't need any special programs or need years of programming experience to do this. Once downloaded, follow these steps:
1) Navigate to the dowloaded code and open the index.js file.
- For beginners, right click on index.js -> Open With -> Choose Another App -> Other Options -> More apps -> Notepad.
- For the programmers out there, you can open this with the app of your choice, such as Visual Studio Code.
2) Make sure you see something like this:
![](https://i.imgur.com/ihEGOq5.png)
3) Get cookin'! You may customize this to your heart's content. Everything should be self-explanatory, as each line starting with `//` tells you what to do.
For example, the following code...
```javascript
// REMEMBER TO FILL IN THE CLIENT ID              V V V V V V V
const client = require('discord-rich-presence')('798297420928122890');

client.updatePresence({
  // Fill in the text and customize it to your liking
  details: 'Hey there!',
  state: 'This is awesome!',

  // If you added any images
  // Remove this section if you don't want any images
  largeImageKey: 'color',
  largeImageText: 'Look at this color',

  // If you wish to add any links
  // Remove this if you do not want any links
  buttons: [
    {label: 'Join my Discord Server!', url: 'https://discord.gg'},
    {label: 'Want your status to look like this?', url: 'https://github.com/Referee1536/discord-rp-tutorial'}
  ],

  // Do not remove
  instance: true,
});

console.log("Displaying status");
```
...will look like this:
![https://i.gyazo.com/7de9db3e038a7c458703ab30f980820c.gif](image url)

### Showing Off Your Status
Woohoo! You customized your status and you're so excited to show it to your friends! ...but how do you do that? Well, it's not super hard. I'll show you how:
1) Go to File Explorer and navigate to the folder in which you downloaded earlier.
2) Once you're inside of the folder, right-click on the name of the folder on the top, and select **Copy Address as Text**.
3) Launch Notepad and paste the following:
```
cd address-here
node .
```
- All this does is it navigates to the folder and starts the program using Node.js, which we installed earlier.
4) Click File -> Save As..., and name it whatever you want, but **make sure it ends with `.bat`**. I recommend saving it to the Desktop for easy access,
but wherever you want it will work.
5) Double click the `.bat` file, and you are good to go!

### Help! My Status Isn't Showing Up!
It may be due to one of the following reasons:
- It will not show up if you use Discord via a web browser, or your phone.
- If you're using buttons, try shortening the text. If you go too long, Discord will refuse to show your status.
- Make sure your client ID is valid.
- If the image is not showing, give it a few minutes. Discord takes time to process images.

If none of this helps, please join my [Discord Server](https://discord.gg/C85TrvGYUR) and ask in the #lounge channel. **Comments below will not be monitored.**

### Conclusion
That is all! Please share and star this if you found this helpful. Thank you!