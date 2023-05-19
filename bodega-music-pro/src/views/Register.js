import react from "react";

const Register = ()=>{
    return(
        <div className='container'>
        <div className='row'>
                <h2 className= 'mt-4'>Registro</h2>
        </div>

        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div>
                    <label htmlFor="nombre" className='form-label'>Nombre</label>
                    <input type="text" className='fomr-control' ></input>
                </div>

                <div>
                    <label htmlFor="apellido" className='form-label'>Apellido</label>
                    <input type="text" className='fomr-control' ></input>
                </div>

                <div>
                    <label htmlFor="email" className='form-label'>correo</label>
                    <input type="text" className='fomr-control' ></input>
                </div>

                <div>
                    <label htmlFor="password" className='form-label'>Contraseña</label>
                    <input type="text" className='fomr-control' ></input>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className='form-label'>Confirmar contraseña</label>
                    <input type="text" className='fomr-control' ></input>
                </div>

                <div>
                    <label htmlFor="fechaNacimiento" className='form-label'>Fecha Nacimiento</label>
                    <input type="date" className='fomr-control' ></input>
                </div>

                <button  className="btn btn-dark">Registrarse</button>
            </div>
        </div>
    </div> 
    )
}

export default Register;