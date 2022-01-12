import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
}) => {
  const renderInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '');
  };

  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          value={value}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          className={renderInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
};
TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextField;
