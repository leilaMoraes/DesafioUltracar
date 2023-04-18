import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import bcrypt from 'bcryptjs';
import { customers, employeesMock } from '../mocks';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [selectEmployee, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('André Almeida');
  const [compare, setCompare] = useState(true);
  const [begin, setBegin] = useState('');
  const [customer, setCustomer] = useState(customers);

  useEffect(() => {
    setEmployees(employeesMock);
  }, [setEmployees]);

  const validatePassword = (dbPassword, password) => {
    const magicNumber = 6;
    if (password.length < magicNumber) {
      setCompare(true);
    }
    if (password.length === magicNumber) {
      const boolean = bcrypt.compareSync(password, dbPassword);
      if (boolean === false) {
        return global.alert('Senha Incorreta');
      } setCompare(!boolean);
    }
  };

  const onChange = useCallback(({ target }, value) => {
    if (value) return setSelectedEmployee(value.children);
    if (target.name === 'password' && selectedEmployee !== '') {
      const worker = employeesMock.find((employee) => employee.name === selectedEmployee);
      const password = target.value;
      validatePassword(worker.password, password);
    }
  }, [selectedEmployee]);

  const values = useMemo(() => ({
    selectEmployee,
    setSelectedEmployee,
    selectedEmployee,
    onChange,
    compare,
    setBegin,
    begin,
    customer,
    setCustomer,
  }), [
    selectEmployee,
    setSelectedEmployee,
    selectedEmployee,
    onChange,
    compare,
    setBegin,
    begin,
    customer,
    setCustomer,
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
