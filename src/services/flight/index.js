import { ApiV212 } from '@/services/api-v2.12';
import { request_uri } from '@/constants/index';

export class Flight extends ApiV212 {
  async getFlightInfo(code) {
    const { ok, data: response } = await this.callAsync(`${request_uri}position/icao/${code}`);

    const { data } = response;

    if (!ok || !data) {
      return null;
    }

    return data;
  }

  async getCommonFlightData() {
    const { ok, data: response } = await this.callAsync(`${request_uri}data`);

    const { data } = response;

    if (!ok || !data) {
      return null;
    }

    return data;
  }
}

export default Flight;
