"use client"
import MedicinesForm from "../components/medicinesForm";
import { Breadcrumb } from "antd";
import { useRouter } from 'next/navigation';
import { useParams  } from 'next/navigation';


const MedicinesEdit = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id?.[0];
    const onSaved = () => {
        router.back();
      };
    return (
        <div>
            <Breadcrumb
              items={[{title: 'Cadastros'},{title: <a href="/medicines">Medicamentos</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <MedicinesForm onSaved={onSaved}/>
        </div>
    );
}

export default MedicinesEdit