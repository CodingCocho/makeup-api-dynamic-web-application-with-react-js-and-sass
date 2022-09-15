import { NavLink } from 'react-router-dom';
import './styles/CategorySelector.css';

export const CategorySelector = (props) =>
{

    const {categoryImage,categoryName,categoryUrl} = props;

    return (
        <div className="CategorySelector">
                <NavLink 
                className="image-container"
                to={categoryUrl}
                >
                    <img
                    alt="category"
                    className="category-image"
                    src={categoryImage} 
                    />
                </NavLink>
               <div className="category-name">
                <NavLink 
                    className="category"
                    to={categoryUrl}
                    >
                        {categoryName}
                    </NavLink>
               </div>
        </div>
    )
}