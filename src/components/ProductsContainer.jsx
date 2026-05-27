
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { ProductsGrid, ProductsList } from './';

const ProductsContainer = ({ products }) => {
    const { meta } = useLoaderData();
    const [layout, setLayout] = useState('grid');

    return (
        <div>
            <h1>Products list</h1>
            <button className='btn' type='button' onClick={() => setLayout('list')}>List</button>
            <button className='btn' type='button' onClick={() => setLayout('grid')}>Grid</button>
            {layout === 'grid' ? <ProductsGrid /> : <ProductsList />}
        </div>
    );
};

export default ProductsContainer;