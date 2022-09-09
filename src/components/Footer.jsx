import './styles/Footer.css'

export const Footer = () =>
{
    return (
        <div 
        className="Footer"
        >
            <div 
            className="desktop-flex-container"
            >
                <ul 
                className="footer-list" 
                id="footer-list-1"
                >
                    Store
                    <li 
                    className="footer-item" 
                    id="footer-item-1">
                        Find a Store
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-2">
                        Virtual Store Tour
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-3">
                        Isabella Rewards
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-4">
                        List of Brands
                    </li>
                </ul>
                <ul 
                className="footer-list" 
                id="footer-list-2"
                >
                    About Us
                    <li 
                    className="footer-item" 
                    id="footer-item-1">
                        Our Company
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-2">
                        Investor Relations
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-3">
                        Charitable Giving
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-4">
                        Careers
                    </li>
                </ul>
                <ul 
                className="footer-list" 
                id="footer-list-3"
                >
                    Services
                    <li 
                    className="footer-item" 
                    id="footer-item-1">
                        Gift Cards
                    </li>
                    <li 
                    className="footer-item" 
                    id="footer-item-2">
                        Mobile App
                    </li>
                </ul>
            </div>
        </div>
    )
}