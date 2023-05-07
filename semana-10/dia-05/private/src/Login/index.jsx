import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Grid, Card, CardContent, TextField } from "@mui/material";
import Swal from 'sweetalert2';

const Login = () => {
  const { user, storeUser } = useContext(UserContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInput=(e)=>{
    const {name,value}=e.target
    setUserData({...userData,[name]:value})
  }

  const handleClickLogin=()=>{
    if(userData.email==='pepe@gmail.com' && userData.password==='123456'){
        const user = {
            nombre:'Pepe',
            apellido:'Zapata',
            edad: 30
        }
        
        storeUser(user);
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No es el usuario',
          })
    }
  }

  return (
    <div>
      <Grid container alignItems="space-around">
        <Grid item md={6}>
          <img src="https://i.postimg.cc/Hk6Xy0ZP/ekipo.jpg" alt="" />
        </Grid>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <h5>Welcome</h5>
              <h3>Codigo Texsup</h3>
              <p>Aprendienso a usar el private</p>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <TextField label="Email" name="email" fullWidth  onChange={handleInput}/>
                </Grid>

                <Grid item md={12}>
                  <TextField
                    label="Password"
                    name="password"
                    fullWidth
                    type="password"
                    onChange={handleInput}
                  />
                </Grid>
                <Grid item md={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={handleClickLogin}
                  >
                    Inicia Sesion
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
