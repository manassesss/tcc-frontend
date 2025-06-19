"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Tag, Breadcrumb, Col, Form, DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import { FiFilter } from "react-icons/fi";
import React from 'react';

const { Search } = Input;


const  ClinicalOccurrenceList = ({onEdit}) => {
    const dataSource = [
  { id: 1,  flock_id: 1, dam_id: 101, dt_coverage: '2024-05-01' },
  { id: 2,  flock_id: 1, dam_id: 102, dt_coverage: '2024-06-15' },
  { id: 3,  flock_id: 2, dam_id: 103, dt_coverage: '2024-04-10' },
  { id: 4,  flock_id: 2, dam_id: 104, dt_coverage: '2024-03-20' },
  { id: 5,  flock_id: 3, dam_id: 105, dt_coverage: '2024-07-01' },
  { id: 6,  flock_id: 3, dam_id: 106, dt_coverage: '2024-02-14' },
  { id: 7,  flock_id: 4, dam_id: 107, dt_coverage: '2024-05-25' },
  { id: 8,  flock_id: 4, dam_id: 108, dt_coverage: '2024-03-12' },
  { id: 9,  flock_id: 5, dam_id: 109, dt_coverage: '2024-06-01' },
  { id: 10, flock_id: 5, dam_id: 110, dt_coverage: '2024-04-22' }
]
  
  
  const columns = [
    {
      title: 'Cod.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Animal',
      dataIndex: 'flock_id',
      key: 'flock_id',
    },
    {
      title: 'Doença',
      dataIndex: 'dam_id',
      key: 'dam_id',
    },
    {
      title: 'Data da Cobertura',
      dataIndex: 'dt_coverage',
      key: 'dt_coverage',
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
                  title: 'Controle Animal',
                },
                {
                  title: <strong>Ocorrência Clínica</strong>,
                },
              ]}
            />
          <Card title="Filtros">
            <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item label="Animal" name="flock_id">
                    <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Doença" name="dam_id">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Data da movimentação" name="dt_coverage">
                      <DatePicker style={{width: '100%'}}/>
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
                <h1>Ocorrências Clínicas</h1>
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

export default ClinicalOccurrenceList;