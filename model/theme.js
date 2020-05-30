/**
 *theme,banner.spu,sku,address,user
 */
import { config } from '../config/config';
import { Http } from '../utils/http';

class Theme {
  static getHomeLocationA(callback) {
    Http.request({
      url: 'theme/by/names',
      data: {
        names: 't-1',
      },
      callback: (data) => {
        callback(data);
      },
    });
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
}

export { Theme };
