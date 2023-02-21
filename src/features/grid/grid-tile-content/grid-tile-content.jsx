import React, { memo } from 'react';
import { formatNumber, Format } from '_/utils/format-number';

import './grid-tile-content.css';

const N_A = <span className="n_a">n/a</span>;

const getReturnClass = (value) => {
    if (value > 0) {
        return 'positive';
    }

    if (value < 0) {
        return 'negative';
    }

    return '';
};

const GridTileContent = ({ company }) => {
    const {
        share_price,
        return_7d,
        return_1yr_abs,
        market_cap,
        pe,
        net_income_growth_annual,
        price_target,
        primary_industry,
    } = company.grid.data;

    const { country, currency } = company.info.data;

    return (
        <div className="grid-tile-content">
            <div className="grid-meta">
                <span className="stock-code">{company.ticker_symbol}</span>
                <span className="industry">{primary_industry.name}</span>
            </div>
            <h2>{company.name}</h2>
            <dl>
                <div className="item share-price">
                    <dt>Price</dt>
                    <dd>
                        {formatNumber(share_price, Format.CURRENCY, {
                            country,
                            currency,
                        }) || N_A}
                    </dd>
                </div>
                <div className="item seven-day">
                    <dt>7D</dt>
                    <dd className={getReturnClass(return_7d)}>
                        {formatNumber(return_7d, Format.PERCENT) || N_A}
                    </dd>
                </div>
                <div className="item one-year">
                    <dt>1Y</dt>
                    <dd className={getReturnClass(return_1yr_abs)}>
                        {formatNumber(return_1yr_abs, Format.PERCENT) || N_A}
                    </dd>
                </div>
                <div className="item market-cap">
                    <dt>Mkt Cap</dt>
                    <dd>
                        {formatNumber(market_cap, Format.CURRENCY, {
                            country,
                            currency,
                            maximumFractionDigits: 1,
                        }) || N_A}
                    </dd>
                </div>
                <div className="item price-earnings">
                    <dt>PE</dt>
                    <dd>{formatNumber(pe, Format.RATIO) || N_A}</dd>
                </div>
                <div className="item income-growth">
                    <dt>E.Growth</dt>
                    <dd>
                        {formatNumber(
                            net_income_growth_annual,
                            Format.PERCENT
                        ) || N_A}
                    </dd>
                </div>
                <div className="item analysts-target">
                    <dt>Analysts Target</dt>
                    <dd>
                        {formatNumber(price_target, Format.CURRENCY, {
                            country,
                            currency,
                        }) || N_A}
                    </dd>
                </div>
            </dl>
        </div>
    );
};

export default memo(GridTileContent);
