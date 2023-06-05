var xlsx = require('xlsx');
var fs = require('fs');
var wb = xlsx.readFileSync('./marksheet.xlsx');
var ws = wb.Sheets['Sheet1'];
const data = xlsx.utils.sheet_to_json(ws);
console.log(data);
let newData = [];
newData = data.map((d) => {
    if (d.pass === 'TRUE') d.pass = true;
    if (d.pass === 'FALSE') d.pass = false;
    return d;
});
fs.writeFileSync('./datajson.json', JSON.stringify(newData));