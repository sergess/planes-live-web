import { getHeaders } from "@/utils/api";
import requestJson from "@/utils/requestJson";

import { BASE_API } from "@/constants/index";

export class ApiV212 {

    baseUrl = BASE_API;

    async callAsync(
        uri,
        init
) {
    const response = await requestJson(`${this.baseUrl}${uri}`, {
        ...init,
        headers: {
            ...getHeaders(uri),
        },
    });

    return response;
}
}

export default ApiV212;
