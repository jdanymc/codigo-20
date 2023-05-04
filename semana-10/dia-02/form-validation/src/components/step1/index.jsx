import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
const Step1 = (props) => {
  const { nextStep, form1, setForm1 } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { ...form1 } });

  const onSubmit = (data) => {
    console.log("data", data);
    setForm1({ ...data });
    nextStep();
  };
  console.log("errors", errors);
  const firstName = watch('firstName');
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                Valor de firstName en tiempo real: {firstName}
            </div>
          <div className="mb-3">
            <label htmlFor="input-name" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="input-name"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              {...register("firstName", {
                required: {
                  value: true,
                  message: "El nombre es obligatorio",
                },
                minLength: 3,
              })}
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <small className="text-danger">{errors.firstName.message}</small>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <small className="text-danger">Minimo de caracteres 3</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="input-lastname" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              id="input-lastname"
              className="form-control"
              {...register("lastName")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="select-documento" className="form-label">
              Doc. Identificación:
            </label>
            <select
              name=""
              id="select-documento"
              className="form-control"
              {...register("selectDocumento")}
            >
              <option value="dni">DNI</option>
              <option value="p">Pasaporte</option>
              <option value="ce">Carné de Extranjeria</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            //disabled={!isValid}
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};

Step1.propTypes = {
  nextStep: PropTypes.func.isRequired,
  form1: PropTypes.object.isRequired,
  setForm1: PropTypes.func.isRequired,
};

export default Step1;
