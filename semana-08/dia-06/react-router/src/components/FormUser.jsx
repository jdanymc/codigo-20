import { useState } from "react";
import { TextField, Button } from "@mui/material";
import isEmail from 'validator/lib/isEmail';

const FormUser = () => {
  const [valorInputs, setValorInputs] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });
  const handleInputValues = (e) => {
    //extraer 2 cosas del event
    //1 name de cada input
    //2 value de cada input
    const { name, value } = e.target;
    setValorInputs({ ...valorInputs, [name]: value });
  };

  return (
    <div>
      <form>
        <h4>Formulario de Registro</h4>
        <h5>Nombre: {valorInputs.nombre}</h5>
        <h5>Apellido: {valorInputs.apellido}</h5>
        <h5>Correo: {valorInputs.correo}</h5>
        <h5>Password: {valorInputs.password}</h5>
        <p>
          <TextField
            type="text"
            variant="outlined"
            label="Ingrese su nombre"
            name="nombre"
            onChange={handleInputValues}
          />
        </p>
        <p>
          <TextField
            type="text"
            variant="outlined"
            label="Ingrese su apellido"
            name="apellido"
            onChange={handleInputValues}
            />
        </p>
        <p>
        <TextField
            onChange={handleInputValues}
          label="Ingrese su correo"
    
          name="correo"
          variant="outlined"
        />
        </p>
        <p>
        <TextField
            onChange={handleInputValues}
          label="Ingrese su contraseña"
          type="password"
          name="password"
          variant="outlined"
        />
        </p>
        <p>
          <Button variant="contained" type="submit" onClick={()=>{
            if(!isEmail(valorInputs.correo)){
              alert("Ingrese un correo valido")
              return false
            }
          }}>Registrar</Button>
        </p>
      </form>
    </div>
  );
};

export default FormUser;
