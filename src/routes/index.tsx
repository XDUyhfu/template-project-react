import App from '@/App.tsx';
import { ErrorPage } from '@/pages/error';
import type { ReRoute } from '@/routes/interface';

export const routes: ReRoute[] = [
    {
        path: '/123',
        element: <App />,
        label: 'App'
    },
    {
        path: '404',
        label: 'ErrorPage',
        element: null,
        children: [
            {
                path: '/123',
                element: <ErrorPage />,
                label: 'App'
            },
            {
                path: '/23',
                label: 'App',
                children: [
                    {
                        path: '/1123',
                        element: <App />,
                        label: 'App'
                    }
                ]
            }
        ]
    }
];
