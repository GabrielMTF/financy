import React from 'react';
import * as C from './styles';
import ResumeItem from '../ResumeItem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
            <ResumeItem color='green' Title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem color='red' Title="Saída" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem color='gold' Title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    )
}

export default Resume;