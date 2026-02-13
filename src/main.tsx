import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from '@/store/StoreProvider';

import initMocks from './mocks';
import { Toaster } from 'livingston-npm-components';

(async () => {
    await initMocks(); // See https://mswjs.io/docs/getting-started

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <StoreProvider>
                <App />
                <Toaster />
            </StoreProvider>
        </StrictMode>
    );
})();
