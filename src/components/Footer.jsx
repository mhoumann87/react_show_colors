import SocialIcons from './SocialIcons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='box-shadow'>
      <div className='container'>
        <p>
          Copyright &copy;{year} by&nbsp;
          <a href='https://www.michael-h.dk' target='_blank' rel='noreferrer'>
            Michael Houmann
          </a>
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
};
export default Footer;
