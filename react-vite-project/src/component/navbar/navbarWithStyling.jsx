import "./navbarWidthStyling.css";

function NavbarWithStyling(props) {
  return (
    <div className="style">
      <h1>FSW 2</h1>
      <ul>
        <li>{props.menu[0]}</li>
        <li>{props.menu[1]}</li>
        <li>{props.menu[2]}</li>
      </ul>
    </div>
  );
}

export default NavbarWithStyling;
