import './style.css';

export const Button = ({text, onClick, disabled}) => (
    <button 
    className='btn' 
    onClick = {onClick} 
    disabled = {disabled}>
        {text}
    </button>
);