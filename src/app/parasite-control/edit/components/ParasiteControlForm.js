import React, { useEffect, useState } from "react";
import { useParams  } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';
import { Alert, Button, Card, Form, Input, Space, Row, Col, Select, DatePicker } from 'antd';

const EmployeesForm = ({onSaved}) => {
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [toast, setToast] = useState(false);
    const [action, setAction] = useState('save');
    const [employeeData, setEmplyeeData] = useState({
        id: '',
        name: '',
        cpf: '',
        state_id: '',
        city_id: '',
        phone: '',
        dimension: '',
        address: '',
        farm_id: ''
    });
    const [form] = Form.useForm();
    const params = useParams();
    const id = params?.id?.[0];

    const onFinish = async (data) => {
        setErrorMessage('Salvo com sucesso');
        setToast(true);
        onSaved();
    }
    useEffect(() => {
        if(id) {
            setAction('edit')
        }
    }, [id])

    return (
        <>
            <main style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Space direction="vertical">
                    <Card
                    title={
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div style={{cursor: 'pointer'}}>
                                <AiOutlineLeft onClick={() => onSaved()} />
                            </div>
                            <div>
                                {action === 'save' ? 'Adicionar' : 'Editar'} Controle Parasitário
                            </div>
                        <div></div>
                        </div>
                    }
                    >
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Animal:"
                                    name="name"
                                    rules={[{ required: true, message: 'Insira o nome ' }]}
                                    >
                                    <Input value={employeeData?.name} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Medicamento:"
                                    name="cpf"
                                    rules={[{ required: true, message: 'Insira o cpf ' }]}
                                    >
                                    <Input value={employeeData?.cpf} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Data da Vermifugação:"
                                    name="email"
                                    rules={[{ required: true, message: 'Insira o e-mail ' }]}
                                    >
                                    <DatePicker style={{width: '100%'}} value={employeeData?.dt_birth} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Tïpo Mucosa:"
                                    name="parturition_status"
                                    >
                                    <Select value={employeeData?.phone} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Nível de Ovos por Grama de Fezes Pré Vermifugação:"
                                    name="phone"
                                    rules={[{ required: true, message: 'Insira o telefone ' }]}
                                    >
                                    <Input value={employeeData?.phone} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Nível de Ovos por Grama de Fezes Pós Vermifugação:"
                                    name="phone"
                                    rules={[{ required: true, message: 'Insira o telefone ' }]}
                                    >
                                    <Input value={employeeData?.phone} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Escore Corporal:"
                                    name="phone"
                                    rules={[{ required: true, message: 'Insira o telefone ' }]}
                                    >
                                    <Input value={employeeData?.phone} />
                                </Form.Item>
                            </Col>
                            
                            
                        </Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Salvar
                            </Button>
                        </Form.Item>
                    </Form>
                    </Card>
                </Space>
            </main>
        </>
    );
}
export default EmployeesForm