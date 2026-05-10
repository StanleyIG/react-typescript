import { useEffect, useRef } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../components/ProductCard/ProductCard.props';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
	const searchRef = useRef<HTMLInputElement>(null);
	// Фокус при монтировании
	useEffect(() => {
		searchRef.current?.focus();
	}, []);
	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder="Введите блюдо или состав" ref={searchRef} />
			</div>
			<div className={styles['wrapper']}>
				{/* <ProductCard
					id={1}
					title="Наслаждение"
					description="Салями, руккола, помидоры, оливки"
					rating={4.5}
					price={300}
					image="/product-demo.png"
				/> */}

				{products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</>
	);
}
