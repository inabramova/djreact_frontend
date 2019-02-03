import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const CustomLayout = (props) => {
    return(
        <Layout>
        <Header>Header</Header>
        <Content>
            <div style={{background:'#fff', padding:24}}>
                {props.children}
            </div>
        </Content>
        </Layout>
    )}

export default CustomLayout;