import { Link, useLoaderData } from 'react-router-dom';
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
        <section>
            <div className='text-md breadcrumbs'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            {/* PRODUCT */}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                <img
                    src={image}
                    alt={title}
                    className='w-96 h-96 object-cover rounded-lg lg:w-full'
                />
                {/* PRODUCT */}
                <div>
                    <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>
                        {company}
                    </h4>
                    <p className='mt-3 text-xl'>{dlrPrice}</p>
                    <p className='mt-8 leading-8'>{description}</p>
                </div>

            </div>
        </section>

    );
};

export default SingleProduct;