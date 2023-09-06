import { ApiV212 } from '@/services/api-v2.12';
import { request_uri } from '@/constants/index';

export class Flight extends ApiV212 {
  async getFlightInfo(code) {
    const { ok, data: response } = await this.callAsync(`${request_uri}position/nearest/icao/${code}`);

    if (!ok) {
      return null;
    }
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

  async getAvailableFlightDates(flight, month) {
    const { ok, data } = await this.callAsync(`${request_uri}search-dates`, {
      method: 'POST',
      body: JSON.stringify({
        flight, month,
      }),
    });

    if (!ok) {
      return null;
    }

    return data;
  }

  async getFlightDataById(flight, date) {
    const { ok, data } = await this.callAsync(`${request_uri}search`, {
      method: 'POST',
      body: JSON.stringify({
        flight, date,
      }),
    });

    if (!ok) {
      return null;
    }

    return data;
  }
}

export default Flight;
