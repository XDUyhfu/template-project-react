import App from '@/App.tsx';
import { ErrorPage } from '@/pages/error';
import type { ReRouter } from '@/routes/interface';

export const routes: ReRouter[] = [
    {
        path: '/',
        element: <App />,
        key: '/',
        label: '123',
        children: [
            {
                path: '123',
                element: <App />,
                key: '123',
                label: '123'
            },
            {
                path: '404',
                element: <ErrorPage />,
                key: '404',
                label: '1234'
            }
        ]
    }
];
