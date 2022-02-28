import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <img className='header__icon' src='/imgs/ca2.png' alt='' />
      <h1 className='header__title'>Your Diary</h1>
      <div className='link' >
      <a href="/">Home</a>
          <a href="/add">Add Posts</a>
      </div>
     
    </header>
  );
};
export default Header;
