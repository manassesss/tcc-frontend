"use client"
import React, {useState, useEffect} from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppSideMenu = () => {
    const pathName = usePathname()
    const [selectedKey, setSelectedKey] = useState(['1'])

    useEffect(() => {
        if(pathName.startsWith("/employees")) {
            setSelectedKey(["11"])
        } else if(pathName.startsWith("/flocks")) {
            setSelectedKey(["12"])
        } else if(pathName.startsWith("/animals")) {
            setSelectedKey(["13"])
        } else if(pathName.startsWith("/races")) {
            setSelectedKey(["14"])
        } else if(pathName.startsWith("/illnesses")) {
            setSelectedKey(["15"])
        } else if(pathName.startsWith("/medicines")) {
            setSelectedKey(["16"])
        } else if(pathName.startsWith("/reproductive-management")) {
            setSelectedKey(["21"])
        } else if(pathName.startsWith("/animal-movimentation")) {
            setSelectedKey(["22"])
        } else if(pathName.startsWith("/clinical-occurrence")) {
            setSelectedKey(["23"])
        }  
        
    }, [pathName] )

    const menuItems = [
        {
            label: <Link href='/courses'>Dashboard</Link>, 
            key: 0,
        },
        {
            type: 'divider'
        },
        {
            label: 'Cadastros', 
            key: 1,
            children: [
                { key: '11', label: <Link href='/employees'>Funcionários</Link> },
                { key: '12', label: <Link href='/flocks'>Rebanhos</Link> },
                { key: '13', label: <Link href='/animals'>Animais</Link> },
                { key: '14', label: <Link href='/races'>Raças</Link> },
                { key: '15', label: <Link href='/illnesses'>Doenças</Link> },
                { key: '16', label: <Link href='/medicines'>Medicamentos</Link> }, 
            ],
        },
        {
            label: 'Controle Animal', 
            key: 2,
            children: [
                { key: '21', label: <Link href='/reproductive-management'>Manejo Reprodutivo</Link> },
                { key: '22', label: <Link href='/animal-movimentation'>Movimentação Animal</Link> },
                { key: '23', label: <Link href='/clinical-occurrence'>Ocorrência Clínica</Link> },
                { key: '24', label: <Link href='/courses'>Controle Parasitário</Link> },
                { key: '25', label: <Link href='/courses'>Vacinação</Link> },
            ],
        },
        {
            label: <Link href='/courses'>Relatórios</Link>, 
            key: 3,
           
        },
        {
            label: <Link href='/courses'>Acasalamento</Link>,
            key: 4,
            
        },
        
    ];

    return (
         <Menu mode='inline' items={menuItems} selectedKeys={selectedKey}></Menu>
    );
}

export default AppSideMenu;