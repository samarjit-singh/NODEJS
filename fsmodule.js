const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  //this will run only after the file content is read and ready to  print
  console.log(err, data);
}); //works on non blocking io model

// const a = fs.readFileSync("file.txt");  //this code will run first
// console.log(a.toString());

// fs.writeFile("file2.txt", "This is a data", () => {
//   console.log("written to the file");
// });

b = fs.writeFileSync("file2.txt", "This is a data2");
console.log(b);

console.log("finished reading file"); //this will run first
