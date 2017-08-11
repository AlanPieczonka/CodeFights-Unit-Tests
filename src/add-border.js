const BorderStyle = '*';

export default function(words) {
  if (_isInputInValid(words)) {
    return [];
  }

  let bordersWidth = 2
  let wordWidth = words[0].length

  let bar = _bar(wordWidth + bordersWidth)

  let picture = [];

  picture.push(bar);
  words.forEach(word => picture.push(_wrap(word)));
  picture.push(bar);

  return picture;
}

const _isInputInValid = function(input) {
  return !Array.isArray(input) || input.length == 0
}

const _bar = function(length) {
  let bar = ''
  for (let i = 0; i < length; i++) {
    bar += BorderStyle;
  }
  return bar;
}

const _wrap = function(word) { 
  return BorderStyle + word + BorderStyle;
}
