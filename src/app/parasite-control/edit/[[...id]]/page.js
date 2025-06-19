"use client"
import ParasiteControlForm from "../components/ParasiteControlForm";
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
              items={[{title: 'Controle Animal'},{title: <a href="/parasite-control">Controle Parasitário</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <ParasiteControlForm onSaved={onSaved}/>
        </div>
    );
}

export default EmployeesEdit