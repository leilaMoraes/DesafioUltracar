import { Button, Layout, Space } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const { Header, Content, Footer } = Layout;

function EmployeePage() {
  const { selectedEmployee } = useContext(AppContext);

  return (
    <Layout style={ { backgroundColor: 'black' } }>
      <Space>
        <Header
          style={ {
            backgroundColor: 'black',
            position: 'absolute',
            top: 0,
            color: 'white',
            height: '3.25em',
          } }
        >
          <header>{ `Bem vindo(a), ${selectedEmployee}!`}</header>
        </Header>
        <Content style={ { minHeight: 'calc(100vh - 10em)' } }>
          <Button type="primary">
            <Link to="/new_customer">Cadastrar Novo Cliente</Link>
          </Button>
          <Button type="primary">
            <Link to="/qr_code">Ler QrCode</Link>
          </Button>
        </Content>
        <Footer style={ { backgroundColor: 'black', position: 'absolute', bottom: 0 } }>
          <Button type="primary" style={ { bottom: 0 } }>
            <Link to="/services_in_progress">Serviços em Andamento</Link>
          </Button>
          <Button type="primary">
            <Link to="/done_services">Serviços Concluídos</Link>
          </Button>
        </Footer>
      </Space>
    </Layout>
  );
}

export default EmployeePage;
