import { mugglePayClient} from './mugglepay-client';

test('get usdt return price', () => {
    return mugglePayClient.get_usdt_price().then(result => {
        expect(result.isRight()).toBeTruthy();
    });
});