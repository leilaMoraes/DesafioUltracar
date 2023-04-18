import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import bcrypt from 'bcryptjs';
import { employees } from '../mocks';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [selectEmployee, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('Andre Almeida');
  const [compare, setCompare] = useState(true);

  useEffect(() => {
    setEmployees(employees);
  }, [setSelectedEmployee]);

  const validatePassword = (dbPassword, password) => {
    const magicNumber = 6;
    if (password.length === magicNumber) {
      const boolean = bcrypt.compareSync(password, dbPassword);
      if (boolean === false) {
        return global.alert('Sua senha está errada');
      } setCompare(!boolean);
    }
  };

  const onChange = useCallback(({ target }) => {
    if (target.name === 'employees') return setSelectedEmployee(target.value);
    if (target.name === 'password' && selectedEmployee !== '') {
      const worker = employees.find((employee) => employee.nome === selectedEmployee);
      const password = target.value;
      validatePassword(worker.senha, password);
    }
  }, [selectedEmployee]);

  const values = useMemo(() => ({
    selectEmployee,
    setSelectedEmployee,
    selectedEmployee,
    onChange,
    compare,
  }), [
    selectEmployee,
    setSelectedEmployee,
    selectedEmployee,
    onChange,
    compare,
  ]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
