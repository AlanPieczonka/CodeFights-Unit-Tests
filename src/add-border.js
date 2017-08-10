export default function(picture) {
  if(!Array.isArray(picture)){
    return [];
  }

  if (typeof picture[0] === 'undefined' || picture[0] === null) {
    return picture;
  }
  let border = '';

  picture = picture.map(x => '*' + x + '*'); //add asterisk to the begining and ending of the string

  for (let i = 0; i < picture[0].length; i++) {
    border += '*';
  }

  picture.unshift(border); //add border of asterisks to the beggining of the array
  picture.push(border); //add border of asterisks to the end of the array

  return picture;
}
