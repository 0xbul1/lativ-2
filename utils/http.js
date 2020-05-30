import { config } from '../config/config';
import { promise } from '../utils/promise';
class Http {
  static async request({ url, data, method = 'GET' }) {
    // wx.request({
    //   url: `${config.apiBaseUrl}${url}`,
    //   data,
    //   method,
    //   header: { appKey: `${config.appKey}` },
    //   // dataType: 'json',
    //   // responseType: 'text',
    //   success: (res) => {
    //     callback(res.data);
    //   },
    //   fail: () => {},
    //   complete: () => {},
    // });
    const res = await promise(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header: { appKey: `${config.appKey}` },
    });
    return res.data;
  }
}
export { Http };
