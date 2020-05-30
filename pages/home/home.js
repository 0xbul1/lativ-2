// pages/home/home.js
import { config } from '../../config/config';
import { Theme } from '../../model/theme';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topTheme: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const data = await Theme
      .getHomeLocationA
      //   (data) => {
      //   this.setData({
      //     topTheme: data[0],
      //   });
      // }
      ();
    this.setData({
      topTheme: data[0],
    });
  },
});
