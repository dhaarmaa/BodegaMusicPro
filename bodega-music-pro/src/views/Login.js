import react from "react";
import { Link } from 'react-router-dom';

const Login = ()=>{
    return(
        <div className='container'>
            <br />
            <div className= 'col-sm-6 offset-4'>
                <img src="blogooo.svg"   width="100"  alt="logo" />
                
            </div>
            <br />
            <div className='row'>
                
                    <h2 className= 'col-sm-6 offset-3'>Inicio de sesion</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>

                    <div>
                        <label htmlFor="email" className='form-label'>correo</label><br />
                        <input type="text" className='fomr-control' ></input>
                    </div>

                    <div>
                        <label htmlFor="password" className='form-label'>Contraseña</label>
                        <input type="password" className='fomr-control' ></input>
                    </div>
                    <br />

                    <button  className="btn btn-dark col-sm-6 offset-2">Registrarse</button>
                    <br />
                    <Link to={`/Register`}>registrarse</Link>
                </div>
            </div>
        </div> 
    )
}

export default Login;