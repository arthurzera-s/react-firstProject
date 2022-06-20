import './style.css';

export const TextInput = ({handleChange, searchValue}) => (
    <input
        className='text-input'
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder='Search post title'
        >
    </input>
);