// pages/home/home.js
import { config } from '../../config/config';
import { Theme } from '../../model/theme';
import { Banner } from '../../model/banner';
import { Category } from '../../model/category';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    bannerB: null,
    grid: [],
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
    const themeA = await Theme.getHomeLocationA();
    const bannerB = await Banner.getHomeLocationB();
    const grid = await Category.getGridCategory();
    this.setData({
      themeA: themeA[0],
      bannerB,
      grid,
    });
  },
});
