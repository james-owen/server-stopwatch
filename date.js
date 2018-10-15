console.log(new Date(355390.097152 + 1539464112567.39));

const arrObj = [{duration: 0.100873, route: "/yes", startTime: 355390.097152, timeOrigin: 1539464112567.39}]

const X = [];
X.push(arrObj[0].route);

arrObj.forEach(el => {
  X.push(el.startTime + el.timeOrigin);
})

console.log(X);

//setInterval(() => console.log(Date.now()), 2300);