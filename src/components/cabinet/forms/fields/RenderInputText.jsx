import { Field } from 'redux-form';


const RenderInputText = ({ name, placeholder, label, labelSecond, disabled }) => {
  return (
    <div className="form-line">
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <Field
        name={name}
        type="text"
        placeholder={placeholder}
        component="input"
        className="input-decorate"
        disabled={`${disabled === 0 ? "disabled" : ""}`}
      />
    </div>
  );
}

export default RenderInputText;