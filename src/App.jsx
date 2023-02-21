import React from 'react';
import { useRoutes, Redirect } from 'raviger';
import { QueryClient, QueryClientProvider } from 'react-query';

import StocksRoute from '_/routes/stocks';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
});

function App() {
    const route = useRoutes({
        '/': () => <Redirect to="/stocks" />,
        '/stocks*': () => <StocksRoute basePath="/stocks" />,
    });

    return (
        <QueryClientProvider client={queryClient}>{route}</QueryClientProvider>
    );
}

export default App;
