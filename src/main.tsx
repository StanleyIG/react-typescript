import axios from 'axios';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // убрали defer
import { PREFIX } from './helpers/API.ts';
import './index.css';
import { AuthLayout } from './layout/Auth/AuthLayout.tsx';
import { Layout } from './layout/Menu/Layout.tsx';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error as ErrorPage } from './pages/Error/Error.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Product } from './pages/Product/Product.tsx';
import { Register } from './pages/Register/Register.tsx';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<Menu />
					</Suspense>
				)
			},
			{
				path: '/cart',
				element: <Cart />
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				// loader: ({ params }) => {
				// 	// В RRv7 возвращаем объект с промисом напрямую, без defer()
				// 	return {
				// 		data: new Promise((resolve, reject) => {
				// 			setTimeout(() => {
				// 				axios.get(`${PREFIX}/products/${params.id}`)
				// 					.then(res => resolve(res.data))
				// 					.catch(reject);
				// 			}, 2000);
				// 		})
				// 	};
				// }

				loader: ({ params }) => {
					// В RRv7 возвращаем объект с промисом напрямую, без defer()
					return {
						data: new Promise((resolve, reject) => {
							axios
								.get(`${PREFIX}/products/${params.id}`)
								.then((res) => resolve(res.data))
								.catch(reject);
						})
					};
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
