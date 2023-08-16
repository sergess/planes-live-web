import isResponseOk from "@/utils/isResponseOk";

export const requestJson = async (
    url,
    init
) => {
    try {
        const response = await fetch(url, {
            ...init,
            headers: {
                ...init?.headers,
                Accept: 'application/json',
            },
        });

        const body = await response.json();
        const ok = isResponseOk(body);

        if (!ok) {
            console.error('[requestJson]: response is not ok', {
                ok,
                url,
                init,
                body,
            });
        }

        return {
            ok,
            data: ok ? (body) : null,
    };
    } catch (err) {
        console.error('[requestJson]: ', err);

        return { ok: false, data: null };
    }
};

export default requestJson;