import { FormInput, SubmitBtn } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../http';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action =
    async ({ request }) => {

        return null;
    }

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post('/auth/local', {
                identifier: 'test@test.com',
                password: 'secret',
            });
            dispatch(loginUser(response.data));
            toast.success('welcome guest user');
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('guest user login error. please try again');
        }
    };

    return (
        <section className='h-screen grid place-items-center'>
            <Form method='post' className='card p-8 bg-base-100 shadow-lg gap-y-2 lg:w-96'>
                <h4 className='text-center text-3xl font-bold'>Login</h4>
                <FormInput label='Email:' name='identifier' type='email' />
                <FormInput label='Password:' name='password' type='password' />
                <div className='mt-4'>
                    <SubmitBtn text='Login' />

                </div>
                <button type='button' className='btn btn-secondary btn-block' onClick={loginAsGuestUser}>Guest Login</button>
                <p className='text-center'>
                    Not a member yet?{' '}
                    <Link
                        to='/register'
                        className='ml-2 link link-hover link-primary text-blue-500 capitalize'
                    >
                        register
                    </Link>
                </p>
            </Form>
        </section>
    );
};

export default Login;