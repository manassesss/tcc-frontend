"use client"
import IllnessesForm from "../components/illnessesForm";
import { Breadcrumb } from "antd";
import { useRouter } from 'next/navigation';
import { useParams  } from 'next/navigation';


const IllnessesEdit = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id?.[0];
    const onSaved = () => {
        router.back();
      };
    return (
        <div>
            <Breadcrumb
              items={[{title: 'Cadastros'},{title: <a href="/illnesses">Doenças</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <IllnessesForm onSaved={onSaved}/>
        </div>
    );
}

export default IllnessesEdit