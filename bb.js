bb.generate({

  "data": {
      "x": "time",
      "columns": [
          ["/login", 30, 200, 100, 400, 500],
          ["time", "2018-10-13T20:40:10", "2018-10-13T20:41:10", "2018-10-13T20:42:10", "2018-10-13T20:43:10", "2018-10-13T20:44:10"]
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