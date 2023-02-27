import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const FormTareas = ({agregar}) => {

  const tituloRef = useRef('');

  function agregarTarea(e) {
    e.preventDefault();

    const tareaNueva = {
      titulo: tituloRef.current.value,
      completada: false
    };
    agregar(tareaNueva);
  }

  return (
    <form onSubmit={agregarTarea} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={tituloRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre de la tarea'/>
        <button type='submit' className='btn btn-success btn-lg ms-2'>Añadir tarea</button>
      </div>
    </form>
  );
}

FormTareas.propTypes = {
  agregar: PropTypes.func.isRequired,
}

export default FormTareas;
