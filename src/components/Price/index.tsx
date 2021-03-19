import React, { useEffect, useState } from 'react';

// TODO inline styles, for example emotion css
import './styles.css';
import { mugglePayClient } from '../../apis/mugglepay-client';
import { Logger } from '../../tools/log';
import { useInterval } from '../../hooks/use-interval';
import { AppConfig } from '../../config';

export const UsdtPrice: React.FunctionComponent = () => {
    const [price, setPrice] = useState<string>();
    
    const fetchData =  () => {
        mugglePayClient.get_usdt_price().then((r) => {
            Logger.info(JSON.stringify(r));
            if(r.isRight()){
                setPrice(r.unsafeCoerce().price);
            }else{
                Logger.error(r.toString(), "usdtPrice");
            }
        });
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    useInterval(fetchData, AppConfig.schedulePeriod);
    
    if(price == null) return <div>loading...</div>;
    
    return (
        <div className="priceBox">
            <div className="priceTitle">
                1 USDT is roughly
            </div>
            <div>
                <span className="priceContent">
                    {price}
                </span>
                <span className={"priceUnit"}>
                    CNY
                </span>
            </div>
        </div>
    );
};

