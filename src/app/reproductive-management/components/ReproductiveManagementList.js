"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Tag, Breadcrumb, Col, Form, DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import { FiFilter } from "react-icons/fi";
import React from 'react';

const { Search } = Input;


const  ReproductiveManagementList = ({onEdit}) => {
    const dataSource = [
      {
          id: 1,
          flock_id: 1,
          dam_id: 101,
          dt_coverage: "2024-05-01",
          weight_dam: 65.4,
          body_score_dam: 7,
          sire_id: 201,
          sire_scrotal_circumference: 34,
          parturition_status: "yes",
          dt_birth: "2024-10-01",
          parturition_type: "normal",
          dt_weaning: "2025-01-01"
      },
      {
          id: 2,
          flock_id: 1,
          dam_id: 102,
          dt_coverage: "2024-06-15",
          weight_dam: 68.2,
          body_score_dam: 8,
          sire_id: 202,
          sire_scrotal_circumference: 36,
          parturition_status: "no",
          dt_birth: "",
          parturition_type: "",
          dt_weaning: ""
      },
      {
          id: 3,
          flock_id: 2,
          dam_id: 103,
          dt_coverage: "2024-04-10",
          weight_dam: 63.5,
          body_score_dam: 6,
          sire_id: 203,
          sire_scrotal_circumference: 33,
          parturition_status: "in progress",
          dt_birth: "",
          parturition_type: "",
          dt_weaning: ""
      },
      {
          id: 4,
          flock_id: 2,
          dam_id: 104,
          dt_coverage: "2024-03-20",
          weight_dam: 70.1,
          body_score_dam: 9,
          sire_id: 204,
          sire_scrotal_circumference: 37,
          parturition_status: "yes",
          dt_birth: "2024-09-15",
          parturition_type: "normal",
          dt_weaning: "2024-12-15"
      },
      {
          id: 5,
          flock_id: 3,
          dam_id: 105,
          dt_coverage: "2024-07-01",
          weight_dam: 66.8,
          body_score_dam: 7,
          sire_id: 205,
          sire_scrotal_circumference: 35,
          parturition_status: "no",
          dt_birth: "",
          parturition_type: "",
          dt_weaning: ""
      },
      {
          id: 6,
          flock_id: 3,
          dam_id: 106,
          dt_coverage: "2024-02-14",
          weight_dam: 64.3,
          body_score_dam: 6,
          sire_id: 206,
          sire_scrotal_circumference: 32,
          parturition_status: "yes",
          dt_birth: "2024-08-14",
          parturition_type: "cesarean",
          dt_weaning: "2024-11-14"
      },
      {
          id: 7,
          flock_id: 4,
          dam_id: 107,
          dt_coverage: "2024-05-25",
          weight_dam: 69.0,
          body_score_dam: 8,
          sire_id: 207,
          sire_scrotal_circumference: 36,
          parturition_status: "no",
          dt_birth: "",
          parturition_type: "",
          dt_weaning: ""
      },
      {
          id: 8,
          flock_id: 4,
          dam_id: 108,
          dt_coverage: "2024-03-12",
          weight_dam: 62.5,
          body_score_dam: 5,
          sire_id: 208,
          sire_scrotal_circumference: 31,
          parturition_status: "yes",
          dt_birth: "2024-09-12",
          parturition_type: "normal",
          dt_weaning: "2024-12-12"
      },
      {
          id: 9,
          flock_id: 5,
          dam_id: 109,
          dt_coverage: "2024-06-01",
          weight_dam: 67.2,
          body_score_dam: 7,
          sire_id: 209,
          sire_scrotal_circumference: 34,
          parturition_status: "in progress",
          dt_birth: "",
          parturition_type: "",
          dt_weaning: ""
      },
      {
          id: 10,
          flock_id: 5,
          dam_id: 110,
          dt_coverage: "2024-04-22",
          weight_dam: 65.0,
          body_score_dam: 6,
          sire_id: 210,
          sire_scrotal_circumference: 33,
          parturition_status: "yes",
          dt_birth: "2024-10-22",
          parturition_type: "normal",
          dt_weaning: "2025-01-22"
      }
  ]
  
  
  const columns = [
    {
      title: 'Cod.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Rebanho',
      dataIndex: 'flock_id',
      key: 'flock_id',
    },
    {
      title: 'Matriz',
      dataIndex: 'dam_id',
      key: 'dam_id',
    },
    {
      title: 'Reprodutor',
      dataIndex: 'sire_id',
      key: 'sire_id',
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
                  title: <strong>Manejo Reprodutivo</strong>,
                },
              ]}
            />
          <Card title="Filtros">
            <Form layout="vertical">
                <Row gutter={16}>
                  <Col span={6}>
                    <Form.Item label="Rebanho" name="flock_id">
                    <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Matriz" name="dam_id">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Reprodutor" name="sire_id">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Data de cobertura" name="dt_coverage">
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
                <h1>Manejos Reprodutivos</h1>
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

export default ReproductiveManagementList;