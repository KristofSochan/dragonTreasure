			// These variables are defined so I can display whichever character's picture is chosen in the instructions page simply by using the one word variable instead of the relative links.
// “English Character” icon by Made in France, from thenounproject.com.
var eggsy = '<img src="../_images/char1.png">';
// “Spanish Character” icon by Made in France, from thenounproject.com.
var santiago = '<img src="../_images/char2.png">';
// “German Character” icon by Made in France, from thenounproject.com.
var hans = '<img src="../_images/char3.png">';
var i = 0;
var text;
var sprite;
var gameIcon;
var gameWalls = [];
var currentTime;
var reactionTime;
var reactionSpeed;
var green;
var glitchFunct;
var bossCompleted = false;
var code1;
var code2;
var code3;
var usedCodes = [];
var gameSpeed = 20;
var scoreKeeping;
var timeKeeping;
var onlyOnce = 0;
var abilityActivated = false;













// Credit to https://lingojam.com/GlitchTextGenerator for the "glitched" looking text.
var glitchedText = ["4̵̧̧̨̨̡̨̢̛̛̦̞̣͓̼̟̣͍͍̳͎͇͈̜̗̪͔̟͈̜̮̤̩͇͕̜̯͚͕̺̯͇͔̣͈̫͇̹̬̦̟͉͖̞͕̥̩̖̦̲̳̝̘̤̺̟͙̣̲͙̲̤̬̳́̾̉̇́͋͑̇̉͑̒̓͆̃̓̅͛̈́̆̌̃̽͆̾͂̄̔͑̍̔̃͗̎̍̍̈̀̊̌̿̀̌̈́̈̓́̈́̅͐̊̀͗̾͆̋͑̅̽̿̌͘̕̚͘͜͜͜͝͝͠͝͝͠͠͝͝ͅͅͅͅ8̶̧̨̨̧̨̡̢̢̧̨̢̛̛̘͈͉̖̗̦͈̪̙̖̝̣̲̟̟̣̖̬̣̯͕͔̹͇͙̪͙̫̜͈͈̪̤̼̫̳̪̘̙̯̙̭͍̩̞̺̟͎͇̦͇̳͇͓̫̫̪̥̞̪̝̬̳͇̲̟͈̲͙͚̪͇͎̭̱̞͇̫̟̥̩͉̫̮͈̦̟͑͌͗́̑͐͂̋̊̒͒̊̿̌̈́͐̽̍̂̏͆͒̋̿̈́̉͛̒̿́̊̅̅̈́̓̌̀̉̉̄͐̀̋̄̿̈̽̽̐̉̚̚̕͜͜͝͠͝͝͠͝ͅͅͅ3̴̡̨̧̧̡̻̝͓̰͚̘̣͕̹̥͇̘͈̼̲͇͙͚̩̙̭̞̯͍̮̞͚̣̳͓͕͇̻̬͕̰͔̭̘̮̰̝͔͙͇͇̫͎̺͙̠̥͙̳͓̳̜̦̬̮̫̻̳͈̜͍͍͓͖̤̻̟̲̮̭̬̭͙̬͚̰̫̺͓̪̥̬͍̮̥̯̤̀̌͗̽̃͌͂͗̂̅͂͜͜͠ͅͅͅͅ", "8̸̢̧̢̢̨̨̢̲̤̮̟̖͖̗̙̙͚̹̳̻̱͔͙̟̪̭̹͔̦̰̯̪͇̻̦̼̻̮̜̪̩͎̠̗͈͖̙̱͖̻̻͖̖̣̣̰̺̻̭̦̥̯͇̓̌͊͆̀̈́̆́͗̈́̒̈́̕͜͝͝5̶̡̨̧̧̧̛̞̝̬̭̥͖̪͎̥̞̪̲̲̻̬̞̱̳͇̳̪͙̤͍͙̞͉͎̲͇̥͈͕̹̼͈̦͈̰̯̱̹̤̯͇̖̬̫̥̭͍̱͇͍͙͈̦͓̖͈͍͎̳͉̩̱̜͙̺̟͚̻̭͇̺̦̻͕̼͙̬͖̩̹͎͙̲̯͖̪̰͈̍͋̉̒͂͒̽̒͊͋̈́́̅̆̿̑͂͆̋̓̔̚͜͜͝͝ͅͅͅͅͅ3̵̡̡̧̨̛̛̛̛̪̩͈̪͙̯̳͓̻̘̤͙̝̦̼̬̝͍̤̰͔̺̩̲̬̥͈̖̟͍̥̹̯̮̟͔̄̊̇͗́̃̏̑͌͌͒̐̄̊̓͒̀̇̌͛̂̉̌̄̀͊̑̿̆̈́̍̓͂́̀̂̓͒̎̇̒́̓̽̇̋͐̐̀̈̊̆̏́́̂̊̎͑̔̇̊̑̎͗̇͊͋͐̃̈́̐̓̉̈́̇̅̋͋̈́́̀͂͐̀̓̚̚͘͜͝͝͝͠ͅ", "4̸̧̡̢̡̨̧̢̢̢̧̧̧̨̡̧̡̛̛̠͎̭͙͔̩̥̪̬̺̜͉̹̜̥̻̭̩͚̥͙̳̣̺̜̬̦̯̣͎̲̯̙͎̲̜̫̭͉̣̻̥͚̯̼̻̩̝͙͔̖̭̯͕͖͉̝̥̮̹̳͔̼̯̰̞͓̗̦̲̳̝͕̜̖͎̖̙́̓̄̈́̐́̏͛̀͛̽́͋̂͊̋̊̑͛̅̎̉̀̐̏̐͆͐̇̐̊̓̍̆̉͑͐̽̋̌̉͑͆̒̌̉̍͗͛̋͂̿̃́͆͑̾̓̋͋̋̃̉͒͋̈͑̚͘͜͜͜͝͝͝͝͝͝ͅͅͅ3̸̡̨̢̡̨̧̢̘͙̩̫̝̭̮͎̳͓̟̻͍̫̙͖̬̲̬͉̠̼̳͉͎̗̭̫̬͎̹̟͍̩͙̥̻̮͍̗̳͕͈̗̗̰͎̳͉͈͎͈̣͖̱͚͉͈͙̥͕̗̤̳̗̟̼̅͋͐͘͜͜͜͝ͅͅͅ", "6̸̡̧̢̨̢̢̢̧̧̢̧̢̡̨̛̛̛͍̟̙̥̗̣̫͉̖̮͓̬̩̖͔̲̜͕̳̺̯͉̦̟͕̠̜̝͇̟̤̖̟̦̙̹̖̮̦̩̭̩͍̺̬͓̰͎͈͚̗͓̩͎̹̘̦̼͕͇͇͓͙̯̯̞̬̞̻̖̜͎͙̺̠̘̝̳̣̩̱̣͍̯͉͚̯̻͙͎̰̲̦͈̻͈̠̭̗̻͓̼͙̩͙̙̩̫̖̙͇̻̰͎̯̪͉̫̲̰̱̤̠͔̗̱̰̹̣̲̹̺̮͉̖̹̲̬͉̼͈̳͉͇̭̰͖̘̜͎̌̌̄̑̾͆̀̈́̃͊͌͂̿̑͋́̀̂͑͛͌̑͂̏̈̋̿̌̄̃̓̈́̄̌̆͐͌̀͒͑͒͛̂̓̆̈́̐͌͒͛͋̏͋̑̊̉̀͌̽̓͂̊̄̿͐̅͑̔̇̂̈͆͛̽̋͗̏̅̀͒̇͑̐̈́͘͘͘̕͘̚̕̕͜͠͝͝ͅͅͅͅ8̶̨̨̢̨̡̮͈̦̺͓̞̯̯͚̺͚̹̣̜̫̟̥̝̻̱̱̹̳͖̭̮̹̱͇̦̼̬̩̻͚͔̦̠̜̦͇̦̱̯̥̝̣̜̪͍͙̜̫̳͍͍̰̱̱͙̺̠̣͕͓̮̪͚̈̋́̀̀̈́̇̿̑̈́̀̇͐̓̇́̂̍̌̅͋̓̽̎͊͗͂́̒̃͆̓͛̃̔̆͋̂̒̑̏͋̐͊́̀̿͛͗̉̈́͋̑̎̈́̆̀͌̓̿̆̆͋͛̈́̈́̑̔̎͊́̅͒͒͒̽̍̋̓͘̚͜͝͝͠ͅͅ3̸̢̧̨̨̧̢̡̢̨̨̛̯͉̮̼͓̣̻͉̩̜͎̮̤̫̼̘̬̦̺̙̘̱̗̳̗̦̜͇͔͕͎̮̻̦̗̭̹̪̪͓͙͎̘̘̠̩̝̥̯̳͖̞͓͇̫͖̝͕̜̘̺͙͔̘̳̦̩̥͙̗̣̣̫̙͈̩̥̟̥͌́̈́͆͒̀̅̂̿̀̈́͗̑̈́͐̈́͊͐̍̋̓̂̾͌̀͗̉̅͛̈́̉͛̅̆̾̈̾̔͌̽̉̉̉̃̾̎̈́́̋̿̅͑̌̌͛̊̓̉̐̉͐͗͑̑̉͆͐̈̽̈́͂͐̌̓̄͋̏̇̓́̒̒̍̈́͒̐̅́̀̿̒̓͌̓͊̉̒̂͌͂͂̆̈̀̚̕̚̚̚͘͜͠͝͝͝͠͝͠͝ͅ", "1̶̨̢̢̧̢̨̧̢̡̧̺͔̺̙̼̪̣̤̻̮̲̮͙̻͈̳̜̫͖̝̖̲͕̙̻͓̼̝̗̭̻̘̰̻̘͔͕̮̻̳̮̲͎̺̖̗̤̦̮̬̹̝̜̪̠̪͈͈̺͙͖͇͍̫͙̣̣͍͉̯̳̰̺̯̮̭͓͙̗̤͖̬͖̜̝̗͎̬̙̟̮̦͚͎̳̜̙͕̦̤͈̻̘̤͎͍̹̠͓̳̟̱̞̤̗͇͕̞̮̼̝̲̖̘̘̭̳͓̼̘̆͌͜͜͜ͅͅͅ2̸̨̨̧̻̥̼̦̗̫̣̼͕̬̘̣͓̘̹̫͚̪̰̝̋̄̀̋͂͑́̓͊̃́͊̐̆͛̿͆͛̾́͛̆͛̔͑̀͋͂͛͌̌́̆̊̔̀̈̃̒͂́̆͂͒͐̎̀̒̈́̈́̌̀͆̊͑͒͒̉̅̀̐̈́͋̑͊͑͋͌͛̓͌̋́͛͑̀́̒́́̂̏͊̀̉̋̆̄̕͘̕̚̕͘͘͘͜͜͝͝͝͝͝͝͝ͅ6̵̢̡̧̡̡̡̡̛̛̛̛͉̝̰̺̩͖̤̺̖͙͖̭͚̭͎̳̗̙̻͖͕͕̼̼͎̞̯͈̺̥̜̲̱̮̻̞͕͇͙͍͕̖̻̞̖̹̼̘͙̗̞͖̼͓̀̏̆͂͒̈́͛̐̋͛͗͆̎̅̔́̎͑̿̅̏̈̌̽͑͌̎̆̓̒͆̋̽̃͌̓̒̂̋̏̇̓̎̏͌̆́̎̿͒̈́̿̆̍̈́̽̂̇̿̒̇̅͌̒̈́̉̆̕͘̕̕̕̚͘͜͜͜͜͠͠͝͝͝͝͠ͅ", "ģ̶̢̛̥̠͔͈͙̗̱̱͕̯̥̬̱͚͓͖̟̳̙̩̝̠͙̹̞̹̮͙̦͔̜͇͇̤͍̃͒̔̇͑̌̅͐̊̈̿͆͊̅̆̑̉͊̈́̈͆̓̋̔͂̆͛̄̃̃͂́̿́̾̍͌́͘̚͘̕͘̕͜͠͝͝ơ̵̢̧̢̧̢̢̡̲̖̖̻̲̟̝͇̲̗̙͙̖̼̖̠̤̟̞̝̺̦̗̺͎̲̜̫̤̩̙̘͈̖̮͖̬͎͖̖̳̹̙̼̥̣͓̹̻̻̹̪̩̘̲̞͔͍̔̔̅̾̏̇̈́̅̋̄̍̒̀́́̋̾̏̈́̃͛́̂͗͐̾̆̇̄̍̿̈́̓̓̉̅̏͒͗͑͘͜͜͝ ̶̢̢̢̢̛͚̮̱̠̝͈̜̩̮͔̹̲͖͉̹̬̺̘̱̰̗̼͔͔͉̮̤̥̱͚̗͖͍̰͎͍̱͔͔͇͕͉͔̻͉͕̯̆̆͋͆͆̒̑̑͂̾̂̓͂̎̇̔͊͆́͋̅̔̊͋̍̈́͂̽͛͒͂͂̐̽͋͌͌̉̐̎͂̉̌̈́̇͒̀̀͌͆̚͘̕͘͜͜b̴̨̨͇͓͙̣͔̲͖̩͇͔̫̰̰̾͋̑̓̄͑͛͛̿̔̃̊̅̐́̅̇͑̄̓̈́̓͛̌̃͒͑̌̎͋͒̕̚͜͝͝͝ͅͅe̶̛̛̜̞̭͇̜̝͈̳͖̼̔͛̑̈́̐͊͂͊͐ͅľ̵̡̨̨̡̢̠̭͍̯̹͍̙͇͔̣͓̙̞͓̼̱̩̳̟̪̹͈̠̙͚̞̰̪̘͎͔̬̰̺̼̖̝͈̪̬̤̝͚̹̞̟̪̤͙̖͚̼̘͎͎̠̩̮̣̩̠̪͈͚͕͇̻͔̭̦͎̒͐͆̑̋̈͋͋͘͜͜͜ͅl̷̨̧̨̢̡̡̢̢̛̦͕̞̲̭̩͖̟͚̻̤̦̩̪̤̖̥̙̱̝͓̤̘̜̭͉͈͍̠͕̲̞̲͙̹̼͍͖̬̭͙͓͚̤̹͕̘̩͍͇̝͎͇̪͈̮̜̙̔̿̉͛̂̒̐͆̾̓̉̊̍̿̑̃͌́̇́̿́̈̉̑̓̇͑̂̀̒̉̓̓̎̉͘̕͠͝ͅs̴̨̡̧̛̛̹̮͙̬̦̦͕̰͉͇͔͈̦̤̟͔͙̯͎͇̊̂̓͐͑̿̀́̒̈́̈́̈́̉̎̈́̐̀̓̑̀͒͌̑̄̿͑̈́́̇͋̋̚̚̕͜͝͝͠!̸̡̨̡̛͎̖̼̟͔̲̥̪͍͙͈͈͙̩̭̲̟̩̝̜̓̉͋̏͐̽̐̌͊́͒̓̓́͆̑͆͂̅́͆̇̍̋̋̿̎̽͑̀͛͘"];




























// This object is used to store all the statistics of the player; things such as name, class, lives, and more. The three bottom properties of the object are used to represent the special ability of the character, and if it applies to the user, will be set to 1.
var hero = {
		nameLower: "",
		// This is a method that seperates the nameLower property into two different substrings. This is done so that the first letter of hero.name can be capitalized.
		name: function () {
			return this.nameLower.substring(0,1).toUpperCase() + this.nameLower.substring(1);
		},
		class: "",
		level: 1,
		lives: 3,
		score: 0,
		time: 40,
		timeShifter: 0,
		teleport: 0,
		smash: 0,
		speed: "",
		code1: "",
		code2: "",
		code3: "",
};
// Credit to W3 Schools (https://www.w3schools.com/graphics/game_intro.asp) for concept of this game and several mechanics such as the game stopping when the component runs into a wall.
var gameCanvas = {
    canvas: document.createElement("canvas"),
	// This method (which is a function stored as the value of a property) first sets the width and height of gameCanvas.canvas.
    start: function() {
			this.canvas.width = 480;
			this.canvas.height = 270;
			// Next, the canvas is inserted as the first HTML element of <div id="game">.
			document.getElementById("game").insertBefore(this.canvas, document.getElementById("game").childNodes[0]);
			// These following lines are crucial to animating the canvas.
			this.context = this.canvas.getContext("2d");
			this.frameNo = 0;
			// Runs updatesGaveCanvas() as fast as "gameSpeed" is currently set to.
			this.interval = setInterval(updateGameCanvas, gameSpeed);
    },
	// Clears the entire canvas every frame so icon and walls don't draw continuously.
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
	// Stops the timer set in setInterval (used when game should stop).
    stop: function() {
        clearInterval(this.interval);
    }
}
// These are functions I can run onLoad to skip to various parts of the game if needed for debugging purposes.
function deBug() {
	document.getElementById("messaging").style.display = "none"; 
	document.getElementById("instructions").style.display = "none"; 
	document.getElementById("game").style.display = "inline";
	initializeArcadeGame();
}
function deBug2() {
	document.getElementById("messaging").style.display = "none"; 
	document.getElementById("instructions").style.display = "none"; 
	document.getElementById("classSelector").style.display = "inline";
}
function deBug3() {
	hero.nameLower = "Nick"
	hero.class = "Hans"
	console.log("deBug");
	document.getElementById("messaging").style.display = "none"; 
	document.getElementById("instructions").style.display = "none"; 
	document.getElementById("gameSelector").style.display = "inline";
}
function deBug4() {
	document.getElementById("messaging").style.display = "none"; 
	userLost();
}
function deBug5() {
	document.getElementById("messaging").style.display = "none"; 
	hero.nameLower = "kristof"
	hero.code1 = 33;
	hero.code2 = 66;
	hero.code3 = 99;
	userWon();
}
// This is the function that makes the typewriter animation.
function typeWriter(text, id, i) {
	if (i < text.length) {
		// As long as i (set to 0 everytime function is run) is still less than the length in characters of the text, display one more letter of the message.
    	document.getElementById(id).innerHTML += text.charAt(i);
		i++;
		// Wait 40 miliseconds then run the function again.
		setTimeout(function(){ typeWriter(text, id, i); }, 40);
  }
}
// This function always runs 1 second after onLoad and writes out the first message.
function message1() {
	setTimeout(function(){ typeWriter("HELLO? IS ANYBODY GETTING MY MESSAGES?", "message1", 0); }, 1000);
}
// This function is set to run when the first form (the one that responds to if the user is getting the messages) is submitted.
function userResponded1() {
	setTimeout(function(){ typeWriter("Finally. I've been trying to establish connection with someone for days. I need your help, but I don't have much time to explain. What's your name?", "message2", 0); }, 500);
	// This "autofocuses" the next text box to continue to simulate the "command prompt" style.
	document.getElementById("response2").focus();
}
// All of the userRespondedX functions are simply run whenever the user presses enter on that corresponding text submition.
function userResponded2() {
	// Stores the user's name inside the hero object in case I need to use that information later on.
	hero.nameLower = document.getElementById("response2").value;
	setTimeout(function(){ typeWriter("Thank you, " + hero.name() + ". You're my hero.", "message3Pt1", 0); }, 500);
	setTimeout(function(){ typeWriter("Now for the task. I've been stuck in this huge, all black room for what I think has been weeks. I don't remember anything. For some reason, the only thing I know anything about is this game that someone needs to beat for me to get out. Do you think you can help?", "message3Pt2", 0); }, 2500);
	document.getElementById("response3").focus();
	
}
function userResponded3() {
	var response3 = document.getElementById("response3").value.toLowerCase();
	// This checks to see if response3 (user's answer to "Do you think you can help") is equal to any of the following string values that mean something along the lines of "yes".
	if (response3 == "yes" || response3 == "yeah" || response3 == "yup" || response3 == "i guess" ||response3 == "i guess so" || response3 == "ye" || response3 == "sure" || response3 == "aye aye" || response3 == "fo' shizzle" || response3 == "yessir" || response3 == "yah" || response3 == "ya" || response3 == "yeet" || response3 == "ya yeet" || response3 == "ya yeet ya") {
			setTimeout(function(){ typeWriter("Perfect. The padlock on the door requires 3 two-digit numbers. Make sure to remember each code you recieve at the end of the level. Once you've finished, you can tell the codes to me.", "message4Pt1", 0); }, 500);
			setTimeout(function(){ typeWriter("My fate is now in your hands.", "message4Pt2", 0); }, 8500);
			setTimeout(function(){ 
					document.getElementById("messaging").style.display = "none"; 
					document.getElementById("classSelector").style.display = "inline";
			}, 13000);
			document.getElementById("responseDummy").focus();
	}
	else {
		// Refocuses the same text input element if the form submission is not equal to "yes" or an equivalent.
		document.getElementById("response3").focus();
	}
}
// All of the next 3 functions do the exact same thing; there is just one for each character that can be chosen.
function choseEggsy() {
	hero.class = "Eggsy";
	hero.timeShifter = 1;
	document.getElementById("classSelector").style.display = "none"; 
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("charPic").innerHTML = eggsy;
	setTimeout(function(){ typeWriter("You have chosen Eggsy. Good idea.", "instruct1", 0); }, 500);
	setTimeout(function(){ typeWriter("Dr. Eggsy Hughes was born in Essex, England on April 1, 1924. He may be born on April Fools, but he is no joke.", "instruct2", 0); }, 2500);
	setTimeout(function(){ typeWriter("For years he has been researching the time shifting properties of the extremely unstable isotope of Hydrogen named Deuterium.", "instruct3", 0); }, 7500);
	setTimeout(function(){ typeWriter("With the Deuterium orb in his pocket, he can fast forward through time once per round. To use this special ability in the arcade game, press F.", "instruct4", 0); }, 13000);
	setTimeout(function(){ typeWriter("When you are ready, type 'start' and press enter. Good luck, Eggsy.", "instruct5", 0); }, 19750);
	document.getElementById("userStarts").focus();
}
// The functions begin by changing a couple values of the hero object, and then change the HTML elements currently displayed.
function choseSantiago() {
	hero.class = "Santiago";
	hero.teleport = 1;
	document.getElementById("classSelector").style.display = "none"; 
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("charPic").innerHTML = santiago;
	setTimeout(function(){ typeWriter("Santiago, huh?. Nice choice.", "instruct1", 0); }, 500);
	setTimeout(function(){ typeWriter("Santiago Amador, son of famous magician Ivan Amador, grew up in a rural area of southern Spain. Learning from his father, Santiago became a prodigy of magic. Santiago mesmerized crowds of thousands before he even started kindergarten.", "instruct2", 0); }, 2000);
	setTimeout(function(){ typeWriter("His most famous trick of all, of course, was his teleporting rabit trick.", "instruct3", 0); }, 12000);
	setTimeout(function(){ typeWriter("Through years of practice, Santiago learned to teleport himself. Use this secret ability once per round in the arcade game to teleport with ease. Press F to activate.", "instruct4", 0); }, 15750);
	setTimeout(function(){ typeWriter("When you are ready, type 'start' and press enter. Good luck, Santiago.", "instruct5", 0); }, 23500);
	document.getElementById("userStarts").focus();
}
// The main part of these functions give backstory to the characters and prompt the user to type "enter" when ready to play.
function choseHans() {
	hero.class = "Hans";
	hero.smash = 1;
	document.getElementById("classSelector").style.display = "none"; 
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("charPic").innerHTML = hans;
	setTimeout(function(){ typeWriter("You have chosen Hans. Good choice.", "instruct1", 0); }, 500);
	setTimeout(function(){ typeWriter("As one of the last people to still practice this age old tradition, Hans Kramer can transport cattle simply by lifting them up and putting them on his back.", "instruct2", 0); }, 2000);
	setTimeout(function(){ typeWriter("The Kramer family tree has a large line of men so strong that they can carry eight cattle from their family ranch to the butcher shop in downtown Heidelberg, Germany each hour.", "instruct3", 0); }, 9750);
	setTimeout(function(){ typeWriter("At 7' 5\" and 400lbs, anatomists around the world have no clue how Hans and his family members are so massive. To use Hans' superstrength in the arcade game, press F and plow through one of the walls.", "instruct4", 0); }, 18000);
	setTimeout(function(){ typeWriter("When you are ready, type 'start' and press enter. Good luck, Hans.", "instruct5", 0); }, 26500);
	document.getElementById("userStarts").focus();
}
// When the form for "typing start to begin" is submitted, this function is run that first checks to see if the response = "start".
function userStarts() {
	if (document.getElementById("userStarts").value.toLowerCase() == "start") {
		// If the condition is satisfied, the instruction visual elements are hidden and the game elements are shown.
		document.getElementById("instructions").style.display = "none"; 
		document.getElementById("gameSelector").style.display = "inline";
	}
}
// If the user selects the arcade game, this function is run. This function is seperate from runArcadeGame() because that function is ran every time the user dies. The code written in initializeArcadeGame() only should be ran once.
function initializeArcadeGame() {
	// Hide previous screen and show the game screen.
	document.getElementById("gameSelector").style.display = "none";
	document.getElementById("game").style.display = "inline";
	// Game instructions.
	typeWriter("Fly through the obstacles to win the game.", "arcadeInstructions1", 0);
	setTimeout(function(){ typeWriter("Every ten seconds you will recieve another code and advance to the next level.", "arcadeInstructions2", 0); }, 2500);
	scoreKeeper();
	timeKeeper();
	runArcadeGame();
}
function runArcadeGame() {
	// Stats displayed.
	document.getElementById("levelNum").innerHTML = "Level: " + hero.level;
	document.getElementById("lives").innerHTML = "Lives: " + hero.lives;
	document.getElementById("score").innerHTML = "Score: " + hero.score;
	document.getElementById("time").innerHTML = "Time Left till win: " + hero.time;
	document.getElementById("codes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3;
	// This method is evoked in the runArcadeGame() function. See the global variables listed at the top of file for a breakdown of the gameCanvas object and its properties.
	gameCanvas.start();
	// Calls the component function to create the visual representation of the player. Width, height, color, and positions are set in the arguments.
    gameIcon = new component(10, 13, "#08cb08", 10, 120);
	// This allows the user to move the component using WASD keys or arrow keys. When any key is pressed while on the document, the following function is ran.
	document.onkeypress = function(event) {
		// The first step of the function is to check if the key pressed is W, A, S, D. It first checks if the key pressed is W. If it is not, the same thing is checked for the A, S, and D.
		if (event.keyCode == 119) {
			// If the keyCode of the key pressed is indeed W, then the corresponding function, which is to move the gameIcon upward, is evoked.
			moveUp();
		// keyCode 115 = S.
		} else if (event.keyCode == 115) {
			moveDown();
		// keyCode 97 = A.
		} else if (event.keyCode == 97) {
			moveLeft();
		// keyCode 100 = D.
		} else if (event.keyCode == 100) {
			moveRight();
		// keyCode 102 = F (for special abilities).
		} else if (event.keyCode == 102) {
			specialAbility();
		}
	}
}
// Function that creates the component.
function component(width, height, color, xPos, yPos) {
    this.width = width;
    this.height = height;
	// These two properties are the values used to determine the speed of the component in both the x and y direction.
    this.speedX = 0;
    this.speedY = 0;    
    this.xPos = xPos;
    this.yPos = yPos;    
	// This uses the arguments of the component function to create a component with the currently specified size, position, and color.
    this.update = function() {
        context = gameCanvas.context;
        context.fillStyle = color;
        context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
	// This function is run every time the canvas updates and simulates "speed" by settings the X and Y positions of the component to be the current values + the "speed" (which will be changed in the moveX() functions)
    this.newPos = function() {
        this.xPos += this.speedX;
        this.yPos += this.speedY;  
    }    
	this.crashWith = function(otherobj) {
		// If abilityActivated is true (used for Santiago's and Han's abilities, the function temporarily stops checking for collisions.
		if (abilityActivated == false) {
			// These variables represent the edges of the gameIcon and the walls. This is done because a collision doesn't occur when the center of the components collide, but rather when the edges of the components collide.
			var myleft = this.xPos;
			var myright = this.xPos + (this.width);
			var mytop = this.yPos;
			var mybottom = this.yPos + (this.height);
			var otherleft = otherobj.xPos;
			var otherright = otherobj.xPos + (otherobj.width);
			var othertop = otherobj.yPos;
			var otherbottom = otherobj.yPos + (otherobj.height);
			var crash = true;
			// The values of the component and the values of the icon are compared to determine whether or not they have run into each other.
			if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
					crash = false;
				}
			return crash;
		}
	}
}
function updateGameCanvas() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
	// Because there are multiple gameWalls, this loop is used to go through every gameWall and check if it there has been a crash.
    for (i = 0; i < gameWalls.length; i += 1) {
        if (gameIcon.crashWith(gameWalls[i])) {
			// If any of them have crashed, the game stops.
            gameCanvas.stop();
			// Adjusts and resets all statistics/values then restarts the game.
			gameWalls = [];
			hero.lives -= 1;
			hero.level = 1;
			hero.time = 40;
			hero.score = 0;
			hero.code1 = "";
			hero.code2 = "";
			hero.code3 = "";
			hero.timeShifter = 1;
			hero.teleport = 1;
			hero.smash = 1;
			runArcadeGame();
			gameSpeed = 20;
			gameCanvas.stop();
			gameCanvas.start();
            return;
        } 
    }
	// Runs clear() method.
    gameCanvas.clear();
	// Adds 1 to the frame counter.
    gameCanvas.frameNo += 1;
    if (gameCanvas.frameNo == 1 || everyinterval(150)) {
        xPos = gameCanvas.canvas.width;
        minHeight = 20;
        maxHeight = 200;
		// This randomly generates a number using the given maximum and minimum height values to use for the new wall components.
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
		// This randomly generates a number using the given maximum and minimum gap values to use for the new wall components.
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
		// The first new component is the upper portion of a wall.
        gameWalls.push(new component(10, height, "green", xPos, 0)); 
		// The second new component is the lower portion of the wall, which uses the randomly generated "gap" variable to determine the height.
        gameWalls.push(new component(10, xPos - height - gap, "green", xPos, height + gap));
    }
    for (i = 0; i < gameWalls.length; i += 1) {
		// The x-axis position of each gameWall is decreased by one, moving it to the left.
        gameWalls[i].xPos += -1;
        gameWalls[i].update();
    }
    gameIcon.newPos();    
    gameIcon.update();
	// Conditional checks if the user has lost the game.
	if (hero.lives == 0) {
		// If true, the game stops and the losing screen is displayed.
		gameCanvas.stop();
		document.getElementById("game").style.display = "none";
		userLost();
	}
	if (hero.time == 0) {
		// If true, the game stops and the winning screen is displayed so that the user can input their codes.
		gameCanvas.stop();
		clearInterval(scoreKeeping)
		clearInterval(timeKeeping);
		// The delay is used so that the user can look at their codes before they go away.
		setTimeout(function(){ 
			document.getElementById("game").style.display = "none";
			userWon();
		}, 7500);
	}
}
// This function is used to create new walls. It returns true if the interval number (150 for when it is used in updateGameCanvas()) equals the current frame number.
function everyinterval(intervalNum) {
	// More specifically, this conditional actually checks to see if the remainder of the two numbers divided is equal to 0.
    if ((gameCanvas.frameNo / intervalNum) % 1 == 0) {return true;}
	else {return false;}
}
// Triggered when the W key is pressed, moveUp() sets speedY to -0.5 so it can change the value of yPos in the component function and move the component upward.
function moveUp() {
    gameIcon.speedY = -0.5; 
}
// Triggered when the S key is pressed, moveDown() sets speedY to 0.5 so it can change the value of yPos in the component function and move the component downward.
function moveDown() {
    gameIcon.speedY = 0.5; 
}
// Triggered when the A key is pressed, moveLeft() sets speedX to -0.5 so it can change the value of xPos in the component function and move the component leftward.
function moveLeft() {
    gameIcon.speedX = -0.5; 
}
// Triggered when the D key is pressed, moveRight() sets speedY to 0.5 so it can change the value of xPos in the component function and move the component rightward.
function moveRight() {
    gameIcon.speedX = 0.5; 
}
// Increases the score by 1 once every 20 milliseconds.
function scoreKeeper() {
	scoreKeeping = setInterval(function(){
		hero.score++;
		document.getElementById("score").innerHTML = "Score: " + hero.score;
	}, 20);
}
// Subtracts 1 from hero.time every second.
function timeKeeper() {
	timeKeeping = setInterval(function(){ 
		hero.time -= 1;
		document.getElementById("time").innerHTML = "Time left till win: " + hero.time;
		// Once the time left is below 30, the user advances to level 2, the game speed increases, and a code is generated.
		if (hero.time <= 30 && hero.level == 1) {
			gameSpeed = 15;
			gameCanvas.stop();
			gameCanvas.start();
			hero.level = "2"
			hero.code1 = Math.floor(Math.random() * (100 - 10)) + 10;
			document.getElementById("levelNum").innerHTML = "Level: " + hero.level;
			document.getElementById("codes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3 ;
		}
		// Once the time left is below 20, the user advances to level 3, the game speed increases more, and the second code is generated.
		if (hero.time <= 20 && hero.level == 2) {
			gameSpeed = 10;
			gameCanvas.stop();
			gameCanvas.start();
			hero.level = "3";
			hero.code2 = Math.floor(Math.random() * (100 - 10)) + 10;
			document.getElementById("levelNum").innerHTML = "Level: " + hero.level;
			document.getElementById("codes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3 ;
		}
		// Once the time left is below 10, the user advances to the boss level, the game speed increases one more time, and the final code is generated.
		if (hero.time <= 10 && hero.level == 3) {
			gameSpeed = 5;
			gameCanvas.stop();
			gameCanvas.start();
			hero.level = "FINAL BOSS";
			hero.code3 = Math.floor(Math.random() * (100 - 10)) + 10;
			document.getElementById("levelNum").innerHTML = "Level: " + hero.level;
			document.getElementById("codes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3 ;
		} 
	}, 1000);
}
// Function ran when "F" is pressed in the arcade game. The function determines which ability function to run based off hero.class.
function specialAbility() {
	// hero.timeShifter must == 1 because if hero.timeShifter == 0 the ability has already been used on that life.
	if (hero.class == "Eggsy" && hero.timeShifter == 1) {
		eggsyTimeShift();
	}
	if (hero.class == "Santiago" && hero.teleport == 1) {
		santiagoTeleport();
	}
	if (hero.class == "Hans" && hero.smash == 1) {
		hansSmash();
	}
}
function eggsyTimeShift() {
	// hero.timeShifter set to 0 so that the ability can not be used again (on that life).
	hero.timeShifter = 0;
	// Subtracts time by 5 to "shift time".
	hero.time -= 5;
	document.getElementById("time").innerHTML = "Time left till win: " + hero.time;
}
function santiagoTeleport() {
	// hero.teleport set to 0 so that the ability can not be used again (on that life).
	hero.teleport = 0;
	// abilityActivated set to true to temporarily stop checking for collisions while the object is "teleporting".
	abilityActivated = true;
	setTimeout(function() { abilityActivated = false; }, 5);
	// Moves gameIcon 150 pixels to the right. 
	gameIcon.xPos += 150;
}
function hansSmash() {
	// hero.smash set to 0 so that the ability can not be used again (on that life).
	hero.smash = 0;
	// Stops checking for collisions for 5 seconds so the user can "smash" through walls without losing a life.
	abilityActivated = true;
	setTimeout(function() { abilityActivated = false; }, 5000);
}
function runReactionGame() {
	document.getElementById("gameSelector").style.display = "none";
	document.getElementById("reactionGame").style.display = "inline";
	// Instructions displayed.
	typeWriter("Click the button as fast as you can after it turns green.", "reactionInstructions1", 0);
	setTimeout(function() {typeWriter("For every score below 400, you recieve one code to the padlock.", "reactionInstructions2", 0);}, 3000);
	// Statistics displayed.
	document.getElementById("reactLevelNum").innerHTML = "Level: " + hero.level;
	document.getElementById("reactLives").innerHTML = "Lives: " + hero.lives;
	document.getElementById("reactSpeed").innerHTML = "Reaction speed: " + hero.speed;
	document.getElementById("reactCodes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3;
	// Begins game after instructions are finished being typed out.
	setTimeout(function() {
		buttonChange();
	}, 6500);
}
function buttonChange() {
	var randomVariable = Math.random() * (12000 - 3000) + 3000;
	setTimeout(function() { 
		document.getElementById("reactionButton").style.backgroundColor = "#08cb08";
		// Variable set to the exact time the button changed to green.
		currentTime = Date.now();
		green = true;
	}, randomVariable); // Changes button to green at a random amount of time between 12 and 3 seconds.
}
function checkReaction() {
	// Green must == true, as otherwise the user clicked too soon.
	if (green == true) {
		// Variable set to the exact time the user reacted.
		reactionTime = Date.now();
		// The reaction speed of the user is determined by how much time passed before the user clicked on the button.
		hero.speed = reactionTime-currentTime;
		document.getElementById("reactSpeed").innerHTML = "Reaction speed: " + hero.speed + " ms";
		green = false;
			// hero.speed must be less than 400, as otherwise the user clicked too slowly.
			if (hero.speed < 1000) {
				// Checks if user is on the "FINAL BOSS" level.
				if (hero.code != "" && hero.code2 != "" && hero.code3 != "") {
					// Reaction speed must be under 300 for the final level to win.
					if (hero.speed < 500) {
						clearInterval(glitchFunct);
						// Generates a random integer between 10 and 100 for the code.
						hero.code3 = Math.floor(Math.random() * (100 - 10)) + 10;
						setTimeout(function(){ 
							document.getElementById("reactionGame").style.display = "none";
							userWon();
						}, 7500);
					}
					else {
						hero.lives--;
						document.getElementById("reactLives").innerHTML = "Lives: " + hero.lives;
						alert("Two slow. -1 Life.")
						document.getElementById("reactionButton").style.backgroundColor = "red";
						buttonChange();
					}
				}
				// Checks if user is on Level 3.
				if (hero.code != "" && hero.code2 != "" && hero.code3 == "") {
					hero.level = "FINAL BOSS";
					// This function cycles through the 6 different "glitched" looking codes in the glitchedText array.
					glitchFunct = setInterval(function(){ 
						hero.code3 = glitchedText[i]
						document.getElementById("reactCodes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3;
						i++
						// Once the function has cycled through all 6, it restarts with the first code.
						if (i == 6) {i = 0;}
					}, 20);
					typeWriter("The last code is glitched. To get the final code, you now must react within 300 milliseconds. You've come so far... Don't mess up.", "reactionInstructions3", 0);
					setTimeout(function() {
						buttonChange();
					}, 13000);
				}
				// Checks if user is on Level 2.
				if (hero.code1 != "" && hero.code2 == "") {
					// Generates a random integer between 10 and 100 for the code.
					hero.code2 = Math.floor(Math.random() * (100 - 10)) + 10;
					hero.level++;
					buttonChange();
				}
				// Checks if user is on Level 1.
				if (hero.code1 == "") {
					// Generates a random integer between 10 and 100 for the code.
					hero.code1 = Math.floor(Math.random() * (100 - 10)) + 10;
					hero.level++;
					buttonChange();
				}
				// Updates level/codes and sets the button back to red.
				document.getElementById("reactLevelNum").innerHTML = "Level: " + hero.level;
				document.getElementById("reactCodes").innerHTML = "Padlock codes: " + hero.code1 + " " + hero.code2 + " " + hero.code3 ;
				document.getElementById("reactionButton").style.backgroundColor = "red";
			}
			else {
				// User reacted too slowly.
				hero.lives--;
				document.getElementById("reactLives").innerHTML = "Lives: " + hero.lives;
				alert("Two slow. -1 Life.")
				document.getElementById("reactionButton").style.backgroundColor = "red";
				buttonChange();
			}
	}
	else {
		// User clicked before the button turned green.
		hero.lives--;
		document.getElementById("reactLives").innerHTML = "Lives: " + hero.lives;
		alert("You clicked too soon. -1 Life.")
		document.getElementById("reactionButton").style.backgroundColor = "red";
		buttonChange();
	}
	checkReactLives();
}
// This function checks to see if the user has ran out of lives.
function checkReactLives() {
	if (hero.lives == 0) {
		// If so, the losing screen is display.
		document.getElementById("reactionGame").style.display = "none";
		userLost();
	}
}
function userLost() {
	// This conditional statement ensures that the losing screen function only runs once. There were issues with the issue running multiple times.
	if (onlyOnce == 0) {
		onlyOnce = 1;
		document.getElementById("loseScreen").style.display = "inline";
		document.getElementById("responseDummy2").focus();
		setTimeout(function(){ typeWriter("You ran out of lives.", "lose1", 0); }, 500);
		setTimeout(function(){ typeWriter("Thank you for trying, but it's just too late now.", "lose2", 0); }, 2000);
		setTimeout(function(){ typeWriter("Looks like I'll be stuck here forever...", "lose3", 0); }, 5000);
		setTimeout(function(){ typeWriter("So long.", "lose4", 0); }, 8000);
		setTimeout(function(){ typeWriter("-Frank M.", "lose5", 0); }, 11250);
	}
}
function userWon() {
	document.getElementById("winScreen").style.display = "inline";
	document.getElementById("winResponse1").focus();
	setTimeout(function(){ typeWriter(hero.name() + ", you did it! I don't know how I could ever repay you.", "win1", 0); }, 500);
	setTimeout(function(){ typeWriter("Now, so that I can get out of here... What's the first code you recieved?", "win2", 0); }, 3500);
}
function winResponse1() {
	var code1 = document.getElementById("winResponse1").value;
	// Conditional checks to see if the submitted code is valid.
	if (code1 == hero.code1 || code1 == hero.code2 || code1 == hero.code3) {
		// Adds the value of the first code the user submits to an array of already used codes.
		usedCodes.push(code1);
		console.log(usedCodes);
		setTimeout(function(){ typeWriter("I heard a little clicking sound come from the padlock! I think that's a good sign! What's the second code?", "win3", 0); }, 2000);
		document.getElementById("winResponse2").focus();
	}
	else {
		document.getElementById("winResponse1").focus();
	}
}
function winResponse2() {
	var code2 = document.getElementById("winResponse2").value;
	if (code2 == hero.code1 || code2 == hero.code2 || code2 == hero.code3) {
		// Not only does the second submitted code have to be one of the three generated codes, but it cannot be a code already submitted. "indexOf()" checks if code2 matches any of the already usedCodes.
		if (usedCodes.indexOf(code2) == -1) {
			// Adds the second code to the array.
			usedCodes.push(code2);
			console.log(usedCodes);
			setTimeout(function(){ typeWriter("Almost there! What's the last code you recieved?", "win4", 0); }, 1500);
			document.getElementById("winResponse3").focus();
		}
	}
	else {
		document.getElementById("winResponse2").focus();
	}
}
function winResponse3() {
	var code3 = document.getElementById("winResponse3").value;
	if (code3 == hero.code1 || code3 == hero.code2 || code3 == hero.code3) {
		// Checks to see if code has been used.
		if (usedCodes.indexOf(code3) == -1) {
			// Adds the final code to the array.
			usedCodes.push(code3);
			console.log(usedCodes);
			setTimeout(function(){ typeWriter("IT WORKED! Thank you, oh, thank you. You don't know how much this means to me.", "win5", 0); }, 2000);
			// Lists the first, second, and third code submitted in order.
			setTimeout(function(){ typeWriter(usedCodes[0] + ", " + usedCodes[1] + ", " + usedCodes[2] + "... Who would've thought a man could be so happy to hear three little numbers...", "win6", 0); }, 6500);
			setTimeout(function(){ typeWriter("Well, here's where we say our goodbyes, huh. I never got the change to know you, but I think we would've gotten along well.", "win7", 0); }, 10500);
			setTimeout(function(){ typeWriter("So long.", "win8", 0); }, 17500);
			setTimeout(function(){ typeWriter("-Frank M.", "win9", 0); }, 20500);
			document.getElementById("responseDummy3").focus();
		}
	}
	else {
		document.getElementById("winResponse3").focus();
	}
}
