import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Product as ProductType } from '../../interfaces/product.interface';

export function Product() {
	const { data } = useLoaderData() as { data: Promise<ProductType> };

	return (
		<Suspense fallback={'Загружаю...'}>
			<Await resolve={data}>
				{(product: ProductType) => ( // Await передаёт resolved-значение напрямую, не оборачивая
					<>Product - {product.name}</>
				)}
			</Await>
		</Suspense>
	);
}