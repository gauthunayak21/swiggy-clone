import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
// import RestaurantDetails from './components/RestaurantDetails';
import ErrorPage from './components/ErrorPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
window.React = React

// function Heading () {
//     return ( 
//         <p>Hello world!!!</p>
//     )
// }

const RestaurantDetails = lazy(() => import('./components/RestaurantDetails.js'))

const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header />
            {/* <Body /> */}
            <Outlet />
        </div>
        </Provider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/res/:resId',
                element: <Suspense fallback={<h1>Loading..!!!</h1>}><RestaurantDetails /></Suspense>
            }
        ],
        errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />)