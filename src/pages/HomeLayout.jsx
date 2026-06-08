import { Outlet, useNavigation } from 'react-router-dom';
import { Header, NavBar, Loading } from '../components';

const HomeLayout = () => {
    const myNavy = useNavigation();
    const isPageLoading = myNavy.state === 'loading';

    return (
        <div>
            <Header />
            <NavBar />
            {isPageLoading ? <Loading /> :
                <section className='cstm-align-element py-20'>
                    <Outlet />
                </section>

            }
        </div>
    );
};

export default HomeLayout;