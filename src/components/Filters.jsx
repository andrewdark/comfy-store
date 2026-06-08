import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';

const Filters = () => {
    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* SEARCH */}
            <FormInput
                type='search'
                label='search product'
                name='search'
                size='input-sm'
                defaultValue=''
            />
            {/* CATEGORIES */}
            <FormInput
                type='search'
                label='select category'
                name='category'
                size='input-sm'
                defaultValue=''
            />
            {/* COMPANIES */}
            <FormInput
                type='search'
                label='select company'
                name='company'
                size='input-sm'
                defaultValue=''
            />
            {/* ORDER */}
            <FormInput
                type='input'
                label='sort by'
                name='order'
                size='input-sm'
                defaultValue=''
            />
            {/* PRICE */}
            <div className='capitalize'>select price</div>
            {/* SHIPPING */}
            <div className='capitalize'>free shipping</div>
            {/* BUTTONS */}
            <button type='submit' className='btn btn-primary btn-sm'>
                search
            </button>
            <Link to='/products' className='btn btn-accent btn-sm'>
                reset
            </Link>
        </Form>
    );
};

export default Filters;