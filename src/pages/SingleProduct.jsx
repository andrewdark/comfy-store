import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../http';
import { formatPrice } from '../utils'

export const loader = async ({ params }) => {
    const { id } = params;

    // 1. Перевіряємо чи існує id
    // 2. Перевіряємо чи є воно числом (перетворюємо і дивимось, чи не NaN)
    const numericId = Number(id);

    if (!id || Number.isNaN(numericId)) {
        // Викидаємо помилку, яку підхопить ваш errorElement
        console.log("Некоректний ID продукту", { status: 400 });
        throw new Response("Некоректний ID продукту", { status: 400 });
    }

    const response = await customFetch.get(`/products/${params.id}`);
    return { product: response.data.data };
}

const SingleProduct = () => {
    const { product } = useLoaderData();
    const { image, title, price, description, colors, company } = product.attributes;
    const dlrPrice = formatPrice(price);

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SingleProduct;