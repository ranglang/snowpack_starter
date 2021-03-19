import { Either, Right } from 'purify-ts/Either';
import type { UsdtPrice } from '../interfaces/usdt-price';
import { safeRequest } from './request';
import { UsdtDefinition } from '../interfaces/usdt-price';

export class MugglePayClient {
    private api: string;

    constructor(api="https://api.mugglepay.com") {
        this.api = api;
    }

    async get_usdt_price(): Promise<Either<string, UsdtPrice>> {
        return await safeRequest("/api/usdt", this.api, 'get', UsdtDefinition);
    }

    // FIXME add api for btc price
    async get_btc_price(): Promise<Either<string, UsdtPrice>> {
        return new Promise(resolve=> resolve(Right({
            price: "6.56"
        })));
    }
}

export const mugglePayClient = new  MugglePayClient;
