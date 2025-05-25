/*
 * @Version: v1.0.0
 * @Description: 一往无前 致力完美
 * @Author: jianshi3
 * @Date: 2022-11-01 14:35:10
 * @LastEditTime: 2022-11-03 13:45:37
 */
module.exports = {
  config: [{
    key: 3,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 12, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 12, offsetY: 0, labelOffsetX: 12, labelOffsetY: 0 },
      { alignX: 'right', offsetX: -12, offsetY: 0, labelOffsetX: -12, labelOffsetY: 0 }
    ]
  }, {
    key: 4,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 12, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 12, offsetY: 0, labelOffsetX: 12, labelOffsetY: 0 },
      { alignX: 'center', offsetX: 0, offsetY: 25, labelOffsetX: 12, labelOffsetY: 25 },
      { alignX: 'right', offsetX: -12, offsetY: 0, labelOffsetX: -12, labelOffsetY: 0 }
    ]
  }, {
    key: 5,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 15, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 12, offsetY: -8, labelOffsetX: 12, labelOffsetY: -8 },
      { alignX: 'left', offsetX: 5, offsetY: 20, labelOffsetX: 5, labelOffsetY: 20 },
      { alignX: 'right', offsetX: -5, offsetY: 20, labelOffsetX: -5, labelOffsetY: 20 },
      { alignX: 'right', offsetX: -12, offsetY: -8, labelOffsetX: -12, labelOffsetY: -8 }
    ]
  }, {
    key: 6,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 13, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 12, offsetY: -15, labelOffsetX: 12, labelOffsetY: -15 },
      { alignX: 'left', offsetX: 12, offsetY: 15, labelOffsetX: 12, labelOffsetY: 15 },
      { alignX: 'center', offsetX: 0, offsetY: 25, labelOffsetX: 13, labelOffsetY: 25 },
      { alignX: 'right', offsetX: -12, offsetY: 15, labelOffsetX: -12, labelOffsetY: 15 },
      { alignX: 'right', offsetX: -12, offsetY: -15, labelOffsetX: -12, labelOffsetY: -15 }
    ]
  },
  {
    key: 7,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 13, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 12, offsetY: -15, labelOffsetX: 12, labelOffsetY: -15 },
      { alignX: 'left', offsetX: 15, offsetY: 8, labelOffsetX: 15, labelOffsetY: 8 },
      { alignX: 'left', offsetX: 0, offsetY: 25, labelOffsetX: 0, labelOffsetY: 25 },
      { alignX: 'right', offsetX: 0, offsetY: 25, labelOffsetX: 0, labelOffsetY: 25 },
      { alignX: 'right', offsetX: -15, offsetY: 8, labelOffsetX: -15, labelOffsetY: 8 },
      { alignX: 'right', offsetX: -12, offsetY: -15, labelOffsetX: -12, labelOffsetY: -15 }
    ]
  },
  {
    key: 8,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 13, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 12, offsetY: -15, labelOffsetX: 12, labelOffsetY: -15 },
      { alignX: 'left', offsetX: 15, offsetY: 0, labelOffsetX: 15, labelOffsetY: 0 },
      { alignX: 'left', offsetX: 8, offsetY: 25, labelOffsetX: 8, labelOffsetY: 25 },
      { alignX: 'center', offsetX: 0, offsetY: 25, labelOffsetX: 13, labelOffsetY: 25 },
      { alignX: 'right', offsetX: -8, offsetY: 25, labelOffsetX: -8, labelOffsetY: 25 },
      { alignX: 'right', offsetX: -15, offsetY: 0, labelOffsetX: -15, labelOffsetY: 0 },
      { alignX: 'right', offsetX: -12, offsetY: -15, labelOffsetX: -12, labelOffsetY: -15 }
    ]
  },
  {
    key: 9,
    value: [
      { alignX: 'center', offsetX: 0, offsetY: -25, labelOffsetX: 13, labelOffsetY: -25 },
      { alignX: 'left', offsetX: 10, offsetY: -15, labelOffsetX: 10, labelOffsetY: -15 },
      { alignX: 'left', offsetX: 12, offsetY: -6, labelOffsetX: 12, labelOffsetY: -6 },
      { alignX: 'left', offsetX: 12, offsetY: 12, labelOffsetX: 12, labelOffsetY: 12 },
      { alignX: 'left', offsetX: 4, offsetY: 23, labelOffsetX: 4, labelOffsetY: 23 },
      { alignX: 'right', offsetX: -4, offsetY: 23, labelOffsetX: -4, labelOffsetY: 23 },
      { alignX: 'right', offsetX: -12, offsetY: 12, labelOffsetX: -12, labelOffsetY: 12 },
      { alignX: 'right', offsetX: -12, offsetY: -6, labelOffsetX: -12, labelOffsetY: -6 },
      { alignX: 'right', offsetX: -10, offsetY: -15, labelOffsetX: -10, labelOffsetY: -15 }
    ]
  }
  ],
  getConfigByKey: function (key) {
    if (key) {
      for (var i = 0; i < this.config.length; i++) {
        if (this.config[i].key === key) {
          return this.config[i].value;
        }
      }
    }
  }
}



// WEBPACK FOOTER //
// ./src/components/report-detail/components/subject-analysis/config.js