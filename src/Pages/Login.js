import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Select, Space } from 'antd';
import Password from 'antd/es/input/Password';
import AppContext from '../Context/AppContext';

function Login() {
  const { selectEmployee, onChange, selectedEmployee, compare } = useContext(AppContext);
  const history = useHistory();
  const onClick = () => {
    history.push('/employee_page');
  };

  return (
    <Space direction="vertical">
      <div>
        <img src="https://ultracar.com.br/sistema-gestao-oficina-mecanica/programa-gerenciamento-oficina-mecanica/wp-content/uploads/2019/09/LOGO-TOPO-SITE.png" alt="Ultracar - Sistema de gestão completo para oficinas automotivas" />
      </div>
      <Space direction="vertical">
        <Select
          style={ { width: '20em' } }
          value={ selectedEmployee }
          onChange={ onChange }
        >
          { selectEmployee.map((e, i) => (
            <Select.Option
              key={ i }
            >
              { e.name }
            </Select.Option>
          ))}
        </Select>
        <Password
          style={ { width: '20em' } }
          type="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={ onChange }
        />
        <Button
          style={ { width: '20em',
            backgroundColor: 'rgb(123, 220, 181)',
            fontWeight: 'bold' } }
          type="primary"
          disabled={ compare }
          onClick={ onClick }
        >
          Entrar
        </Button>
      </Space>
    </Space>
  );
}

export default Login;
