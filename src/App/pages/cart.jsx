import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { birthYearDataConverter } from '../utils/birthYearDataConverter';

const Cart = () => {
  const history = useHistory();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const hasStudentData = localStorage.getItem('student') !== null;
    if (hasStudentData) {
      setStudentData(JSON.parse(localStorage.getItem('student')));
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h1>Карточка студента</h1>
          {!studentData && <h4>Нет данных</h4>}
          {studentData && <DataLine label="Имя" value={studentData.fName} />}
          {studentData && (
            <DataLine label="Фамилия" value={studentData.lName} />
          )}
          {studentData && (
            <DataLine
              label="Год рождения"
              value={birthYearDataConverter(studentData.birthYear)}
            />
          )}
          {studentData && (
            <DataLine label="Портфолио" value={studentData.portfolio} />
          )}
          <button
            className="btn btn-primary mt-2"
            onClick={() => history.push('/edit')}
          >
            {studentData ? 'Изменить' : 'Добавить'}
          </button>
        </div>
      </div>
    </div>
  );
};

const DataLine = ({ label, value }) => {
  return (
    <div className="mb-2">
      <span className="fw-bolder">{label + ': '}</span>
      <span>{value}</span>
    </div>
  );
};

export default Cart;
