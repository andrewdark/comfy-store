
import { Filters, ProductsContainer, PaginationContainer } from '../components';
import { customFetch } from '../http';

const URL = '/products';

const allProductsQuery = (queryParams) => {

    return {
        queryKey: [
            'products',
        ],
        queryFn: () =>
            customFetch(URL, {
                params: queryParams,
            }),
    };
};


export const loader = (queryClient) => async ({ request }) => {
    const params = { search: '' };
    const response = await queryClient.ensureQueryData(
        allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta };
};

const Products = () => {
    return (
        <>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </>
    );
};

export default Products;