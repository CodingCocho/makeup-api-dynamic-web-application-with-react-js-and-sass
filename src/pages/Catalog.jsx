import Blushes from '../images/blushes-category-photo.jpg';
import Bronzers from '../images/bronzers-category-photo.jpg';
import Eyebrows from '../images/eyebrows-category-photo.jpg'
import Eyeliners from '../images/eyeliner-category-photo.jpg';
import Eyeshadows from '../images/eyeshadows-category-photo.jpg';
import Foundations from '../images/foundations-category-photo.jpg';
import LipLiners from '../images/lipliners-category-photo.jpg';
import LipSticks from '../images/lipsticks-category-photo.jpg';
import Mascaras from '../images/mascara-category-photo.jpg';
import NailPolishes from '../images/nail-polishes-category-photo.jpg';
import { CategorySelector } from '../components/CategorySelector';
import {Footer} from '../components/Footer';
import {Navbar} from '../components/Navbar';
import './styles/Catalog.css'

export const Catalog = () =>
{
    return (
        <div 
        className="CatalogPage"
        > 
            <Navbar />
            <section 
            className="page"
            >
                <CategorySelector 
                    categoryImage={Blushes}
                    categoryName="Blushes"
                    categoryUrl="/blushes"
                />
                <CategorySelector 
                    categoryImage={Bronzers}
                    categoryName="Bronzers"
                    categoryUrl="/bronzers"
                />
                <CategorySelector 
                    categoryImage={Eyebrows}
                    categoryName="Eyebrows"
                    categoryUrl="/eyebrows"
                />
                <CategorySelector 
                    categoryImage={Eyeliners}
                    categoryName="Eyeliners"
                    categoryUrl="/eyeliners"
                />
                <CategorySelector 
                    categoryImage={Eyeshadows}
                    categoryName="Eyeshadows"
                    categoryUrl="/eyeshadows"
                />
                <CategorySelector 
                    categoryImage={Foundations}
                    categoryName="Foundations"
                    categoryUrl="/foundations"
                />

                <CategorySelector 
                    categoryImage={LipLiners}
                    categoryName="Lip Liners"
                    categoryUrl="/lipliners"
                />
                <CategorySelector 
                    categoryImage={LipSticks}
                    categoryName="Lipsticks"
                    categoryUrl="/lipsticks"
                />
                <CategorySelector 
                    categoryImage={Mascaras}
                    categoryName="Mascaras"
                    categoryUrl="/mascaras"
                />
                <CategorySelector 
                    categoryImage={NailPolishes}
                    categoryName="Nail Polishes"
                    categoryUrl="/nailpolishes"
                />
            </section>
            <Footer />
        </div>
    )
}