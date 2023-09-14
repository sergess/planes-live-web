import { getHeaders } from '@/utils/api';
import { requestJson } from '@/utils/requestJson';

import { request_uri } from '@/constants/index';

export class ApiV212 {
  baseUrl = process.env.API_BASE_URL;

  async callAsync(
    uri,
    init,
  ) {
    const response = await requestJson(`${this.baseUrl}${uri}`, {
      ...init,
      headers: {
        ...getHeaders(uri),
      },
    });

    return response;
  }

  async querySearch(query) {
    const { ok, data } = await this.callAsync(`${request_uri}search`, {
      method: 'POST',
      cache: 'no-store',
      body: JSON.stringify({
        query,
      }),
    });

    if (!ok) {
      return null;
    }

    return data;
  }
}

export default ApiV212;
