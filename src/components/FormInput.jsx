const FormInput = ({ label, name, type, defaultValue, size }) => {
    return (
      <div className='form-control'>
        <label htmlFor={name} className='label'>
          <span className='label-text'>{label}</span>
        </label>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          className={`input input-bordered ${size}`}
          placeholder=""
        />
      </div>
    );
  };
  export default FormInput;