"use client";
import { Space, Tooltip, Button, Table, Card, Input, Row, Breadcrumb, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined }  from '@ant-design/icons';
import { MdOutlineOpenInNew } from "react-icons/md";

import React from 'react';

const { Search } = Input;


const  IllnessesList = () => {
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
          nome: 'Brucelose',
          causa: 'Bactéria do gênero *Brucella*',
          profilaxia: 'Vacinação, higiene no manejo e controle de animais infectados.',
          sintomas: 'Abortos, retenção de placenta, infertilidade e febre.',
          tratamento: 'Não há tratamento efetivo; animais infectados devem ser eliminados do rebanho.',
        },
        {
          id: '2',
          nome: 'Clostridiose',
          causa: 'Bactérias do gênero *Clostridium*',
          profilaxia: 'Vacinação regular com vacinas polivalentes contra clostridioses.',
          sintomas: 'Diarreia, apatia, febre e morte súbita.',
          tratamento: 'Antibióticos específicos e terapia de suporte.',
        },
        {
          id: '3',
          nome: 'Ectima Contagioso',
          causa: 'Vírus do gênero *Parapoxvirus*',
          profilaxia: 'Isolamento de animais doentes e vacinação preventiva.',
          sintomas: 'Lesões crostosas na boca, lábios, focinho e membros.',
          tratamento: 'Cuidado com as feridas e uso de pomadas antibióticas.',
        },
        {
          id: '4',
          nome: 'Linfonodose Caseosa',
          causa: 'Bactéria *Corynebacterium pseudotuberculosis*',
          profilaxia: 'Vacinação e controle rigoroso do manejo sanitário.',
          sintomas: 'Abscessos nos linfonodos superficiais e internos.',
          tratamento: 'Drenagem dos abscessos e aplicação de antibióticos.',
        },
        {
          id: '5',
          nome: 'Parasitose Gastrointestinal',
          causa: 'Vermes gastrointestinais como *Haemonchus contortus*',
          profilaxia: 'Vermifugação regular e manejo rotativo de pastagens.',
          sintomas: 'Diarreia, anemia, perda de peso e apatia.',
          tratamento: 'Administração de anti-helmínticos adequados.',
        },
        {
          id: '6',
          nome: 'Pneumonia',
          causa: 'Bactérias, vírus ou condições ambientais adversas',
          profilaxia: 'Boa ventilação, evitar aglomerações e manejo adequado.',
          sintomas: 'Tosse, febre, secreção nasal e dificuldade respiratória.',
          tratamento: 'Antibióticos, anti-inflamatórios e cuidados específicos.',
        },
        {
          id: '7',
          nome: 'Pododermatite',
          causa: 'Infecção bacteriana causada por condições de umidade excessiva.',
          profilaxia: 'Higiene adequada dos apriscos e tratamento preventivo dos cascos.',
          sintomas: 'Claudicação, inflamação e lesões nos cascos.',
          tratamento: 'Antibióticos, limpeza dos cascos e uso de desinfetantes.',
        },
        {
          id: '8',
          nome: 'Coccidiose',
          causa: 'Protozoários do gênero *Eimeria*',
          profilaxia: 'Higiene rigorosa, evitar superlotação e uso de coccidiostáticos.',
          sintomas: 'Diarreia com sangue, fraqueza e perda de peso.',
          tratamento: 'Administração de medicamentos anticoccidianos.',
        },
        {
          id: '9',
          nome: 'Febre Aftosa',
          causa: 'Vírus do gênero *Aphtovirus*',
          profilaxia: 'Vacinação obrigatória e controle do trânsito de animais.',
          sintomas: 'Lesões na boca, língua, tetos e cascos; febre.',
          tratamento: 'Isolamento, cuidados paliativos e higiene rigorosa.',
        },
        {
          id: '10',
          nome: 'Lombriga Pulmonar',
          causa: 'Vermes pulmonares como *Dictyocaulus filaria*',
          profilaxia: 'Vermifugação preventiva e controle de pastagens.',
          sintomas: 'Tosse persistente, dificuldade respiratória e perda de peso.',
          tratamento: 'Uso de vermífugos específicos.',
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
          <Modal
            title={<p>Detalhes de {details?.nome}</p>}
            loading={loading}
            open={open}
            footer={null}
            centered
            onCancel={() => setOpen(false)}
        >
            <p><b>Nome:</b> {details?.nome}</p>
            <p><b>Causa:</b> {details?.causa}</p>
            <p><b>Profilaxia:</b> {details?.profilaxia}</p>
            <p><b>Sintomas:</b> {details?.sintomas}</p>
            <p><b>Tratamento:</b> {details?.tratamento}</p>
        </Modal>
        </Space>
      </main>
    </>
  );
}

export default IllnessesList;