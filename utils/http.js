import { config } from '../config/config';
class Http {
  static request({ url, data, method = 'GET', callback }) {
    wx.request({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header: { appKey: `${config.appKey}` },
      // dataType: 'json',
      // responseType: 'text',
      success: (res) => {
        callback(res.data);
      },
      fail: () => {},
      complete: () => {},
    });
  }
}
export { Http };
