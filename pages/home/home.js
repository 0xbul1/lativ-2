// pages/home/home.js
import { config } from '../../config/config';
import { Theme } from '../../model/theme';
import { Banner } from '../../model/banner';
import { Category } from '../../model/category';
import { Activity } from '../../model/activity';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    bannerB: null,
    grid: [],
    activityD: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const data = await Theme
    //   .getHomeLocationA
    //   //   (data) => {
    //   //   this.setData({
    //   //     topTheme: data[0],
    //   //   });
    //   // }
    //   ();
    // this.setData({
    //   topTheme: data[0],
    // });
    this.initAllData();
  },
  async initAllData() {
    const themes = await Theme.getThemes();
    const themeA = themes.find((t) => t.name === 't-1');
    const bannerB = await Banner.getHomeLocationB();
    const grid = await Category.getHomeLocationC();
    const activityD = await Activity.getHomeLocationD();
    this.setData({
      themeA,
      bannerB,
      grid,
      activityD,
    });
  },
});
