import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface IProps {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: IProps) {
    const [tempo, setTempo] = useState<number>();

    // Sempre que a variável selecionado for alterada, verificamos se o tempo está presente no objeto selecionado
    // e alteramos o state da variável tempo.
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao>Começar!</Botao>
        </div>
    )
}