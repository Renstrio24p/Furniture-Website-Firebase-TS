
import UniqueHash from "../security/hashes";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { TS_Router } from "../routes/router";

export default function Render() {
  // Get Render's ID

  const Nav = document.getElementById('navbar') as HTMLDivElement | null;
  const Head = document.getElementById('header') as HTMLDivElement | null;

  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {
    
  });

  // Render the JS Component

  {Nav && Navbar(Nav)}
  {Head && Header(Head)}

  // Routes
}
