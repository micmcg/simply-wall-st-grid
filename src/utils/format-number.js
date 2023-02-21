export const Format = {
    PERCENT: 'percent',
    CURRENCY: 'currency',
    RATIO: 'ratio',
};

const AMBIGUOUS_CURRENCIES = ['$', '¥'];

export const formatNumber = (
    number,
    type,
    { currency, country, minimumFractionDigits, maximumFractionDigits } = {}
) => {
    if (number === null) {
        return null;
    }

    const locale = navigator.language;

    if (type === Format.RATIO) {
        return (
            number.toLocaleString(locale, {
                maximumFractionDigits: 1,
            }) + 'x'
        );
    }

    if (type === Format.PERCENT) {
        return number.toLocaleString(locale, {
            style: Format.PERCENT,
            maximumFractionDigits:
                maximumFractionDigits || (Math.abs(number) < 0.1 / 100 ? 2 : 1),
        });
    }

    if (type === Format.CURRENCY) {
        const currencySymbol = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            currencyDisplay: 'narrowSymbol',
        })
            .format(0)
            .charAt(0);

        return (
            (AMBIGUOUS_CURRENCIES.includes(currencySymbol) ? country : '') +
            number.toLocaleString(locale, {
                currency,
                currencyDisplay: 'narrowSymbol',
                style: Format.CURRENCY,
                notation: 'compact',
                minimumFractionDigits:
                    minimumFractionDigits || maximumFractionDigits || 2,
                maximumFractionDigits:
                    maximumFractionDigits || (number < 0.1 ? 3 : 2),
            })
        );
    }
};
