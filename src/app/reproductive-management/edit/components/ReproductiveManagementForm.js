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
        body_score_dam: "",          // Body condition score of the dam
        sire_id: "",                 // Identifier for the sire (male animal)
        sire_scrotal_circumference: "", // Scrotal circumference of the sire (cm)
        parturition_status: "",      // Parturition status (yes, no, or in progress)
        dt_birth: "",                // Date of birth
        parturition_type: "",        // Type of parturition (e.g., normal, cesarean)
        dt_weaning: "",               // Date of weaning
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
                                {action === 'save' ? 'Adicionar' : 'Editar'} Manejo Reprodutivo
                            </div>
                        <div></div>
                        </div>
                    }
                    >
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    label="Rebanho:"
                                    name="flock_id"
                                    rules={[{ required: true, message: 'Insira o rebanho ' }]}
                                    >
                                    <Select value={employeeData?.flock_id} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Matriz:"
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
                            <Col span={6}>
                                <Form.Item
                                    label="Escore corporal da matriz:"
                                    name="body_score_dam"
                                    rules={[{ required: true, message: 'Insira o escore corporal da matriz' }]}
                                    >
                                    <InputNumber style={{width: '100%'}} value={employeeData?.body_score_dam} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Reprodutor:"
                                    name="sire_id"
                                    rules={[{ required: true, message: 'Insira o reprodutor' }]}
                                    >
                                    <Select value={employeeData?.sire_id} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Parição:"
                                    name="parturition_type"
                                    rules={[{ required: true, message: 'Insira o tipo de parição' }]}
                                    >
                                    <Select value={employeeData?.parturition_type} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Perímetro escrotal do reprodutor:"
                                    name="sire_scrotal_circumference"
                                    >
                                    <Input value={employeeData?.sire_scrotal_circumference} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Data do parto:"
                                    name="dt_birth"
                                    >
                                    <DatePicker style={{width: '100%'}} value={employeeData?.dt_birth} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Tïpo de parto:"
                                    name="parturition_status"
                                    >
                                    <Select value={employeeData?.parturition_status} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Data do desmame:"
                                    name="dt_weaning"
                                    >
                                    <DatePicker style={{width: '100%'}} value={employeeData?.dt_weaning} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Data cio pós parto:"
                                    name="dt_weaning"
                                    >
                                    <DatePicker style={{width: '100%'}} value={employeeData?.dt_weaning} />
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