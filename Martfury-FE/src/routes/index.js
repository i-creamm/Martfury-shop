import PrivateRouter from "../Components/PrivateRouter/PrivateRouter";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error.jsx"
import AdminLayout from "../layouts/AdminLayout.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import ProductList from "../pages/admin/ProductList.jsx";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                element: <PrivateRouter/>,
                children: [
                    
                ]
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    },
    {
        path:'admin',
        element: <AdminLayout />,
        children: [
            {
                path:'',
                element: <Dashboard />
            },
            {
                path:'products',
                element: <ProductList />
            }
        ]
    }
]