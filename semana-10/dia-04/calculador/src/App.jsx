import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const handleEmployee = ({ employeeName, discount, salary }) => {
    const newEmployee = {
      id: new Date().getTime().toString(),
      employeeName,
      discount,
      salary,
    };
    setEmployees([...employees, newEmployee]);
  };
  const handleDeleteEmployee = (id) => {
    const updateEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updateEmployees);
  };
  return (
    <div className="App">
      <div className="addDiscount">
        <span>Calculando mis descuentos</span>
        <EmployeeForm onAddEmployee={handleEmployee} />
      </div>
      <div className="Discounts">
        <EmployeeList
          setEmployees={setEmployees}
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
        />
      </div>
    </div>
  );
};

export default App;
