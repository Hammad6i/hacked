const text = `
> Initiating system override...
> Accessing secure files...
> Downloading database...
> Injecting trojan...
> ❌ WARNING: SYSTEM BREACHED!
> Tracking location...
> Sending data to server...
> 💀 YOU HAVE BEEN HACKED!
`;

let i = 0;
const writer = document.getElementById('typewriter');

function typeWriter() {
  if (i < text.length) {
    writer.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();
