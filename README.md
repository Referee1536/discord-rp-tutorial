# Super-Customize your Discord Status

## Disclaimer
Although this involves coding, you do NOT need any programming experience to do this! (As long as you know how to follow instructions, of course.)
It's also worth noting that all instructions given are assuming your PC has Windows installed.

### Introduction
Hello! I am Referee#1536 and I'm the developer of [Ref-bot](https://bit.ly/ref-bot-web), the first and only sports Discord bot; a proud moderator of
[Y0ken's Domain](http://discord.gg/nNfGqsZ), the home of Great Games and Guides; and a staff member of [TheFranswah Studio](https://discord.gg/yCqUJs5),
home to all technical issues for Audio, Video, Design, and more. Today, I would like to show you how to spice up and customize your status on Discord to
include extra detail, images, links, and more. Let's get started!

### Discord
First, you need to create an application on the [Discord Developer Portal](https://discord.com/developers). Log in, and then click on **New Application**, next to your avatar.
Type in a name for the application, and click **Create**.

Once you've created an application, you should see something like this:

![](https://i.imgur.com/eK07D1L.png)

Take note of the Client ID, as this is what you'll need later.

If you would like to add images to your status, then follow the steps below:
1) Click on **Rich Presence** on the left column, and make sure Art Assets is selected.
2) Select **Add Image(s)**, and upload any images that you would like to show off!
3) Name the image. Try to make it short, as you'll need to type this in later.

Now that an application is created, we need to make sure that our Discord settings are configured properly, so that the status will actually show up. To do this,
go to the Discord app -> User Settings -> Game Activity, and make sure `Display currently running game as a status message.` is turned on.

### Install Node.js
Next, we must install Node.js to be able to get our customized status up and running. Simply go to the [Node.js website](https://nodejs.org/),
select your OS, download the latest version, open up the installer, and follow the steps.

### Download Code and Customize
Yes, the fun part! Now, we get to the customization of your status, so that you can show it off and your friends will wonder how your status looks so good.

First, you need to download the code to your system. Don't worry, you don't need any special programs or need years of programming experience to do this. Go to the
[releases](https://github.com/Referee1536/discord-rp-tutorial/releases) page, then select Source code (zip) under Assets. Once it finishes downloading, right click on
the folder -> Extract All..., and click Extract. Then, follow these steps:
1) Navigate to the dowloaded code and open the index.js file.
- For beginners, right click on index.js -> Open With -> Choose Another App -> Other Options -> More apps -> Notepad.
- For the programmers out there, you can open this with the app of your choice, such as Visual Studio Code or Atom.
2) Make sure you see something like this:

![](https://i.imgur.com/C4pSsT6.png)

3) Get cookin'! You may customize this to your heart's content. Everything should be self-explanatory, as each line starting with `//` tells you what to do.
For example, the following code...
```javascript
// REMEMBER TO FILL IN THE CLIENT ID              V V V V V V V
const client = require("discord-rich-presence")("798297420928122890");

client.updatePresence({
  // Fill in the text and customize it to your liking
  details: "Hey there!",
  state: "This is awesome!",

  // If you added any images
  // Remove this section if you don't want any images
  largeImageKey: "red",
  largeImageText: "I like red",

  // If you wish to add any links
  // Remove this if you do not want any links
  buttons: [
    {label: "Join my Discord Server!", url: "https://discord.gg/C85TrvGYUR"},
    {label: "How I got my cool status!", url: "https://github.com/Referee1536/discord-rp-tutorial"}
  ],

  // Do not remove
  instance: true,
});
```
...will look like this:

![](https://i.gyazo.com/7de9db3e038a7c458703ab30f980820c.gif)

⚠  Please take note of the following when it comes to customizing your status:
- Make sure that your text is inside the quotes (`"Text here"`).
- All URLs for buttons must start with `http://` or `https://`.
- Discord only allows up to two buttons. You cannot have more than two buttons.
- The text for buttons cannot exceed 32 characters.
- A small image cannot exist without a large image.

### Showing Off Your Status
Woohoo! You customized your status and you're so excited to show it to your friends! ...but how do you do that? Well, it's not super hard. I'll show you how:
1) Go to File Explorer and navigate to the folder in which you downloaded earlier.
2) Once you're inside of the folder, right-click on the name of the folder on the top, and select **Copy Address as Text**.
3) Launch Notepad, create a new document, and paste the following:
```
cd copied_address_here
node .
```
- All this does is it navigates to the folder and starts the program using Node.js, which we installed earlier.
- If you renamed `index.js` to something else, then replace `node .` with `node file-name-here.js`.
4) Click File -> Save As..., and name it whatever you want, but **make sure it ends with `.bat`**. I recommend saving it to the Desktop for easy access,
but wherever you want to save it will work.
5) Double click on the `.bat` file, and you are good to go!

### Help! My Status Isn't Showing Up!
It may be due to one of the following reasons:
- Your status will not show up if the Discord *app* (not the web version) is not running on your PC.
- Make sure your client ID is valid.
- If the image is not showing, give it a few minutes. Discord takes time to process images. If you refresh the page and your images are gone, do not upload them
again, as Discord is still in the middle of processing your image.
- Is Discord up-to-date? Close the `.bat` file, press `Ctrl` + `R` in Discord to relaunch and check for updates, and open the `.bat` file again.
- Is your code up-to-date? Check out the latest [releases](https://github.com/Referee1536/discord-rp-tutorial/releases) and update if a new release is available.
- If you used Notepad, check out [Esprima](https://esprima.org/demo/validate.html) and paste your code inside of the text field. This will check for any syntax errors
that may be preventing your code from running properly.
- If double-clicking on the `.bat` file does not open Command Prompt, right-click on it -> Open. If it still doesn't open Command Prompt, double-check to make sure
that it is in fact a `.bat` file by going to File Explorer -> View -> ✅ File name Extensions, and navigate to your `.bat` file. Read
[this](https://stackoverflow.com/questions/4905708/batch-files-dont-run-theyre-being-opened-with-notepad/43068749#43068749) if you are still having issues.
- If you receive an error when trying to launch your status, *read the error*, try to figure out what's causing the issue, and Google it.
    - For example, `Error: Cannot find module ...` means that the computer cannot find the location of the folder. Make sure you copied the right address and try again. If
you're using a service like OneDrive, try storing the files locally.

If none of this helps, please join my [Discord Server](https://discord.gg/C85TrvGYUR) and DM our bot, Robert 📬#2630, with your question.
**Comments below will not be monitored.**

### Conclusion
That is all! Please share and star this if you found this helpful. Thank you!
