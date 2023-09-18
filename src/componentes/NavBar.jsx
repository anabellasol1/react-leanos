import Logo from '../assets/img/logo.png'
import '../componentes/NavBar.css'
import { CartWidget } from '../componentes/CartWidget';
import { Link } from 'react-router-dom';

export function NavBar () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to={"/"}>
    {/* <a class="navbar-brand" href="#"> */}
        <img class="logoFarma" src={Logo} />
    {/* </a> */}
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to={"/category/Belleza"} >
          <a class="nav-link" href="#">Belleza</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to={"/category/Cuidado Personal"} >
          <a class="nav-link" href="#">Cuidado Personal</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to={"/category/Dermocosmética"} >
          <a class="nav-link" href="#">Dermocosmética</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to={"/category/Alimentos"} >
          <a class="nav-link" href="#">Alimentos</a>
          </Link>
        </li>
      </ul>
    </div>
    <div> <CartWidget/></div>
  </div>
</nav>
    );
};