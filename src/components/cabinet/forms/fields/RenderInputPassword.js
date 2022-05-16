import { useState } from 'react';
import { Field} from 'redux-form';

const TemplateFieldPassword = ({ input, label }) => {

  const [showPass, setShowPass] = useState(false);

  return (
    <div className="form-line">
      <label><b>{label}</b></label>
      <div className="password-field" >
        <input type={showPass ? ("text") : ("password")}  {...input} placeholder={label} className="input-decorate" />
        <i className="view-ico" data-visibility={showPass} onClick={() => { setShowPass((prevState) => !prevState) }}></i>
      </div>
    </div>
  )
}

const RenderInputPassword = (name, placeholder, label) => {
  return <Field name={name} label={label} placeholder={placeholder} component={TemplateFieldPassword} />;
}

export default RenderInputPassword;