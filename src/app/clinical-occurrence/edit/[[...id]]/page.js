"use client"
import ClinicalOccurrenceForm from "../components/ClinicalOccurrenceForm";
import { Breadcrumb } from "antd";
import { useRouter } from 'next/navigation';
import { useParams  } from 'next/navigation';


const AnimalMovimentationEdit = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id?.[0];
    const onSaved = () => {
        router.back();
      };
    return (
        <div>
            <Breadcrumb
              items={[{title: 'Controle Animal'},{title: <a href="clinical-occurrence">Ocorrência Clínica</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <ClinicalOccurrenceForm onSaved={onSaved}/>
        </div>
    );
}

export default AnimalMovimentationEdit