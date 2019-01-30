function rot13(str) { // LBH QVQ VG!
  const rotated = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  const original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var decoded = ''
  let rgx = /[a-zA-Z]/;  

  for(let i = 0; i < str.length; i++){     
     if(str[i].search(rgx) === -1){ // non alphabet
        decoded += str[i];
     }
     else{//must be a  letter
        const rotindex = rotated.search(str[i])
        decoded += original[rotindex];
     }
  }  
  
  return decoded;
  
}
