import React from 'react';
import { Header}  from 'antd/es/layout/layout';
import { DeploymentUnitOutlined, UserOutlined }  from '@ant-design/icons';
import { Avatar } from 'antd';

const AppHeader = () => {
    return (
        <Header className='!bg-white border-[#f1f1f1] flex items-center justify-between'>
            <div className='flex  items-center gap-2'>
                <DeploymentUnitOutlined className='text-3xl' />
                <div>INOVI</div>
            </div>
            <div className='flex  items-center gap-2'>
                <Avatar size={36} icon={<UserOutlined />} />
                <div>Avatar</div>
            </div>

        </Header>
    );
}

export default AppHeader;