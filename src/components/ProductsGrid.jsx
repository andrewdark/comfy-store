import { MdDescription } from 'react-icons/md';
import { useLoaderData, Link } from 'react-router-dom';

const ProductsGrid = () => {
    const { products } = useLoaderData();
    console.log(products);

    return (
        <div className='pt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {products.map(el => {
                const { title, description } = el.attributes;
                return <div key={el.id}>

                    <h4>{title}</h4><p>{description}</p>
                </div>
            })}
        </div>


    );
};

export default ProductsGrid;