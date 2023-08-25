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
          <a class="nav-link" href="#">Belleza</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cuidado Personal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dermocosmética</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Alimentos</a>
        </li>
      </ul>
    </div>
    <div> <CartWidget item={10}/></div>
  </div>
</nav>
    );
};