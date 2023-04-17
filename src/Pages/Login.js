import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../Context/AppContext';

function Login() {
  const [inputPassword, setPassword] = useState('');
  const {selectEmployee, onChange, selectedEmployee} = useContext(AppContext);
  const history = useHistory();
  const magicNumber = 6;
  const onClick = () => {
    history.push('/employee_page');
  };

  return (
    <div>
      <label htmlFor=" employees">
        name
        <select
          name="employees"
          id=" employees"
          value={selectedEmployee}
          onChange={ onChange }
        >
          { selectEmployee.map((e, i) => ( <option key={ i }>{ e.nome }</option> ))}
        </select>
      </label>
      <label htmlFor="password">
        senha
        <input
          type="password"
          name="password"
          id="password"
          onChange={ (event) => setPassword(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ inputPassword.length < magicNumber }
        onClick={ (() => onClick()) }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;