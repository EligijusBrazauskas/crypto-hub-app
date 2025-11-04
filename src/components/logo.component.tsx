import { Link } from "react-router-dom";
import logo from "../assets/svg/crypto-hub-logo.svg";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <img src={logo} alt="Crypto Hub Logo" width='48px' />
    <span className="whitespace-nowrap font-bold text-2xl">Crypto Hub</span>
  </Link>
);
