"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Breadcrumb, Tag } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import React from 'react';

const { Search } = Input;


const  RacesList = ({onEdit}) => {
  const dataSource = [
    // Caprinas
    {
      id: '1',
      nome: 'Anglo Nubiano',
      origem: 'Inglaterra',
      aspectosGerais: 'Raça de dupla aptidão (leite e carne), com orelhas longas e caídas, muito adaptada a climas quentes.',
    },
    {
      id: '2',
      nome: 'Boer',
      origem: 'África do Sul',
      aspectosGerais: 'Especializada em produção de carne, possui corpo robusto e pelagem branca com cabeça marrom.',
    },
    {
      id: '3',
      nome: 'Savana',
      origem: 'África do Sul',
      aspectosGerais: 'Raça rústica e de grande resistência, com aptidão para carne e pelagem branca uniforme.',
    },
    {
      id: '4',
      nome: 'Cabra Azul',
      origem: 'Brasil',
      aspectosGerais: 'Raça nativa do semiárido nordestino, rústica, com boa adaptação ao clima e aptidão para carne.',
    },
    {
      id: '5',
      nome: 'Alpina',
      origem: 'França',
      aspectosGerais: 'Raça leiteira de alta produtividade, com pelagem variada e temperamento dócil.',
    },
    {
      id: '6',
      nome: 'Repartida',
      origem: 'Brasil',
      aspectosGerais: 'Raça local do Nordeste, utilizada para carne e pele, com pelagem clara e resistência a ambientes secos.',
    },
    {
      id: '7',
      nome: 'Parda Alpina',
      origem: 'França',
      aspectosGerais: 'Variante da Alpina, com pelagem parda e excelente produção leiteira.',
    },
    {
      id: '8',
      nome: 'Marota',
      origem: 'Brasil',
      aspectosGerais: 'Raça nativa do semiárido, resistente à seca, utilizada principalmente para carne.',
    },
    {
      id: '9',
      nome: 'Graúna',
      origem: 'Brasil',
      aspectosGerais: 'Caprino nativo com pelagem preta, adaptado ao clima do semiárido, apto para carne e pele.',
    },
    {
      id: '10',
      nome: 'Moxotó',
      origem: 'Brasil',
      aspectosGerais: 'Raça típica do Nordeste, com pelagem clara e excelente resistência a climas áridos.',
    },
    // Ovinas
    {
      id: '11',
      nome: 'Santa Inês',
      origem: 'Brasil',
      aspectosGerais: 'Raça sem lã, muito adaptada ao clima tropical, com boa aptidão para carne.',
    },
    {
      id: '12',
      nome: 'Dorper',
      origem: 'África do Sul',
      aspectosGerais: 'Raça de carne, com excelente conversão alimentar, pelagem curta e cores preta e branca.',
    },
    {
      id: '13',
      nome: 'Morada Nova',
      origem: 'Brasil',
      aspectosGerais: 'Raça nativa do Nordeste, com pelagem vermelha ou branca, apta para carne e adaptada ao semiárido.',
    },
    {
      id: '14',
      nome: 'Suffolk',
      origem: 'Inglaterra',
      aspectosGerais: 'Raça de carne, com corpo grande, pelagem branca e cabeça e membros negros.',
    },
    {
      id: '15',
      nome: 'Bergamácia',
      origem: 'Itália',
      aspectosGerais: 'Raça de dupla aptidão (carne e leite), rústica e de pelagem longa e ondulada.',
    },
    {
      id: '16',
      nome: 'Rabo Largo',
      origem: 'Brasil',
      aspectosGerais: 'Raça adaptada ao semiárido, com gordura armazenada no rabo, apta para carne.',
    },
    {
      id: '17',
      nome: 'Somalis Brasileira',
      origem: 'Brasil',
      aspectosGerais: 'Raça sem lã, com pelagem branca e cabeça preta, muito resistente a climas quentes.',
    },
  ];
  
  
  const columns = [
    {
      title: 'Cod.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Origem',
      dataIndex: 'origem',
      key: 'origem',
    },
    {
      title: 'Aspectos Gerais',
      dataIndex: 'aspectosGerais',
      key: 'aspectosGerais',
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
                  title: <strong>Raças</strong>,
                },
              ]}
            />
          <Card title="Buscar">
            <Search
              placeholder="Digite para buscar"
              onSearch={onSearch}
              enterButton
            />
          </Card>
          <Card
            title={
              <Row justify="space-between">
                <h1>Raças</h1>
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

export default RacesList;