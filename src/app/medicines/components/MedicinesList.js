"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Breadcrumb, Modal, Form, Select } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import { MdOutlineOpenInNew } from "react-icons/md";

import React from 'react';

const { Search } = Input;


const  MedicinesList = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [details, setDetails] = React.useState({})
    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        setTimeout(() => {
        setLoading(false);
        }, 2000);
    };
    const dataSource = [
        {
          id: '1',
          nome: 'Ivermectina',
          descricao: 'Antiparasitário utilizado no controle de vermes gastrointestinais, pulmonares e ectoparasitas como carrapatos e piolhos.',
        },
        {
          id: '2',
          nome: 'Oxitetraciclina',
          descricao: 'Antibiótico de amplo espectro utilizado no tratamento de infecções bacterianas respiratórias, uterinas e dérmicas.',
        },
        {
          id: '3',
          nome: 'Clostrivet',
          descricao: 'Vacina polivalente para prevenção de clostridioses como tétano, enterotoxemia e carbúnculo sintomático.',
        },
        {
          id: '4',
          nome: 'Albendazol',
          descricao: 'Vermífugo utilizado no controle de parasitas gastrointestinais e pulmonares, com ação também em protozoários.',
        },
        {
          id: '5',
          nome: 'Flunixin Meglumine',
          descricao: 'Anti-inflamatório e analgésico usado no controle da dor e da inflamação, especialmente em casos de febre e claudicação.',
        },
        {
          id: '6',
          nome: 'Levamisol',
          descricao: 'Antiparasitário usado no combate a vermes gastrointestinais e pulmonares, com efeito imunomodulador em alguns casos.',
        },
        {
          id: '7',
          nome: 'Dexametasona',
          descricao: 'Corticosteroide utilizado no controle de processos inflamatórios e reações alérgicas.',
        },
        {
          id: '8',
          nome: 'Amoxicilina',
          descricao: 'Antibiótico eficaz contra infecções bacterianas como mastites, pneumonias e infecções de pele.',
        },
        {
          id: '9',
          nome: 'Meloxicam',
          descricao: 'Anti-inflamatório não esteroidal utilizado para reduzir inflamações e dores em articulações e tecidos moles.',
        },
        {
          id: '10',
          nome: 'Enrofloxacina',
          descricao: 'Antibiótico de amplo espectro indicado para infecções respiratórias, geniturinárias e dérmicas.',
        },
        {
          id: '11',
          nome: 'Toltrazuril',
          descricao: 'Medicamento utilizado no tratamento e controle de coccidiose em ruminantes e aves.',
        },
        {
          id: '12',
          nome: 'Cetoprofeno',
          descricao: 'Anti-inflamatório e analgésico usado para reduzir dor e febre em diversas condições inflamatórias.',
        },
        {
          id: '13',
          nome: 'Sulfaquinoxalina',
          descricao: 'Antibacteriano utilizado no tratamento de infecções entéricas como a coccidiose.',
        },
        {
          id: '14',
          nome: 'Metronidazol',
          descricao: 'Antimicrobiano utilizado no tratamento de infecções por protozoários e bactérias anaeróbicas.',
        },
        {
          id: '15',
          nome: 'Pencivet',
          descricao: 'Antibiótico à base de penicilina, usado no tratamento de infecções bacterianas em animais.',
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
      title: 'Ações',
      key: 'actions',
      render: (_, record) => (
        <Space>
            <Tooltip title="Detalhes">
                <Button
                shape="circle"
                type="primary"
                icon={<MdOutlineOpenInNew />}
                onClick={() => handleDetails(record)}
                />
          </Tooltip>
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
  const handleDetails = (record) => {
    setDetails(record)
    showLoading()
  };
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
                  title: <strong>Raças</strong>,
                },
              ]}
            />
          <Card title="Filtros">
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
          <Modal
            title={<p>Detalhes de {details?.nome}</p>}
            loading={loading}
            open={open}
            footer={null}
            centered
            onCancel={() => setOpen(false)}
        >
            <p>{details?.descricao}</p>
            
        </Modal>
        </Space>
      </main>
    </>
  );
}

export default MedicinesList;