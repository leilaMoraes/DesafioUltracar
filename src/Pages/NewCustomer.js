import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { customers } from '../mocks';

function NewCustomer() {
  const [form] = Form.useForm();
  const { customer, setCustomer } = useContext(AppContext);
  const history = useHistory();

  const handleFormSubmit = () => {
    setCustomer(form.getFieldsValue());
    form.resetFields();
    history.push('/new_service');
  };

  const handdleChange = ({ target }) => {
    const { name, value } = target;
    if (name.includes('car')) {
      const carKey = name.split('.')[1];
      console.log(carKey);
      setCustomer({
        ...customer,
        car: {
          ...customer.car,
          [carKey]: value,
        },
      });
    } else {
      setCustomer({
        ...customers,
        [name]: value,
      });
    }
  };

  return (
    <Form form={ form } layout="vertical">
      <Form.Item label="Nome" name="name" value={ customers.name }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Form.Item label="CPF" name="cpf" value={ customers.cpf }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Form.Item label="Telefone" name="phone" value={ customers.phone }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Form.Item label="Cor" name={ ['car', 'color'] } value={ customers.car.color }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Form.Item label="Modelo" name={ ['car', 'model'] } value={ customers.car.model }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Form.Item label="Placa" name={ ['car', 'plate'] } value={ customers.car.plate }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Form.Item label="Ano" name={ ['car', 'year'] } value={ customers.car.year }>
        <Input onChange={ handdleChange } />
      </Form.Item>
      <Button type="primary" onClick={ handleFormSubmit }>
        Cadastrar
      </Button>
    </Form>
  );
}

export default NewCustomer;
