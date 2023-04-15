const Square = ({ colorValue }) => {
  return (
    <div
      className='color-box box-shadow'
      style={{ backgroundColor: colorValue }}>
      <p class='clr-name'>{colorValue ? colorValue : 'Empty Value'}</p>
    </div>
  );
};
export default Square;
