import Logo from "./images/Logo.png";
import "./style.css";
function Header()
{
  return(<div className="header_style">
  <img src={Logo} className="Logo_design"/>
  <div className="grey">
  </div>
  <div className="yellow">
  </div>
  </div>);

}
export default Header;
