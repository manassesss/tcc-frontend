import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Checkbox, 
  Button, 
  InputNumber, 
  Select, 
  Steps,
  Row, 
  Col, 
  Space,
  Divider,
  Typography,
  Breadcrumb
} from 'antd';
import { 
  AiOutlineLeft, 
  AiOutlineRight, 
  AiOutlineUp, 
  AiOutlineDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHome
} from 'react-icons/ai';

const { Title, Text } = Typography;
const { Step } = Steps;

const HerdSelectionUI = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedHerds, setSelectedHerds] = useState([]);
  const [selectedMales, setSelectedMales] = useState([]);
  const [selectedFemales, setSelectedFemales] = useState([]);

  // Mock data for herds
  const herdsData = [
    { id: 1, name: 'Rebanho A', farm: 'Fazenda São João' },
    { id: 2, name: 'Rebanho B', farm: 'Fazenda Santa Maria' },
    { id: 3, name: 'Rebanho C', farm: 'Fazenda Boa Vista' },
    { id: 4, name: 'Rebanho D', farm: 'Fazenda Esperança' },
    { id: 5, name: 'Rebanho E', farm: 'Fazenda Nova' },
  ];

  // Mock data for animals
  const malesData = [
    { id: 1, name: 'Animal 10', dep: 0.001, inbreeding: 1.281 },
    { id: 2, name: 'Animal 1', dep: 0.000, inbreeding: 1.000 },
    { id: 3, name: 'Animal 5', dep: 0.000, inbreeding: 1.250 },
    { id: 4, name: 'Animal 17', dep: 0.000, inbreeding: 1.375 },
    { id: 5, name: 'Animal 9', dep: -0.001, inbreeding: 1.375 },
  ];

  const femalesData = [
    { id: 6, name: 'Animal 16', dep: 1.011, inbreeding: 1.445 },
    { id: 7, name: 'Animal 15', dep: 0.410, inbreeding: 1.453 },
    { id: 8, name: 'Animal 3', dep: 0.341, inbreeding: 1.250 },
    { id: 9, name: 'Animal 7', dep: 0.125, inbreeding: 1.375 },
    { id: 10, name: 'Animal 8', dep: 0.060, inbreeding: 1.375 },
    { id: 11, name: 'Animal 2', dep: 0.000, inbreeding: 1.000 },
    { id: 12, name: 'Animal 6', dep: 0.000, inbreeding: 1.250 },
  ];

  // Mock data for report
  const reportData = [
    { id: 1, damName: 'Animal 10', sireName: 'Animal 16', depExpected: 0.526, genValue: 8.955, inbreeding: 0.500 },
    { id: 2, damName: 'Animal 19', sireName: 'Animal 15', depExpected: 0.205, genValue: 8.353, inbreeding: 0.387 },
    { id: 3, damName: 'Animal 5', sireName: 'Animal 3', depExpected: 0.172, genValue: 8.286, inbreeding: 0.375 },
    { id: 4, damName: 'Animal 10', sireName: 'Animal 7', depExpected: 0.063, genValue: 8.009, inbreeding: 0.391 },
    { id: 5, damName: 'Animal 10', sireName: 'Animal 8', depExpected: 0.031, genValue: 8.004, inbreeding: 0.500 },
    { id: 6, damName: 'Animal 1', sireName: 'Animal 2', depExpected: 0.000, genValue: 7.943, inbreeding: 0.250 },
  ];

  const herdColumns = [
    {
      title: '',
      dataIndex: 'select',
      width: 50,
      render: (_, record) => (
        <Checkbox
          checked={selectedHerds.includes(record.id)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedHerds([...selectedHerds, record.id]);
            } else {
              setSelectedHerds(selectedHerds.filter(id => id !== record.id));
            }
          }}
        />
      ),
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Fazenda',
      dataIndex: 'farm',
      key: 'farm',
    },
  ];

  const animalColumns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'DEP',
      dataIndex: 'dep',
      key: 'dep',
      render: (value) => value.toFixed(3),
    },
    {
      title: 'Endogamia',
      dataIndex: 'inbreeding',
      key: 'inbreeding',
      render: (value) => value.toFixed(3),
    },
  ];

  const selectedAnimalColumns = [
    ...animalColumns/* ,
    {
      title: 'Ações',
      key: 'actions',
      width: 100,
      render: (_, record, index) => (
        <Space>
          <Button
            size="small"
            icon={<AiOutlineUp />}
            disabled={index === 0}
            onClick={() => moveAnimal(record, 'up')}
          />
          <Button
            size="small"
            icon={<AiOutlineDown />}
            disabled={index === selectedMales.length - 1 || index === selectedFemales.length - 1}
            onClick={() => moveAnimal(record, 'down')}
          />
        </Space>
      ),
    }, */
  ];

  const reportColumns = [
    {
      title: 'Nome do pai',
      dataIndex: 'damName',
      key: 'damName',
    },
    {
      title: 'Nome da mãe',
      dataIndex: 'sireName',
      key: 'sireName',
    },
    {
      title: 'DEP Esperada',
      dataIndex: 'depExpected',
      key: 'depExpected',
      render: (value) => value.toFixed(3),
    },
    {
      title: 'Ganho Genético',
      dataIndex: 'genValue',
      key: 'genValue',
      render: (value) => value.toFixed(3),
    },
    {
      title: 'Endogamia',
      dataIndex: 'inbreeding',
      key: 'inbreeding',
      render: (value) => value.toFixed(3),
    },
  ];

  const moveAnimal = (animal, direction) => {
    console.log('Moving animal:', animal, direction);
  };

  const transferAnimal = (animal, from, to) => {
    if (from === 'available' && to === 'selected') {
      if (animal.id <= 5) {
        setSelectedMales([...selectedMales, animal]);
      } else {
        setSelectedFemales([...selectedFemales, animal]);
      }
    } else if (from === 'selected' && to === 'available') {
      if (animal.id <= 5) {
        setSelectedMales(selectedMales.filter(a => a.id !== animal.id));
      } else {
        setSelectedFemales(selectedFemales.filter(a => a.id !== animal.id));
      }
    }
  };

  const handleNext = () => {
    if (currentStep === 0 && selectedHerds.length === 0) {
      alert('Selecione pelo menos um rebanho');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 0: return 'Seleção Individual ou Manual';
      case 1: return 'Seleção de Animais';
      case 2: return 'Relatório Acasalamento NSGA-II';
      default: return '';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div style={{ marginBottom: 20 }}>
              <Title level={5}>Rebanhos cadastrados na fazenda</Title>
              <Table
                dataSource={herdsData}
                columns={herdColumns}
                rowKey="id"
                pagination={{
                  pageSize: 5,
                  showSizeChanger: true,
                  showQuickJumper: true,
                }}
                size="small"
              />
              <Text>{selectedHerds.length} rebanhos selecionados.</Text>
            </div>

            <div>
              <Row gutter={16}>
                <Col span={6}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>
                      Herdabilidade:
                    </label>
                    <InputNumber
                      style={{ width: '100%' }}
                      min={0}
                      max={1}
                      step={0.1}
                      defaultValue={0.3}
                      placeholder="0.3"
                    />
                  </div>
                </Col>
                
                <Col span={6}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>
                      Idade Mín. Fêmea:
                    </label>
                    <InputNumber
                      style={{ width: '100%' }}
                      min={1}
                      defaultValue={1}
                      placeholder="1"
                      addonAfter="meses"
                    />
                  </div>
                </Col>
                
                <Col span={6}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>
                      Idade Mín. Macho:
                    </label>
                    <InputNumber
                      style={{ width: '100%' }}
                      min={1}
                      defaultValue={1}
                      placeholder="1"
                      addonAfter="meses"
                    />
                  </div>
                </Col>
                
                <Col span={6}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 'bold' }}>
                      Ajuste do Peso:
                    </label>
                    <Select style={{ width: '100%' }} defaultValue="60 dias">
                      <Select.Option value="60 dias">60 dias</Select.Option>
                      <Select.Option value="120 dias">120 dias</Select.Option>
                      <Select.Option value="180 dias">180 dias</Select.Option>
                    </Select>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        );

      case 1:
        return (
          <>
            {/* Males Section */}
            <div style={{ marginBottom: 40 }}>
              <Title level={4}>Machos</Title>
              <Row gutter={16}>
                <Col span={10}>
                  <Card title="Disponíveis" size="small">
                    <Table
                      dataSource={malesData.filter(male => !selectedMales.find(s => s.id === male.id))}
                      columns={[
                        ...animalColumns,
                        {
                          title: '',
                          key: 'select',
                          width: 50,
                          render: (_, record) => (
                            <Button
                              size="small"
                              icon={<AiOutlineRight />}
                              onClick={() => transferAnimal(record, 'available', 'selected')}
                            />
                          ),
                        },
                      ]}
                      rowKey="id"
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                
                <Col span={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Space direction="vertical" size="large">
                    <Button
                      icon={<AiOutlineArrowRight />}
                      onClick={() => console.log('Transfer all to selected')}
                    >
                      Todos →
                    </Button>
                    <Button
                      icon={<AiOutlineArrowLeft />}
                      onClick={() => console.log('Transfer all to available')}
                    >
                      ← Todos
                    </Button>
                  </Space>
                </Col>
                
                <Col span={10}>
                  <Card title="Selecionados" size="small">
                    <Table
                      dataSource={selectedMales}
                      columns={[
                        {
                          title: '',
                          key: 'remove',
                          width: 50,
                          render: (_, record) => (
                            <Button
                              size="small"
                              icon={<AiOutlineLeft />}
                              onClick={() => transferAnimal(record, 'selected', 'available')}
                            />
                          ),
                        },
                        ...selectedAnimalColumns,
                      ]}
                      rowKey="id"
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
              </Row>
            </div>

            <Divider />

            {/* Females Section */}
            <div>
              <Title level={4}>Fêmeas</Title>
              <Row gutter={16}>
                <Col span={10}>
                  <Card title="Disponíveis" size="small">
                    <Table
                      dataSource={femalesData.filter(female => !selectedFemales.find(s => s.id === female.id))}
                      columns={[
                        ...animalColumns,
                        {
                          title: '',
                          key: 'select',
                          width: 50,
                          render: (_, record) => (
                            <Button
                              size="small"
                              icon={<AiOutlineRight />}
                              onClick={() => transferAnimal(record, 'available', 'selected')}
                            />
                          ),
                        },
                      ]}
                      rowKey="id"
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                
                <Col span={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Space direction="vertical" size="large">
                    <Button
                      icon={<AiOutlineArrowRight />}
                      onClick={() => console.log('Transfer all females to selected')}
                    >
                      Todos →
                    </Button>
                    <Button
                      icon={<AiOutlineArrowLeft />}
                      onClick={() => console.log('Transfer all females to available')}
                    >
                      ← Todos
                    </Button>
                  </Space>
                </Col>
                
                <Col span={10}>
                  <Card title="Selecionadas" size="small">
                    <Table
                      dataSource={selectedFemales}
                      columns={[
                        {
                          title: '',
                          key: 'remove',
                          width: 50,
                          render: (_, record) => (
                            <Button
                              size="small"
                              icon={<AiOutlineLeft />}
                              onClick={() => transferAnimal(record, 'selected', 'available')}
                            />
                          ),
                        },
                        ...selectedAnimalColumns,
                      ]}
                      rowKey="id"
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div style={{ marginBottom: 20 }}>
              <Title level={5}>Relatório Acasalamento NSGA-II</Title>
              <Table
                dataSource={reportData}
                columns={reportColumns}
                rowKey="id"
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                }}
                size="small"
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <Button type="primary">
                Opções de exportação: xls
              </Button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 20 }}>
         <Breadcrumb
            items={[
              {
                title: <strong>Acasalamento</strong>,
              },
            ]}
          />
      </div>

      <Card
        title={getStepTitle()}
        extra={currentStep === 2 ? <span>?</span> : null}
      >
        <Steps current={currentStep} style={{ marginBottom: 24 }}>
          <Step title="Rebanho" />
          <Step title="Prop. Casais" />
          <Step title="Relatório" />
        </Steps>

        {renderStepContent()}

        <div style={{ marginTop: 24, textAlign: 'right' }}>
          <Space>
            {currentStep > 0 && (
              <Button onClick={handlePrevious}>
                Voltar
              </Button>
            )}
            {currentStep < 2 && (
              <Button type="primary" onClick={handleNext}>
                Próximo
              </Button>
            )}
          </Space>
        </div>
      </Card>
    </main>
  );
};

export default HerdSelectionUI;