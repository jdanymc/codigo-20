import { PropTypes } from "prop-types";
const Employee = ({ id, name, discount, salary, onDeleteEmployee }) => {
  const calculateDiscountedSalary = (salary, discount) =>
    salary - (salary * discount) / 100;

  const discountSalary = calculateDiscountedSalary(salary, discount);
 
  return <div>
    <h3>{name}({discount}%)</h3>
    <p>Salario original: {salary} nuevos soles</p>
    <p>Salario con descuento: {discountSalary} nuevos soles</p>
    <button onClick={()=>onDeleteEmployee(id)}>Eliminar</button>
  </div>;
};

Employee.propTypes = {
    id:PropTypes.string,
    name: PropTypes.string,
    discount: PropTypes.number, 
    salary: PropTypes.number, 
    onDeleteEmployee: PropTypes.func.isRequired,
  };


export default Employee;
