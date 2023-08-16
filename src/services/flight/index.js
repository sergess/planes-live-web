import { request_uri } from '@/constants/index';
import { ApiV212 } from '@/services/api-v2.12';

export class Flight extends ApiV212 {
  async querySearch(query) {
    const { ok, data } = await this.callAsync(`${request_uri}search`, {
      method: 'POST',
      body: JSON.stringify({
        query,
      }),
    });

    if (!ok) {
      return null;
    }

    return data;
  }

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

export default Flight;
