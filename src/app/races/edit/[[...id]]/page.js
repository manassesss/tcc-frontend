"use client"
import RacesForm from "../components/RacesForm";
import { Breadcrumb } from "antd";
import { useRouter } from 'next/navigation';
import { useParams  } from 'next/navigation';


const RacesEdit = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id?.[0];
    const onSaved = () => {
        router.back();
      };
    return (
        <div>
            <Breadcrumb
              items={[{title: 'Cadastros'},{title: <a href="/races">Raças</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <RacesForm onSaved={onSaved}/>
        </div>
    );
}

export default RacesEdit