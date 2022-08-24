import React from 'react';
import * as C from './styles';
import ResumeItem from '../ResumeItem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem color='green' Title="Entradas" Icon={FaRegArrowAltCircleUp} value='5000'/>
            <ResumeItem color='red' Title="Saída" Icon={FaRegArrowAltCircleDown} value='600'/>
            <ResumeItem color='gold' Title="Total" Icon={FaDollarSign} value='4400'/>
        </C.Container>
    )
}

export default Resume;