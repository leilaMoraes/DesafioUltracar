import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Select } from 'antd';
import Password from 'antd/es/input/Password';
import AppContext from '../Context/AppContext';

function Login() {
  const { selectEmployee, onChange, selectedEmployee, compare } = useContext(AppContext);
  const history = useHistory();
  const onClick = () => {
    history.push('/employee_page');
  };

  return (
    <div>
      <Select
        name="employees"
        value={ selectedEmployee }
        onChange={ onChange }
      >
        { selectEmployee.map((e, i) => (
          <Select.Option key={ i }>{ e.nome }</Select.Option>
        ))}
      </Select>
      <Password
        type="password"
        name="password"
        placeholder="Digite sua senha"
        onChange={ onChange }
      />
      <Button
        type="primary"
        disabled={ compare }
        onClick={ onClick }
      >
        Entrar
      </Button>
    </div>
  );
}

export default Login;
