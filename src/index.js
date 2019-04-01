import "./styles.css";
var _ = require("lodash");
let a = [[{ a: 12 }, { a: 32 }, { a: 89 }], { b: 56 }, { c: 90 }];
let c = [3, 5, 7];
let fl = _.flattenDeep(a);

//fl = [...a[0], ...c];
console.log("FL", fl);

let fa = a.map(s => s);
//console.log(fa)
const man = ["a", "a", "b", "c", "a"];

let myData = [];

man.forEach((ma, i) => {
  let fafa = fl.find((obj, ind) => {
    if (Object.keys(obj) == ma) {
      _.pullAt(fl, ind);
      //let a = fl.splice(ind,1)
    }
    return Object.keys(obj) == ma;
  });

  myData = [...myData, fafa];
});
console.log("MYDATA", myData);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
`;
