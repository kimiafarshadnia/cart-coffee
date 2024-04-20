import { memo, FC } from 'react';
import Footer from '../elements/shared/Footer';
import NavBar from '../elements/nav/NavBar';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = memo (({ children }) => {
    return (
        <div className='md-container'>
            <NavBar />
            <div className='px-2 px-md-3 my-1'>
                {children}
            </div>
            <Footer/>
        </div>
    );
});

export default Layout;
