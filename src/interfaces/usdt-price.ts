import { Codec, GetType, string } from 'purify-ts/Codec';

export const UsdtDefinition = Codec.interface({
    price: string,
});

type UsdtPrice = GetType<typeof UsdtDefinition>

export {UsdtPrice};
