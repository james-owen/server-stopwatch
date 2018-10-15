bb.generate({

  "data": {
      "x": "time",
      "columns": [
          ["/register", 45, 300, 27, 750, 325, 100],
          ["/login", 30, 200, 300, 250, 500, 300],
          ["time", "2018-10-13T20:40:10", "2018-10-13T20:41:10", "2018-10-13T20:42:10", "2018-10-13T20:43:10", "2018-10-13T20:44:10", "2018-10-13T20:45:09"]
      ],
      "xFormat": "%Y-%m-%dT%H:%M:%S"
  },
  "axis": {
      "x": {
          "localtime": true,
          "type": "timeseries",
          "show": true,
          "tick": {
              "fit": true,
              "outer": true,
              "centered": true,
              "multiline": true
          }
      },
      "rotated": false
  },
  "legend": {
      "position": "inset",
      "inset": {
          "x": 14
      }
  },
  "x": {
      "show": true
  },
  "zoom": {
      "rescale": true,
      "enabled": true
  },
  "svg": {
      "classname": "lineChart"
  },
  "title": {
      "text": "Duration Graph"
  }
})