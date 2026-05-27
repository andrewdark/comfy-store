
import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';

const ProductsContainer = ({ products }) => {
    const { meta } = useLoaderData();
    return (
        <div>
            <h1>Products list</h1>
            <ProductsGrid />
        </div>
    );
};

export default ProductsContainer;