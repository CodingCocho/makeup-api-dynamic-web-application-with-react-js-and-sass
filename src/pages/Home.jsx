import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Home.css';

export const Home = () =>
{
    return (
        <div 
        className="Home"
        >
            <Navbar />
            <section 
            className="page">
                Home page
            </section>
            <Footer />
        </div>        
    )
}