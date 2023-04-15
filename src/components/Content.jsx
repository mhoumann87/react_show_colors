const Content = () => {
  return (
    <main className='container'>
      <div className='color-box box-shadow'>
        <p class='clr-name'>Empty Value</p>
      </div>
      <input
        className='box-shadow'
        type='text'
        placeholder='Add color name'
        autofocus
      />
    </main>
  );
};
export default Content;
