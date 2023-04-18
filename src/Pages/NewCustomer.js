import { Button, Form, Input } from 'antd';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { customers } from '../mocks';

function NewCustomer() {
  const [form] = Form.useForm();
  const { customer, setCustomer } = useContext(AppContext);
  const [checkForm, setCheckForm] = useState(false);
  const history = useHistory();

  const handleFormSubmit = () => {
    setCustomer(form.getFieldsValue());
    form.resetFields();
    history.push('/new_service');
  };

  const handdleChange = ({ target }) => {
    form.validateFields().then(() => {
      setCheckForm(true);
    }).catch(() => {
      setCheckForm(false);
    });
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
      <Form.Item
        label="Nome"
        name="name"
        value={ customers.name }
        rules={ [{
          required: true,
          message: 'Por favor insira um nome',
        }] }
      >
        <Input placeholder="Nome do Cliente" onChange={ handdleChange } />
      </Form.Item>
      <Form.Item
        label="CPF"
        name="cpf"
        value={ customers.cpf }
        rules={ [{
          required: true,
          message: 'Por favor insira um número de CPF',
        }] }
      >
        <Input placeholder="CPF" onChange={ handdleChange } />
      </Form.Item>
      <Form.Item
        label="Telefone"
        name="phone"
        value={ customers.phone }
        rules={ [{
          required: true,
          message: 'Por favor insira um número de telefone',
        }] }
      >
        <Input placeholder="Telefone" onChange={ handdleChange } />
      </Form.Item>
      <Form.Item
        label="Cor"
        name={ ['car', 'color'] }
        value={ customers.car.color }
        rules={ [{
          required: true,
          message: 'Por favor insira a cor do veículo',
        }] }
      >
        <Input placeholder="Cor do carro" onChange={ handdleChange } />
      </Form.Item>
      <Form.Item
        label="Modelo"
        name={ ['car', 'model'] }
        value={ customers.car.model }
        rules={ [{
          required: true,
          message: 'Por favor insira o modelo do veículo',
        }] }
      >
        <Input placeholder="Modelo do carro" onChange={ handdleChange } />
      </Form.Item>
      <Form.Item
        label="Placa"
        name={ ['car', 'plate'] }
        value={ customers.car.plate }
        rules={ [{
          required: true,
          message: 'Por favor insira a placa do veículo',
        }] }
      >
        <Input placeholder="Placa do carro" onChange={ handdleChange } />
      </Form.Item>
      <Form.Item
        label="Ano"
        name={ ['car', 'year'] }
        value={ customers.car.year }
        rules={ [{
          required: true,
          message: 'Por favor insira o ano de fabricação do veículo',
        }] }
      >
        <Input placeholder="Ano do carro" onChange={ handdleChange } />
      </Form.Item>
      <Button
        style={ { width: '20em',
          backgroundColor: 'rgb(123, 220, 181)',
          fontWeight: 'bold' } }
        type="primary"
        onClick={ handleFormSubmit }
        disabled={ !checkForm }
      >
        Cadastrar
      </Button>
    </Form>
  );
}

export default NewCustomer;
