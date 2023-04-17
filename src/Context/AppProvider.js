import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { employees } from '../mocks';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [selectEmployee, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('')

  useEffect(() => {
    setEmployees(employees)
  }, [setSelectedEmployee]);

  const onChange = ({target}) => {
    return setSelectedEmployee(target.value);
  };

  const values = {
    selectEmployee,
    setSelectedEmployee,
    selectedEmployee,
    onChange
  }

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
