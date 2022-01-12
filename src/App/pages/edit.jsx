import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../components/modal';
import TextField from '../components/textField';
import { validator } from '../utils/validator';

const Edit = () => {
  const [data, setData] = useState({
    fName: '',
    lName: '',
    birthYear: '',
    portfolio: '',
  });
  const [errors, setErrors] = useState({});
  const [isModal, setIsModal] = useState();
  const history = useHistory();

  const hasStudentData = localStorage.getItem('student') !== null;

  useEffect(() => {
    const studentData =
      localStorage.getItem('student') === null
        ? null
        : JSON.parse(localStorage.getItem('student'));
    if (studentData) {
      setData(studentData);
    }
  }, []);

  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    fName: {
      isRequired: { message: 'Поле "Имя" обязательно к заполнению' },
    },
    lName: {
      isRequired: { message: 'Поле "Фамилия" обязательно к заполнению' },
    },
    birthYear: {
      isRequired: { message: 'Поле "Год рождения" обязательно к заполнению' },
      isBirthYear: {
        message: 'Поле "Год рождения" заполнен некорректно',
      },
    },
    portfolio: {
      isRequired: { message: 'Поле "Портфолио" обязательно к заполнению' },
      isLink: {
        message:
          'Поле "Портфолио" должно содержать url-ссылку на ваше портфолио',
      },
    },
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    localStorage.setItem('student', JSON.stringify(data));
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
    history.push('/');
  };

  return (
    <>
      <Modal textMain="Обновлено" onClose={handleClose} isHidden={!isModal} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            <h1 className="mb-3">{hasStudentData ? 'Изменить' : 'Создать'}</h1>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                name="fName"
                value={data.fName}
                onChange={handleChange}
                error={errors.fName}
              />
              <TextField
                label="Фамилия"
                name="lName"
                value={data.lName}
                onChange={handleChange}
                error={errors.lName}
              />
              <TextField
                label="Год рождения"
                type="number"
                name="birthYear"
                value={data.birthYear}
                onChange={handleChange}
                error={errors.birthYear}
              />
              <TextField
                label="Портфолио"
                name="portfolio"
                value={data.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
              />
              <button className="btn btn-primary" disabled={!isValid}>
                {hasStudentData ? 'Сохранить' : 'Создать'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
