import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface IProps extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
}: IProps) {
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && selecionaTarefa({
                id,
                tarefa,
                tempo,
                selecionado,
                completado
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}