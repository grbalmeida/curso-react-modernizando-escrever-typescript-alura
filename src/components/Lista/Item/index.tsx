import { ITarefa } from '../../../types/tarefa';
import style from '../Lista.module.scss';

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
    console.log('item atual: ', { tarefa, tempo, selecionado, completado, id })
    return (
        <li
            className={style.item}
            onClick={() => selecionaTarefa({
                id,
                tarefa,
                tempo,
                selecionado,
                completado
            })}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}