const Title = (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTKRFunqaUFSmy578bQDu0lhmRxAv0z57_8CwlyJp6uRDu5joa6YqBCt8vO56V-jxVg4&usqp=CAU"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {Title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;