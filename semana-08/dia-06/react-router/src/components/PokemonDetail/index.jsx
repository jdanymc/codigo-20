import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
} from "@mui/material";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);
  const handleOpenDialog = () => {
    setAbrir(!abrir);
  };
  
  return (
    <div>
      <Button variant="contained" onClick={handleOpenDialog}>
        Ver Detalle
      </Button>
      <Dialog open={abrir} onClose={handleOpenDialog}>
        <DialogContent>Hola {props.name}</DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleOpenDialog}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
