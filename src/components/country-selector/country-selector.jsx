import classNames from 'classnames';
import React, { memo, useMemo, useCallback } from 'react';

import { PRIMARY_MARKETS, ORDERED_MARKETS, GLOBAL } from '_/utils/markets';
import Select from '../select';

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

const countryOptions = [
    { value: GLOBAL, label: '🌏 Global' },
    ...ORDERED_MARKETS.map((countryCode) => ({
        value: countryCode,
        label: `${getFlagEmoji(countryCode)} ${
            PRIMARY_MARKETS[countryCode].label
        }`,
    })),
];

const CountrySelector = ({ setCountry, country, className }) => {
    const value = useMemo(
        () => countryOptions.find(({ value }) => value === country),
        [country]
    );

    const onChange = useCallback(
        ({ value }) => setCountry(value),
        [setCountry]
    );

    return (
        <Select
            options={countryOptions}
            value={value}
            onChange={onChange}
            className={classNames('country-selector', className)}
        />
    );
};

export default memo(CountrySelector);
