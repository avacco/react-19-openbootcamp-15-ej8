import React, { useState } from 'react';
import Tarea from './Tarea';
import TareaForm from './FormTareas';

// Contexto
export const contextoTareas = React.createContext(null);

const ListaTareas = () => { 
 
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState(false);

  const agregarTarea = (tarea) => {
    const tareaTemp = [...tareas];
    tareaTemp.push(tarea);
    setTareas(tareaTemp);
  }

  const eliminarTarea = (index) => {
    const tareasTemp = [...tareas];
    tareasTemp.splice(index,1);
    setTareas(tareasTemp);
  }

  const filtrar = () => {
    setFiltro(!filtro);
  }




  return (
    <contextoTareas.Provider value={{tareas: tareas, eliminar: eliminarTarea}}>
      <div>
        <table className='table'>
          <thead>  
            <tr>
              <th scope='col'>Titulo</th>
              <th scope='col'>Acciones</th>
              <th scope='col'><button onClick={filtrar}>{ filtro ? 'Mostrar listos' : 'Ocultar listos'}</button></th>
            </tr>
          </thead>
          <tbody>            
          { tareas.map((tareas, index) => {
            if(!filtro){
            return (
                <Tarea key={index} index={index} />
            )
          }else if(filtro  && !tareas.completada){
            return (
              <Tarea key={index} index={index} />
            )
          }
          })}  
          </tbody>
        </table>
        <TareaForm agregar={agregarTarea}/>
      </div>
    </contextoTareas.Provider>
  );
}

export default ListaTareas;
