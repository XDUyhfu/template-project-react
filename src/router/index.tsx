import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import { ErrorPage } from '@/pages/error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    }
]);
