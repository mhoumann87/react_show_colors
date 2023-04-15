const Square = ({ colorValue, hexValue }) => {
  return (
    <div
      className='color-box box-shadow'
      style={{ backgroundColor: colorValue }}>
      <p className='clr-name'>{colorValue ? colorValue : 'Empty Value'}</p>
      <p className='clr-name'>{hexValue ? hexValue : null}</p>
    </div>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Color Value',
};

export default Square;
