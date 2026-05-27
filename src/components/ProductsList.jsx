import { useLoaderData, Link } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
    const { products } = useLoaderData();

    return (
        <div className='pt-12 grid gap-y-8'>
            {products.map(product => {
                const { title, price, company, image } = product.attributes;
                const dlrPrice = formatPrice(price);

                return <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className='p-6 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
                >
                    <figure className='px-2'>
                        <img
                            src={image}
                            alt={title}
                            // className='rounded-xl h-64 md:h-48 w-full object-cover'
                            className='h-24 w-24 rounded-lg sm:h-32 sm:w-32object-cover group-hover:scale-105 transition duration-300'
                        />
                    </figure>
                    <div className='ml-0 sm:ml-16'>
                        <h3 className='capitalize font-medium text-lg'>{title}</h3>
                        <h4 className='capitalize text-md text-neutral-content'>
                            {company}
                        </h4>
                    </div>
                    <p className='font-medium ml-0 sm:ml-auto text-lg'>
                        {dlrPrice}
                    </p>

                </Link>
            })}
        </div>
    );
};

export default ProductsList;