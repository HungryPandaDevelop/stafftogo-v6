import React, { useState, useEffect, useRef } from 'react';
import { Field } from 'redux-form';

const TemplateSelect = (props) => {

  const { nameField, label, labelSecond, options, getData, updateReduxForm } = props;

  const componentRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current
        if (!ref.contains(e.target)) {
          setOpen(false)
        }
      }
    }

  }, []);


  const [open, setOpen] = useState(false);

  const [select, setSelect] = useState(options[0]);

  let currentOption = options[0];

  if (getData) {
    // console.log('currentOption', getData, nameField)

    if (nameField in getData) { // условие для обычного элемента
      currentOption = options.filter((item) => item.value === getData[nameField])[0];
    }

  }





  useEffect(() => {
    //console.log(currentOption)
    setSelect(currentOption);
  }, [currentOption])

  const onSelectedChange = (li) => {
    setSelect(li);

    getData[nameField] = li.value;

    updateReduxForm(getData);
  }


  const renderOptions = options.map((li) => {

    if (li.value === select.value) {
      return null;
    }
    return (
      <li key={li.value} data-id={li.value} onClick={() => { onSelectedChange(li) }}>{li.label}</li>
    )
  });

  return (
    <div className="form-line">
      {label && (<label><b>{label}</b> <span>{labelSecond}</span></label>)}
      <div ref={componentRef} className={`custom-select ${open ? 'active' : ''}`} onClick={() => { setOpen(!open) }} >
        <span>{select.label}</span>
        <i></i>
        <ul className="ln">
          {renderOptions}
        </ul>
      </div>
    </div>
  )
}

const RenderInputSelect = (name, label, labelSecond, options, value, updateReduxForm, incouple, extraName) => {
  // console.log('field', value)
  return (
    <Field
      name={name}
      nameField={name}
      label={label}
      labelSecond={labelSecond}
      options={options}
      getData={value}
      updateReduxForm={updateReduxForm}
      component={TemplateSelect}

    />
  )
}

export default RenderInputSelect;