import { ApiV212 } from '@/services/api-v2.12';
import { request_uri } from '@/constants/index';
import {
  writeJSON, readJSON,
} from '@/utils/writeFile';

export class Flight extends ApiV212 {
  async getFlightInfo(code) {
    // TODO add type iata/icao as variable
    const { ok, data: response } = await this.callAsync(`${request_uri}position/nearest/iata/${code}`);

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
    const currentData = readJSON();
    const query = currentData ? `?${new URLSearchParams({
      tag: currentData.tag,
    })}` : '';
    const { ok, data: response, status } = await this.callAsync(`${request_uri}data${query}`, null);

    if (status === 304 || !response) {
      return currentData;
    }

    const { data } = response;
    if (!ok || !data) {
      return null;
    }

    writeJSON(data);

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

  async getFlightById(flightId) {
    const { ok, data: response } = await this.callAsync(`${request_uri}position/${flightId}`);

    if (!ok || !response) {
      return null;
    }

    const { data } = response;

    return data;
  }
}

export default Flight;
