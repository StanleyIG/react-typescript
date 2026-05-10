export interface ProductCardProps {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
	rating: number;
}

export const products: ProductCardProps[] = [
	{
		id: 1,
		title: 'Наслаждение',
		description: 'Салями, руккола, помидоры, оливки',
		price: 300,
		rating: 4.5,
		image: '/product-demo.png'
	},
	{
		id: 2,
		title: 'Маргарита',
		description: 'Сыр моцарелла, томаты, базилик',
		price: 250,
		rating: 4.8,
		image: '/product-demo.png'
	},
	{
		id: 3,
		title: 'Пепперони',
		description: 'Колбаски пепперони, сыр, соус',
		price: 350,
		rating: 4.2,
		image: '/product-demo.png'
	},
	{
		id: 4,
		title: 'Гавайская',
		description: 'Курица, ананасы, сыр',
		price: 400,
		rating: 3.9,
		image: '/product-demo.png'
	}
];