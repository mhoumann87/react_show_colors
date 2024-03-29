const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className='color-box box-shadow'
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#262626' : '#d9d9d9',
      }}>
      <p className='clr-name'>{colorValue ? colorValue : 'Empty Value'}</p>
      <p className='clr-name'>{hexValue ? hexValue : null}</p>
    </div>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Color Value',
};

export default Square;
