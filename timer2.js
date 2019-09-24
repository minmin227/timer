const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if(key === 'b'){
    setTimeout(()=> {process.stdout.write('\x07');},0)

  } else if(key >= 1 && key <= 9){
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(()=> {
      process.stdout.write('\x07')}, key * 1000)

  } else if (key === '\u0003'){
    setTimeout(() => {
      process.stdout.write(`Bye Bye Bye Bye Bye\n`);
      setTimeout(() => {
        process.exit();
      },1000)
    }, 1000)
  }
}); 

console.log('Welcome to my house');