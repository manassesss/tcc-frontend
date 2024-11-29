"use client"
import EmployeesForm from "../components/EmployeesForm";
import { Breadcrumb } from "antd";
import { useRouter } from 'next/navigation';
import { useParams  } from 'next/navigation';


const EmployeesEdit = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id?.[0];
    const onSaved = () => {
        router.back();
      };
    return (
        <div>
            <Breadcrumb
              items={[{title: 'Cadastros'},{title: <a href="/employees">Funcionários</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <EmployeesForm onSaved={onSaved}/>
        </div>
    );
}

export default EmployeesEdit