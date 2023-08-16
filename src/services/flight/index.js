import ApiV212 from "../api-v2.12";

import { request_uri } from "@/constants/index";

export class Flight extends ApiV212 {
    async querySearch(query) {
        const { ok, data } = await this.callAsync(
            `${request_uri}search`,{
                method: 'POST',
                body: JSON.stringify({
                    query: query,
                }),
            }
        );

        if (!ok) {
            return null;
        }

        return data
    }
}

export default Flight;