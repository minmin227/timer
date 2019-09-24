let argsInput = process.argv.slice(2);
let num = argsInput.map(each => Number(each));

for (let i = 0; i < argsInput.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, argsInput[i]*1000)
}

