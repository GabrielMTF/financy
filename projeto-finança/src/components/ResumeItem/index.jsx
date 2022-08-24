import React from 'react';
import * as C from './styles';

const ResumeItem = ({ Title, Icon, value, color }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{Title}</C.HeaderTitle>
                <Icon color={color}/>
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    )
}
export default ResumeItem;