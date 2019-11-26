let args = process.argv.slice(2);

oldPass = args.join();

const obfuscate = (input) => {
  let newPass = '';
  for (let i = 0; i < oldPass.length; i++) {
  if (oldPass[i] === "a"){
      newPass += "4";
    } else if (oldPass[i] === "e") { 
      newPass += "3";
    } else if (oldPass[i] === "i") { 
      newPass += "1";
    } else if (oldPass[i] === "o") { 
      newPass += "0";
    } else { 
      newPass += oldPass[i];
    }
  }
 return newPass;
};

console.log(obfuscate(args));