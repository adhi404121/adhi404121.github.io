window.onload = () => {
  const myInput = document.getElementById('dummyKeyboard');
  myInput.onpaste = e => e.preventDefault();
 }
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Adarsh S R. I’m a 24 yr old pentester and bug bounty hunter currently living in India.",
  skills:
    '<span class="code">Skill:</span> Ethical Hacking, Pen-Testing, Bug Hunting,..<br>',
  education:
    "UIT Neyyattinkara, Trivandrum,Kerala, India<br> Degree , BBA",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  acknowledges: 
    "No acknowledges😥 ", 
  contact:
    "You can contact me on any of following links:<br><a href='https://t.me/dominator_0x' class='success link'>Telegram</a>, <a href='https://www.instagram.com/b3_qu13t/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/itz_me_adhi/' class='success link'>Twitter</a>"
};

const  userInput = document.getElementById("userInput");
const  terminalOutput = document.getElementById("terminalOutput");
const  inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener('keypress', (e) =>{
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    };
    terminalOutput.innerHTML = `${
      terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight; 
    e.target.value = ""
  };
});
