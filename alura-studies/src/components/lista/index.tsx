import React from 'react';
import style from './lista.module.scss';
import Item from './item';

function Lista() {
    let tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }]
    return (
        <aside className={style.ListaTarefas}>
            <h2 onClick={()=> 
            tarefas = [...tarefas,{tarefa: "Estudar estado", tempo: "00:00:00"}]}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )

}

export default Lista;