var columns = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B','B#','Cb','C'];
var intervals = {m2:2, M2:3, m3:3, M3:4, P4:7, P5:13, m6:8, M6:9, m7:10, M7:18, P8:20}
var nup = ['asc', 'dsc'];
console.log(intervalConstruction("m2","C","asc"));

function intervalConstruction( interval, column, nup ){
var columnIndex = columns.indexOf(column);
    var intervalValue = intervals[interval];
   if( nup === "asc" )
   {
    var calculatedIndex = columnIndex + intervalValue;
   }
   if( nup === "dsc" )
   {
   	 var calculatedIndex = columnIndex - intervalValue;
   }
   else 
   	{
   		var calculatedIndex = columnIndex + intervalValue 
   	}
return columns[calculatedIndex % columns.length];
}
var arr = intervalIdentification ('C', 'Db');
function  intervalIdentification ( column1, column2 )  {
	var columnIndex1 = columns.indexOf(column1);
    var columnIndex2 = columns.indexOf(column2);
    var intervalIdenf = columnIndex2 - columnIndex1;
   
    return intervalIdenf;
}
function getKeyByValue(intervalIdenf, value) {
            for (var prop in intervalIdenf) {
                if (intervalIdenf.hasOwnProperty(prop)) {
                    if (intervalIdenf[prop] === value)
                    return prop;
                }
            }
      }
        ans = getKeyByValue(intervals, arr);
        console.log(ans);