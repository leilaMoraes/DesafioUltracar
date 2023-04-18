import { Button, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext';

function NewService() {
  const { customer } = useContext(AppContext);
  const [showSearch, setShowSearch] = useState(false);
  const [end, setEnd] = useState('');
  const [begin, setBegin] = useState('');
  const [service, setService] = useState('');
  const [value, setValue] = useState('');
  const [doneServices, setDoneServices] = useState([]);

  const setWorkBegin = () => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setBegin(formattedDate);
    setShowSearch(true);
  };

  const insertService = () => {
    const newService = { service, value };
    const newDoneServices = [...doneServices, newService];
    setDoneServices(newDoneServices);
    const local = localStorage.getItem('infos');
    if (!local) localStorage.setItem('infos', JSON.stringify({ begin, customer }));
    localStorage.setItem('services', JSON.stringify(newDoneServices));
    setService('');
    setValue('');
  };

  const setWorkEnd = () => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setEnd(formattedDate);
    localStorage.setItem('end', JSON.stringify({ end }));
  };

  const handleServiceChange = ({ target }) => {
    setService(target.value);
  };

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  console.log(doneServices);

  return (
    <Space>
      <Space
        direction="vertical"
        style={ { width: '50vh', display: 'flex', alignItems: 'center' } }
      >
        <h2>Informações do Cliente</h2>
        <p>{`Nome: ${customer.name}`}</p>
        <p>{`Telefone: ${customer.phone}`}</p>
        <p>{`Modelo do carro: ${customer.car.model}`}</p>
        <p>{`Cor do carro: ${customer.car.color}`}</p>
        <p>{`Placa do carro: ${customer.car.plate}`}</p>
      </Space>
      <Space direction="vertical">
        <Space>
          {showSearch ? (
            <Space>
              <Input
                style={ { width: '15em' } }
                placeholder="Serviço ou material utilizado"
                name="service"
                onChange={ handleServiceChange }
                value={ service }
              />
              <Input
                style={ { width: '10em' } }
                name="value"
                placeholder="R$"
                onChange={ handleValueChange }
                value={ value }
              />
              <Button
                style={ { backgroundColor: 'rgb(65, 88, 208)', width: '10em' } }
                type="primary"
                onClick={ insertService }
              >
                Inserir
              </Button>
            </Space>
          ) : null}
        </Space>
        <Space direction="vertical">
          {doneServices
            ? (
              doneServices.map((job, i) => (
                <p key={ i }>
                  {`Serviço: ${job.service} - Valor: ${job.value}`}
                </p>))) : null}
        </Space>
        <Space>
          <Button
            style={ { backgroundColor: 'rgb(40, 157, 204)', width: '18em' } }
            type="primary"
            onClick={ setWorkBegin }
            disabled={ showSearch }
          >
            Começar Atendimento
          </Button>
          <Button
            type="primary"
            style={ { backgroundColor: 'rgb(123, 220, 181)', width: '18em' } }
            onClick={ setWorkEnd }
            disabled={ !showSearch }
          >
            Finalizar Atendimento
          </Button>
        </Space>
      </Space>
    </Space>
  );
}

export default NewService;
