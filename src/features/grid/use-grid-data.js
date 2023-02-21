import { useInfiniteQuery } from 'react-query';
import { GLOBAL } from '_/utils/markets';

const GRID_URL =
    'https://api.simplywall.st/api/grid/filter?include=info,score,grid';

const DEFAULT_PAGE_SIZE = 24;

//Give a named variable to return from getNextPageParam
//when all records have been fetched
const NO_MORE_RECORDS = undefined;

const fetchGridData = ({ pageParam = 0, queryKey }) => {
    const [_key, { pageSize, sortDirection, country }] = queryKey;

    const rules = [
        ['order_by', 'market_cap', sortDirection],
        ['primary_flag', '=', true],
        ['grid_visible_flag', '=', true],
        ['market_cap', 'is_not_null'],
        ['is_fund', '=', false],
    ];

    if (country !== GLOBAL) {
        rules.push(['aor', [['country_name', 'in', [country]]]]);
    }

    const body = {
        id: 1,
        no_result_if_limit: false,
        offset: pageParam * pageSize,
        size: pageSize,
        state: 'read',
        rules,
    };

    return fetch(GRID_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then((response) => {
        if (!response.ok) {
            return response.json().then((json) => {
                throw new Error(json?.errors?.[0]?.detail);
            });
        }
        return response.json();
    });
};

export const useGridData = ({
    pageSize = DEFAULT_PAGE_SIZE,
    sortDirection,
    country,
} = {}) => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['grid-data', { pageSize, sortDirection, country }],
        queryFn: fetchGridData,
        getNextPageParam: (lastPage, pages) => {
            const { total_records } = lastPage.meta;

            if (pages.length * pageSize >= total_records) {
                return NO_MORE_RECORDS;
            }

            return pages.length;
        },
        retry: 1,
    });

    return {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetchingNextPage,
        status,
    };
};
