import React, { useReducer, useContext } from 'react';
import { contextoTareas } from '../components/ListaTareas'

// Acciones
const COMPLETAR = 'COMPLETAR';

const tareaReducer = (state, action) => {

  switch (action.type) {
    case COMPLETAR:
      if(state.completada){
        return {
          ...state,
          completada: false
        }
      }else {
        return {
          ...state,
          completada: true
        }
      }
  
    default:
      break;
  }
}

const Tarea = ({index}) => {
  
  // Trae el contexto desde lista de tareas.
  const contexto = useContext(contextoTareas);

  // Conecta el reducer con el estado
  const [state, dispatch] = useReducer(tareaReducer, contexto)

     // Obtiene todas las variables del estado
  const { completada } = state;

  const tareaCompleta = {
    color: 'gray',
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }
  const tareaPendiente = {
    color: 'tomato',
    fontWeight: 'bold'
  }

  const completar = () => {
    dispatch({type: COMPLETAR});
    contexto.tareas[index].completada = !contexto.tareas[index].completada;

  }

  // Retorna iconos dependiendo de la completitud de la tarea
  function iconoTarea() {
    if(completada){
      return(<button onClick={completar} style={{color: 'green'}}>---</button>);
    }
      else{
        return(<button onClick={completar}  style={{color: 'gray'}}>---</button>);
      }
    }


  return (
      <tr className='fw-normal' style={contexto.tareas[index].completada ? tareaCompleta : tareaPendiente}>
        <th>
          <span className='ms-2'>{contexto.tareas[index].titulo}</span>
        </th>
        <td className='align-middle'>
          {iconoTarea()}
        </td>
        <td>
        <button onClick={() => contexto.eliminar(index)} style={{color: 'tomato', fontSize: '20px'}}>X</button>
        </td>    
      </tr>
  );
}

export default Tarea;
