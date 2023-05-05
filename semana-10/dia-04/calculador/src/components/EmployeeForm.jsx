import { useState } from "react";
import { PropTypes } from "prop-types";
import { Input } from "@mui/material";
import Swal from 'sweetalert2';

const EmployeeForm = ({onAddEmployee}) => {
  const [employeeName, setEmployeeName] = useState("");
  const [discount, setDiscount] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName || !discount || !salary) {
      Swal.fire("Ingrese los datos");
      return;
    }
    onAddEmployee({ employeeName, discount, salary });
    setEmployeeName("");
    setDiscount("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Nombre de empleado</label>
      <Input type="text" placeholder="Ingrese el nombre de empleado" variant="outline" id="employeeName" value={employeeName} onChange={(e)=>setEmployeeName(e.target.value)}/>
      <label htmlFor="">Descuento</label>
      <Input type="number" placeholder="Ingrese el descuento" variant="outline" id="discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} />
      <label htmlFor="">Salario</label>
      <Input type="number" placeholder="Ingrese el salario" variant="outline" id="salary" value={salary} onChange={(e)=>setSalary(e.target.value)} />
      <button>Agregar empleado</button>
    </form>
  );
};

EmployeeForm.propTypes = {
    onAddEmployee: PropTypes.func.isRequired,
  };

export default EmployeeForm;
