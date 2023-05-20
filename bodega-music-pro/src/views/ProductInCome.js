import react,  { useState, useEffect} from "react";
import Axios from 'axios';

const ProductInCome = ()=>{

    const [productName, setProductName] = useState('');
    const [productCode, setProductCode] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productStock, setProductStock] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3001/leer").then((response) => {
            console.log(response);
        });
    }, []);

    const addProduct = () => {
        Axios.post("http://localhost:3001/agregar", {
            productName: productName,
            productCode: productCode,
            productDescription: productDescription,
            productPrice: productPrice,
            productStock: productStock,
        }).then(() => {});

    };


return(
    <div>
        <h1>Ingresar Productos</h1>
        <div className='row'>
            <div className='col-sm-6 offset-2'></div>
                <div>
                    <label htmlFor='nombre' className='form-label'>Nombre:</label>
                    <input type="text" className='form-control' onChange={(event) => {setProductName(event.target.value);}}></input>
                </div>
        
                <div>
                    <label htmlFor='codigo' className='form-label'>Codigo:</label>
                    <input type="text" className='form-control' onChange={(event) => {setProductCode(event.target.value);}}></input>
                </div>

                <div>
                    <label htmlFor='descripcion' className='form-label'>Descripcion:</label>
                    <input type="text" className='form-control' onChange={(event) => {setProductDescription(event.target.value);}}></input>
                </div>

                <div>
                    <label htmlFor='precio' className='form-label'>Precio:</label>
                    <input type="Number" className='form-control' onChange={(event) => {setProductPrice(event.target.value);}}></input>
                </div>

                <div>
                    <label htmlFor='stock' className='form-label'>Stock:</label>
                    <input type="Number" className='form-control' onChange={(event) => {setProductStock(event.target.value);}}></input>
                </div>

                <button  className="btn btn-dark col-sm-6 offset-2" onClick={addProduct}>Ingresar producto</button>
                <br />
            </div>
        </div>
    )
}

export default ProductInCome;