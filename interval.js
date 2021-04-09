const columns = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B','B#','Cb','C'];
const intervals = {m2:2, M2:3, m3:3, M3:4, P4:7, P5:13, m6:8, M6:9, m7:10, M7:18, P8:20}
const nup = ['asc', 'dsc'];
function intervalConstruction(arr){
const interval = arr[0];
const column = arr[1];
const rightDirection = arr[2] === 'asc';
const columnIndex = columns.indexOf(column);

if (rightDirection) {
return columns[columnIndex + intervals[interval]];
}
else {
return columns[columnIndex - intervals[interval]];
}
}

console.log('result', intervalConstruction(['P4', 'G#', 'dsc']));


getKeyByValue = (obj, value) => {
let key;
for (let prop in obj) {
if (obj.hasOwnProperty(prop) && obj[prop] === value) {
key = prop;
}
}
return key;
}

intervalIdentification = (arr) => {
const firstColumnIndex = columns.indexOf(arr[0]);
const secondColumnIndex = columns.indexOf(arr[1]);
const rightDirection = arr[2] !== 'dsc';
const interval = rightDirection ? secondColumnIndex - firstColumnIndex : firstColumnIndex - secondColumnIndex;
return getKeyByValue(intervals, interval);
}
     console.log ('result', intervalIdentification(['G#', 'D#', 'dsc']))
