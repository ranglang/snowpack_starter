import type { Codec, Either } from 'purify-ts';

// TODO headers, auth...
export async function request<T>(url: string, baseUrl: string, method: 'get' | 'post'): Promise<T> {
    const fullUrl = `${baseUrl}${url}`;
    if (method === 'post') {
        // FIXME implement request post
        throw new Error(`method ${method} should be implemented `);
    }
    return fetch(fullUrl).then(resp => {
        if (resp.status !== 200) {
            throw new Error('Error');
        } else {
            return resp.json();
        }
    });
}


// TODO add retry and timeout strategy
export async function safeRequest<T>(url: string, baseUrl: string, method: 'get' | 'post', t: Codec<T>): Promise<Either<string, T>> {
    const response = await request(url, baseUrl, method);
    return t.decode(response);
}
