import { ApiV212 } from '@/services/api-v2.12';
import { request_uri } from '@/constants/index';

export class Airport extends ApiV212 {
  async getAirport(code) {
    const { ok, data: response } = await this.callAsync(`${request_uri}airport/${code}`);

    const { data } = response;

    if (!ok || !data) {
      return null;
    }

    return data;
  }

  async getAirportFlightsByQuery(code, query) {
    const { ok, data: response } = await this.callAsync(`${request_uri}airport/${code}/${query}`);

    const { data } = response;

    if (!ok || !data) {
      return null;
    }

    return data;
  }
}

export default Airport;
