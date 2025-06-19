import React, { useEffect, useState } from "react";
import { useParams  } from 'next/navigation';
import { AiOutlineLeft } from 'react-icons/ai';
import { Alert, Button, Card, Form, Input, Space, Row, Col, Select, Collapse, DatePicker, InputNumber} from 'antd';


const { Panel } = Collapse;
const { TextArea } = Input;

const ReproductiveManagementForm = ({onSaved}) => {
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [toast, setToast] = useState(false);
    const [action, setAction] = useState('save');
    const [employeeData, setEmplyeeData] = useState({
        id: '',
        flock_id: "",                // Identifier for the flock
        dam_id: "",                  // Identifier for the dam (female animal)
        dt_coverage: "",             // Date of coverage (mating)
        weight_dam: "",              // Weight of the dam (kg)
        observation: ""
        
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
                                {action === 'save' ? 'Adicionar' : 'Editar'} Movimentação Animal
                            </div>
                        <div></div>
                        </div>
                    }
                    >
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    label="Animal:"
                                    name="flock_id"
                                    rules={[{ required: true, message: 'Insira o rebanho ' }]}
                                    >
                                    <Select value={employeeData?.flock_id} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Motivo da Saída:"
                                    name="dam_id"
                                    rules={[{ required: true, message: 'Insira a matriz' }]}
                                    >
                                    <Select value={employeeData?.dam_id} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Data da cobertura:"
                                    name="cd_childbirth"
                                    rules={[{ required: true, message: 'Insira a data da cobertura' }]}
                                    >
                                    <DatePicker style={{width: '100%'}} value={employeeData?.dt_coverage} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Peso da Matriz:"
                                    name="weight_dam"
                                    rules={[{ required: true, message: 'Insira o peso da matriz' }]}
                                    >
                                    <Input value={employeeData?.weight_dam} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    label="Observação:"
                                    name="observation"
                                    >
                                    <TextArea value={employeeData?.observation} />
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
export default ReproductiveManagementForm