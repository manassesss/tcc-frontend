"use client"
import AnimalMovimentationForm from "../components/AnimalMovimentationForm";
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
              items={[{title: 'Controle Animal'},{title: <a href="animal-movimentation">Movimentação Animal</a>},{title: <strong>{id ? 'Editar' : 'Adicionar'}</strong>},]}
            />
            <AnimalMovimentationForm onSaved={onSaved}/>
        </div>
    );
}

export default AnimalMovimentationEdit