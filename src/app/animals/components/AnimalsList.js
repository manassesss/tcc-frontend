"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Tag, Breadcrumb, Col, Form, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import { FiFilter } from "react-icons/fi";
import React from 'react';

const { Search } = Input;


const  AnimalList = () => {
    const dataSource = [
        {
          id: '1',
          nomeRebanho: 'Rebanho Santa Clara',
          nomeNumero: 'SC-001',
          dataNascimento: '2022-03-15',
          sexo: 'Fêmea',
          finalidade: 'Produção',
          motivoEntrada: 'Nascimento',
          tipoParto: 'Simples',
          dataDesmame: '2022-06-15',
          pai: 'SC-PR-001',
          mae: 'SC-MT-001',
          raca: 'Anglo Nubiana',
          composicaoGenetica: 'Puro de Origem',
          categoria: 'Cabrita',
          grauParticaoTesticular: 'Não possui grau de partição',
          posicaoOrelha: 'Caída',
          observacoes: {
            barba: false,
            brinco: true,
            corno: false,
            tetasSupranumerarias: false,
          },
        },
        {
          id: '2',
          nomeRebanho: 'Fazenda Boa Vista',
          nomeNumero: 'FB-045',
          dataNascimento: '2021-10-22',
          sexo: 'Macho',
          finalidade: 'Reprodução',
          motivoEntrada: 'Compra',
          tipoParto: 'Duplo',
          dataDesmame: '2022-01-22',
          pai: 'FB-PR-010',
          mae: 'FB-MT-005',
          raca: 'Saanen',
          composicaoGenetica: 'Mestiço',
          categoria: 'Reprodutor',
          grauParticaoTesticular: 'Partido',
          posicaoOrelha: 'Forma de lança',
          observacoes: {
            barba: true,
            brinco: false,
            corno: true,
            tetasSupranumerarias: false,
          },
        },
        {
          id: '3',
          nomeRebanho: 'Sítio Esperança',
          nomeNumero: 'SE-110',
          dataNascimento: '2023-02-12',
          sexo: 'Fêmea',
          finalidade: 'Produção',
          motivoEntrada: 'Nascimento',
          tipoParto: 'Triplo',
          dataDesmame: '2023-05-12',
          pai: 'SE-PR-022',
          mae: 'SE-MT-013',
          raca: 'Bôer',
          composicaoGenetica: 'Puro por Cruza',
          categoria: 'Cabrita',
          grauParticaoTesticular: 'N/A',
          posicaoOrelha: 'Horizontal',
          observacoes: {
            barba: false,
            brinco: true,
            corno: true,
            tetasSupranumerarias: false,
          },
        },
        {
            id: '4',
            nomeRebanho: 'Fazenda Primavera',
            nomeNumero: 'FP-200',
            dataNascimento: '2020-07-19',
            sexo: 'Macho',
            finalidade: 'Reprodução',
            motivoEntrada: 'Empréstimo',
            tipoParto: 'Simples',
            dataDesmame: '2020-10-19',
            pai: 'FP-PR-100',
            mae: 'FP-MT-089',
            raca: 'Alpina',
            composicaoGenetica: 'Mestiço',
            categoria: 'Reprodutor',
            grauParticaoTesticular: 'Cauda',
            posicaoOrelha: 'Caída',
            observacoes: {
              barba: true,
              brinco: true,
              corno: false,
              tetasSupranumerarias: false,
            },
          },
          {
            id: '5',
            nomeRebanho: 'Rebanho Vale Verde',
            nomeNumero: 'VV-333',
            dataNascimento: '2022-05-06',
            sexo: 'Fêmea',
            finalidade: 'Produção',
            motivoEntrada: 'Nascimento',
            tipoParto: 'Duplo',
            dataDesmame: '2022-08-06',
            pai: 'VV-PR-030',
            mae: 'VV-MT-015',
            raca: 'Anglo Nubiana',
            composicaoGenetica: 'Puro por Cruza',
            categoria: 'Cabrita',
            grauParticaoTesticular: 'N/A',
            posicaoOrelha: 'Caída',
            observacoes: {
              barba: false,
              brinco: true,
              corno: true,
              tetasSupranumerarias: true,
            },
          },
        ]
  
  const columns = [
    {
      title: 'Cod.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome / Número',
      dataIndex: 'nomeNumero',
      key: 'nomeNumero',
    },
    {
      title: 'Sexo',
      dataIndex: 'sexo',
      key: 'sexo',
    },
    {
      title: 'Raça',
      dataIndex: 'raca',
      key: 'raca',
    },
    {
        title: 'Finalidade',
        dataIndex: 'finalidade',
        key: 'finalidade',
    },
    {
        title: 'Categoria',
        dataIndex: 'categoria',
        key: 'categoria',
    },
    {
        title: 'Observações',
        dataIndex: 'observacoes',
        key: 'observacoes',
        render: (_, {observacoes}) => (
            <>
            {observacoes.barba && <Tag color={'geekblue'}>
              Barba
            </Tag>}
            {observacoes.brinco && <Tag color={'green'}>
              Brinco
            </Tag>}
            {observacoes.corno && <Tag color={'volcano'}>
              Corno
            </Tag>}
            {observacoes.tetasSupranumerarias && <Tag color={'gold'}>
              Tetas
            </Tag>}
            </>
        ),
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
              onClick={() => handleEdit(record)}
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

  const handleEdit = (record) => {
    console.log('Edit:', record);
    // Adicione sua lógica de edição aqui
  };

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

  const onEdit = () => {
    console.log('edita')
    
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
                  title: <strong>Animais</strong>,
                },
              ]}
            />
          <Card title="Filtros">
            <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item label="Nome / Número" name="name">
                      <Search
                          placeholder="Digite para buscar"
                          onSearch={onSearch}
                          enterButton
                        />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Raça" name="raca">
                    <Select />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Finalidade" name="finalidade">
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Categoria" name="categoria">
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Observações" name="observacoes">
                      <Select />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Sexo" name="sexo">
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
                <h1>Animais</h1>
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

export default AnimalList;