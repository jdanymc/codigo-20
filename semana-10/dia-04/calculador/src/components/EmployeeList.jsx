import Employee from "./Employee";
import { PropTypes } from "prop-types";

const EmployeeList = ({employees, onDeleteEmployee}) => {
  return (
    <div className="employees-list">
      { employees.length > 0 ? (
        employees.map((employee) => (
          <div key={employee.id}>
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.employeeName}
              discount={employee.discount}
              salary={employee.salary}
              onDeleteEmployee={onDeleteEmployee}
            />
          </div>
        ))
      ) : (
        <p>no hay empleados registrados</p>
      )}
    </div>
  );
};

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    onDeleteEmployee: PropTypes.func.isRequired,
  };

export default EmployeeList;
