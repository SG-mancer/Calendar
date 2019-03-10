var fs = require("fs");


var data = "new stuff";
fs.writeFile("temp.txt", data, function(err, data) {
  if(err) console.log(err);
  console.log("Successfully writeen to file");
});

fs.readFile("temp.txt", "utf-8", function(err, buf) {
  console.log(buf.toString());
});
