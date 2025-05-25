
const scoreLevelConvertMainItemValue = 10;

export class scoreLevelConvert {
  constructor (userLevelData, scoreLevelType) {
    this.wholeLevels = [];
    this.mainLevels = [];
    this.userLevelmap = {};
    this.offsetIdMap = {};
    this.mainItemValue = scoreLevelConvertMainItemValue;
    this.maxValue = 0;

    this.convertUserScoreLevel(userLevelData, scoreLevelType);
  }

  // 解析出等级数组和主等级数组， 以及等级对应图表横坐标的映射
  convertUserScoreLevel (userLevelData, scoreLevelType) {
    this.cleanDatas();
    const userLevelList = userLevelData.levelList;
    const userDataList = userLevelData.dataList;
    this.maxValue = this.mainItemValue * userLevelList.length;

    for (let i = 0; i < userLevelList.length; i++) {
      let mainItem = {};
      let levelItem = userLevelList[i];
      mainItem.name = levelItem.name;
      if (scoreLevelType && scoreLevelType === 'scoreValue') {
        // 所有等级总的跨度/(最大值-最小值)*100%
        // 最大值
        let maxNum = userLevelList[0].upperBound;
        // 最小值
        let minNum = userLevelList[userLevelList.length - 1].lowBound;
        // 各个等级跨度
        let levelNum = levelItem.upperBound - levelItem.lowBound;
        let progressNum = parseInt((levelNum/(maxNum - minNum)) * 100);
        mainItem.progress = progressNum;
      } else {
        mainItem.progress = levelItem.upperBound - levelItem.lowBound;
      }
      // 如果有子等级，解析子等级，否则使用zhude
      if (levelItem.childLevel && levelItem.childLevel.length > 0) {
        mainItem.level = this.convertChildLevelsAndGetMaxLevel(levelItem.childLevel, this.mainItemValue * i);
        mainItem.value = this.userLevelmap[mainItem.level];
      } else {
        this.wholeLevels.push(levelItem.name);
        mainItem.level = levelItem.name;
        mainItem.value = this.maxValue - this.mainItemValue * (i + 1);
        this.userLevelmap[levelItem.name] = mainItem.value;
      }

      this.mainLevels.push(mainItem);
    }
    // 计算每个真实offset
    userDataList.forEach(element => {
      const level = element.improveBar.levelScale;
      this.offsetIdMap[element.id] = Math.round(this.userLevelmap[level] + this.mainItemValue *
        element.improveBar.offset / 100);
    });
  }

  cleanDatas () {
    this.wholeLevels = [];
    this.mainLevels = [];
  }

  convertChildLevelsAndGetMaxLevel (childLevels, minValue) {
    if (!childLevels || childLevels.length === 0) {
      return null;
    }

    let valuePerItem = this.mainItemValue / childLevels.length;
    for (let i = 0; i < childLevels.length; i++) {
      this.wholeLevels.push(childLevels[i].name);
      if (i < childLevels.length - 1) {
        this.userLevelmap[childLevels[i].name] = this.maxValue - minValue - valuePerItem * (i + 1);
      } else {
        this.userLevelmap[childLevels[i].name] = this.maxValue - minValue - this.mainItemValue;
      }
    }
    return this.wholeLevels[this.wholeLevels.length - 1];
  }
}



// WEBPACK FOOTER //
// ./src/components/report-detail/components/score-level-convert/scoreLevelConvert.js