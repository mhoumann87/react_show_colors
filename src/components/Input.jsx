import colorNames from 'colornames';

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <>
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
      <button
        className='box-shadow'
        type='button'
        onClick={() => setIsDarkText(!isDarkText)}
        style={{
          backgroundColor: isDarkText ? '#d9d9d9' : '#262626',
          color: isDarkText ? '#262626' : '#d9d9d9',
        }}>
        Toggle Text Color
      </button>
    </>
  );
};
export default Input;
