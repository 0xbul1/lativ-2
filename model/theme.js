/**
 *theme,banner.spu,sku,address,user
 */
import { config } from '../config/config';
import { Http } from '../utils/http';

class Theme {
  static locationA = 't-1';
  static async getHomeLocationA(callback) {
    const data = await Http.request({
      url: 'theme/by/names',
      data: {
        names: Theme.locationA,
      },
      // callback: (data) => {
      //   callback(data);
      // },
    });
    return data;
    // wx.request({
    //   url: `${config.apiBaseUrl}theme/by/names`,
    //   data: {
    //     names: 't-1',
    //   },
    //   header: { appKey: `${config.appKey}` },
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (res) => {
    //     callback(res.data);
    //     // this.setData({
    //     //   topTheme: res.data[0],
    //     // });
    //   },
    //   fail: () => {},
    //   complete: () => {},
    // });
  }
  static locationE = 't-2';
  static locationF = 't-3';
  static locationH = 't-4';
  static async getHomeLocationE() {
    return await Http.request({
      url: 'theme/by/names',
      data: {
        names: Theme.locationE,
      },
    });
  }
  static async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH},`;
    return await Http.request({
      url: 'theme/by/names',
      data: {
        names,
      },
    });
  }
}

export { Theme };
