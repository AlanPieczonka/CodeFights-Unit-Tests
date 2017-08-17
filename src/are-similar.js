//Note:
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
export default function(inputArray1, inputArray2) {
  if (_isInputInValid(inputArray1, inputArray2)) {
    return false;
  }
  if (_areArraysEqual(inputArray1, inputArray2)) {
    return true;
  }

  let tempArray1 = [],
      tempArray2 = [];

  for (let i = 0; i < inputArray1.length; i++) {
    _pushUnequalElementsToTempArrays(i, inputArray1, inputArray2, tempArray1, tempArray2);
  }

  _reverseArray(tempArray1);

  if (
    _haveProperLength(tempArray1, tempArray2, 2) &&
    _areArraysEqual(tempArray1, tempArray2)
  ) return true;

  return false;
}

const _isInputInValid = function(input) {
  return !Array.isArray(input) || input.length === 0;
};

const _areArraysEqual = function(arr1, arr2) {
  if (arr1.toString() == arr2.toString()) return true;
  return false;
};

const _pushUnequalElementsToTempArrays = function(index, arr1, arr2, temp1, temp2) {
  if (arr1[index] != arr2[index]) {
    temp1.push(arr1[index]);
    temp2.push(arr2[index]);
  }
};
const _reverseArray = function(arr) {
  return arr.reverse();
};
const _haveProperLength = function(arr1, arr2, properLength) {
  if (arr1.length == properLength && arr2.length == properLength) return true;
  return false;
};




