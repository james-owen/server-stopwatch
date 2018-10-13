const d3 = require('d3');

const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0]);
  performance.clearMarks();
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('A');
function doSomeLongRunningProcess() {
  performance.mark('B');
  performance.measure(performance.now(), 'A', 'B');
};

doSomeLongRunningProcess();

const data = [
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 },
  { "route": "/registered", "startTime": 113759509.926442, "duration": 1.14386 }
]
console.log("Parsed date", new Date(performance.now() + performance.timeOrigin));
// console.log("Date: ", Date.now());
// console.log("Perf: ", performance.now());
// console.log("perf origin: ", performance.timeOrigin);

// console.log("Process: ", process.hrtime());
// console.log("Perf.now + perf.timeOrigin?", data[0].startTime);
// console.log("performance.now + origin", performance.now() + performance.timeOrigin);

// start graph at performance.now();

// plot points at X(startTime), Y(duration)