var fs = require('fs');
var xlsx = require('xlsx');
var content = JSON.parse(fs.readFileSync('datajson.json', 'utf-8'));
var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(content)
xlsx.utils.book_append_sheet(newWB, newWS, 'new data');
xlsx.writeFile(newWB, 'marksheet1.xlsx');