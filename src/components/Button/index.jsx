import './style.css';

export const Button = ({text, onClick}) => (
    <button className='btn' onClick={onClick}>
        {text}
    </button>
);