import react from "react";

const Home = ()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme ="dark">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="logo.svg" alt="Bootstrap" width="60" height="48"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ingreso Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Salida Productos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuario
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="Login">Cerrar Sesion</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <h1>Que pro el Mati</h1>
        
      
   
    </div>
    )
}

export default Home;