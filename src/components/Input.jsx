import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor='color-value' className='sr-only'>
        add color name
      </label>
      <input
        className='color-value box-shadow'
        id='color-value'
        name='color-value'
        type='text'
        placeholder='Add color name'
        required
        autoFocus
        value={colorValue}
        onChange={e => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};
export default Input;
