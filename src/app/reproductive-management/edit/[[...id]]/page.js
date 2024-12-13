"use client"
import ReproductiveManagementForm from "../components/ReproductiveManagementForm";
import { Breadcrumb } from "antd";
import { useRouter } from 'next/navigation';
import { useParams  } from 'next/navigation';


const ReproductiveManagementEdit = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id?.[0];
    const onSaved = () => {
        router.back();
      };
    return (
        <div>
            <Breadcrumb
              items={[{title: 'Controle Animal'},{title: <a href="reproductive-management">Manejo Reprodutivo</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <ReproductiveManagementForm onSaved={onSaved}/>
        </div>
    );
}

export default ReproductiveManagementEdit