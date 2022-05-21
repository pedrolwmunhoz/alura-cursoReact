import Botao from "../botao"
import Relogio from "./relogio"
import style from './cronometro.module.scss'
export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>escolha um card e inicie o Cronomêtro</p>
        <div className={style.relogioWrapper}>
            <Relogio/>
        </div>
        
        <Botao texto="Começar!"/>
        </div>

    )
}