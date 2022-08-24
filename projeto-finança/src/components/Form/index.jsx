import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '../Grid';
import * as C from './styles';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if (!desc || !amount) {
            toast.warning("Informe a descrição e o valor!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        } else if (amount < 1) {
            toast.warning("O valor deve ser positivo!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc('');
        setAmount('');
    }



    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type='radio'
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rIncome" >Entrada</C.Label>
                    <C.Input
                        type='radio'
                        id='rExpenses'
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor="rExpenses" >Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
                <ToastContainer />
            </C.Container>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    )
}

export default Form;