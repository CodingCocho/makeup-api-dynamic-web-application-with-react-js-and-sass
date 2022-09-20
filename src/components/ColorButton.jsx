import './styles/ColorButton.css';

export const ColorButton = (props) => 
{

    const {color} = props;

    return (
        <div 
        className="ColorButton"
        style={{backgroundColor: color}}
        >

        </div>
    )
}