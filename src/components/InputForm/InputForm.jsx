import styles from"./InputForm.module.css" //Uso module.css para que no haya conflictos de estilos entre componentes

function InputForm({
    label,  //etiqueta del input
    name,     //nombre del input (para cuando lo envío al servidor)
    value,    //define el valor inicial del input (lo que se muestra en el campo) para radiobuttons y checkboxes
    onChange,  //función que se ejecuta cuando cambia el valor del input (para actualizar el estado en el componente padre)
    placeholder = "Escribe aquí...",
    type = "text",
    icon = null,
    onClick = null,
    as = "input", // "input" o "textarea" o "select"
    options = [], // Sólo si es select
    ...rest
  }) {
    const isSelect = as === "select";       // para evaluar si el componente se renderiza como true si el input es un select
    const isTextarea = as === "textarea";   // true si el input es un textarea

    return (
      <div className={styles.InputFormContainer}>
        {label && (       // renderiza la etiqueta si existe
          <label htmlFor={name} className={styles.inputlabel}>
            {label}
          </label>
        )}

        <div className={styles.inputWrapper}>   {/* Si es select, renderiza un <select> con las opciones */}
          {isSelect ? (
            <select
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              className={styles.inputField}
              {...rest}
            >
              <option value="">{placeholder}</option>   {/* opción por defecto vacía con el placeholder */}
              {options.map((option) => (  // renderiza las opciones del select
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : isTextarea ? (  //si no es select, evalua si es textarea
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={`${styles.inputField} ${icon ? styles.withIcon : ""}`}
              {...rest}
            />
          ) : (
            <input        //si no es select ni textarea, renderiza un input(puede ser text, password, email, etc.)
              id={name}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={`${styles.inputField} ${icon ? styles.withIcon : ""}`}
              {...rest}
            />
          )}

          {icon && (    //si hay un icono, renderiza el icono {/* Si se pasó un ícono, lo renderiza al lado del input */}
            <div 
                className={styles.iconWrapper} 
                onClick={onClick}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }
  

export default InputForm; 

