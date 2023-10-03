// Imported picture for Navbar
import logo from "../../assets/logo.png";

//Imported SearchBar component for Navbar
import SearchBar from "../SearchBar/";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center ">
      <img src={logo} alt="" className="w-36 mt-1 " />
      <SearchBar />
    </div>
  );
}

export default Navbar;
