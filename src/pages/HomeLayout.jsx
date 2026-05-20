import { Outlet } from 'react-router-dom';
import { Header, NavBar } from '../components';

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <section className='cstm-align-element py-20'>
                <Outlet />
            </section>

        </div>
    );
};

export default HomeLayout;