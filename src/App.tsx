import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import RootLayout from '@/page-structure/layouts/RootLayout';
import AuthLayout from '@/page-structure/layouts/AuthLayout';
import { LoginCallback } from '@okta/okta-react';
import { Dashboard } from '@/pages/dashboard/Dashboard';
import { NotFound } from '@/pages/NotFound';
import { Faqs } from '@/pages/Faqs';
import Logout from '@/components/authentication/Logout';
import { LandingPage } from '@/pages/LandingPage';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: (
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <ErrorPage />
            </div>
        ),
        children: [
            { path: 'login/callback', element: <LoginCallback /> },
            { path: 'logout', element: <Logout /> },
            {
                path: 'landing-page',
                element: <LandingPage />
            },
            {
                path: '',
                element: <AuthLayout />,
                children: [
                    { index: true, element: <Navigate to='/dashboard' /> },
                    {
                        path: 'dashboard',
                        element: <Dashboard />
                    },
                    {
                        path: 'support',
                        children: [
                            {
                                index: true,
                                element: <></>
                            },
                            {
                                path: 'faqs',
                                element: <Faqs />
                            }
                        ]
                    },
                    { path: '*', element: <NotFound /> }
                ]
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
