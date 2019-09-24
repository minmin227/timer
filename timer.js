let argsInput = process.argv.slice(2);
let num = argsInput.map(each => Number(each));

for (let i = 0; i < num.length; i++) {
  if (num[i] > 0 && (typeof num[i]) === 'number'){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, argsInput[i]*1000);
  } else (
    null
  )
}