import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../http';
import { OrdersList, PaginationContainer, SectionTitle, } from '../components';

export const loader =
    (store, queryClient) =>
        async ({ request }) => {
            return { meta: { pagination: { pageCount: 1, page: 1 } } };
        };

const Orders = () => {
    return (
        <>
            <SectionTitle text='Your Orders' />
            <OrdersList />
            <PaginationContainer />
        </>
    );
};

export default Orders;