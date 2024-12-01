"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Breadcrumb, Form, Select, Col } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import { FiFilter } from "react-icons/fi";

import React from 'react';

const { Search } = Input;


const  EmployeesList = ({onEdit}) => {
  const dataSource = [
    { id: '1', name: 'Ana Oliveira', cpf: '123.456.789-00', email: 'ana.oliveira@example.com' },
    { id: '2', name: 'Bruno Costa', cpf: '987.654.321-00', email: 'bruno.costa@example.com' },
    { id: '3', name: 'Carlos Martins', cpf: '456.789.123-11', email: 'carlos.martins@example.com' },
    { id: '4', name: 'Daniela Ferreira', cpf: '321.654.987-22', email: 'daniela.ferreira@example.com' },
    { id: '5', name: 'Eduardo Pereira', cpf: '789.123.456-33', email: 'eduardo.pereira@example.com' },
    { id: '6', name: 'Fernanda Silva', cpf: '123.987.654-44', email: 'fernanda.silva@example.com' },
    { id: '7', name: 'Gabriel Rocha', cpf: '654.321.987-55', email: 'gabriel.rocha@example.com' },
    { id: '8', name: 'Helena Souza', cpf: '987.123.456-66', email: 'helena.souza@example.com' },
    { id: '9', name: 'Isabela Lima', cpf: '456.987.123-77', email: 'isabela.lima@example.com' },
    { id: '10', name: 'João Mendes', cpf: '321.789.654-88', email: 'joao.mendes@example.com' },
    { id: '11', name: 'Karen Nunes', cpf: '789.456.123-99', email: 'karen.nunes@example.com' },
    { id: '12', name: 'Lucas Ribeiro', cpf: '987.654.123-00', email: 'lucas.ribeiro@example.com' },
    { id: '13', name: 'Mariana Carvalho', cpf: '123.456.789-01', email: 'mariana.carvalho@example.com' },
    { id: '14', name: 'Nicolas Almeida', cpf: '654.321.987-02', email: 'nicolas.almeida@example.com' },
    { id: '15', name: 'Olivia Teixeira', cpf: '456.789.123-03', email: 'olivia.teixeira@example.com' },
    { id: '16', name: 'Pedro Ramos', cpf: '321.654.987-04', email: 'pedro.ramos@example.com' },
    { id: '17', name: 'Quintino Barros', cpf: '789.123.456-05', email: 'quintino.barros@example.com' },
    { id: '18', name: 'Renata Moura', cpf: '123.987.654-06', email: 'renata.moura@example.com' },
    { id: '19', name: 'Samuel Duarte', cpf: '654.321.987-07', email: 'samuel.duarte@example.com' },
    { id: '20', name: 'Tatiana Xavier', cpf: '987.123.456-08', email: 'tatiana.xavier@example.com' },
    { id: '21', name: 'Ubiratan Lopes', cpf: '456.987.123-09', email: 'ubiratan.lopes@example.com' },
    { id: '22', name: 'Valéria Torres', cpf: '321.789.654-10', email: 'valeria.torres@example.com' },
    { id: '23', name: 'Wagner Neves', cpf: '789.456.123-11', email: 'wagner.neves@example.com' },
    { id: '24', name: 'Yasmin Azevedo', cpf: '987.654.123-12', email: 'yasmin.azevedo@example.com' },
    { id: '25', name: 'Zélia Fonseca', cpf: '123.456.789-13', email: 'zelia.fonseca@example.com' },
  ];
  
  const columns = [
    {
      title: 'Cod.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Tooltip title="Editar">
            <Button
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => onEdit(record.id)}
            />
          </Tooltip>
          <Tooltip title="Excluir">
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              type="primary"
              danger
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];


  const handleDelete = (record) => {
    console.log('Delete:', record);
    // Adicione sua lógica de exclusão aqui
  };

  const onSearch = async (value) => {
    if (value.length > 0) {
      console.log(value)
    } else {
      console.log('nada')
    }
  };


  return (
    <>
      <main style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Space direction="vertical">
          <Breadcrumb
              items={[
                {
                  title: 'Cadastros',
                },
                {
                  title: <strong>Funcionários</strong>,
                },
              ]}
            />
          <Card title="Filtros">
            <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item label="Nome" name="name">
                      <Search
                          placeholder="Digite para buscar"
                          onSearch={onSearch}
                          enterButton
                        />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="CPF" name="cpf">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Estado" name="estado">
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Cidade" name="cidade">
                      <Select />
                  </Form.Item>
                  </Col>
                </Row>
                <Row  justify="end">
                  <Button
                    type="primary"
                    onClick={() => {
                      onEdit();
                    }}
                    icon={<FiFilter />}
                  >
                    Aplicar Filtros
                  </Button>
              </Row>
            </Form>
          </Card>
          <Card
            title={
              <Row justify="space-between">
                <h1>Funcionários</h1>
                <Button
                  type="primary"
                  onClick={() => {
                    onEdit();
                  }}
                  icon={<PlusOutlined />}
                >
                  Adicionar
                </Button>
              </Row>
            }
          >
            <Table dataSource={dataSource} columns={columns}  rowKey="id"/>
          </Card>
        </Space>
      </main>
    </>
  );
}

export default EmployeesList;