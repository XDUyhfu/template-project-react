import App from '@/App.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '@/page/error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    }
]);
