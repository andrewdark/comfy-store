import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../http';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (data.password !== data.confirm) {
        const errorMessage = 'please double check your credentials';
        toast.error(errorMessage);
        return null;
    }

    try {
        const response = await customFetch.post('/auth/local/register', data);
        toast.success('Account created successfully');
        return redirect('/login');
    } catch (error) {
        const errorMessage =
            error?.response?.data?.error?.message ||
            'please double check your credentials';
        toast.error(errorMessage);
        return null;
    }

};

const Register = () => {
    return (
        <section className='h-screen grid place-items-center'>
            <Form method='post' className='card p-8 bg-base-100 shadow-lg gap-y-4 lg:w-96'>
                <h4 className='text-center text-3xl font-bold'>Register</h4>
                <FormInput label='username' name='username' type='text' />
                <FormInput label='Email:' name='email' type='email' />
                <FormInput label='Password:' name='password' type='password' />
                <FormInput label='Confirm Password:' name='confirm' type='password' />
                <div className='mt-4'>
                    <SubmitBtn text='Register' />
                </div>

                <p className='text-center'>
                    Already a member?{' '}
                    <Link
                        to='/login'
                        className='ml-2 link link-hover link-primary text-blue-500 capitalize'
                    >
                        login
                    </Link>
                </p>
            </Form>
        </section>
    );
};

export default Register;