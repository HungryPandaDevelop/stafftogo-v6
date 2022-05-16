import { useState } from 'react';

import { Field } from 'redux-form';

import { toast } from 'react-toastify';

import storeImage from 'hooks/storeImage';



const TemplateInputFile = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  label,
  labelSecond,
  typeUpload,
  maxSize,
  getData,
  updateReduxForm,
  nameField,
  typeFile,
  textEmpty,
  ...props
}) => {

  const [nameFile, setNameFile] = useState(textEmpty);
  console.log('inputProps',inputProps)
  const adaptFileEventToValue = (delegate) => async (e) => {

    if(e._reactName === 'onChange'){

      if(e.target.files[0].size > maxSize){
        e.target.value = '';
        toast.error('Файл слишком большой')
        return false;
      }
  
      const files = e.target.files; // выделили фотки

  
      setNameFile(files[0].name);

      let fileUrls = await Promise.all( // загрузили получили урлы
        [...files].map((file) => storeImage(file))
      ).catch(()=>{
        console.log('err')
        return
      });


      getData[nameField] = fileUrls;

      updateReduxForm(getData);
      
      e.target.value = '';

      
    }

  };

  const deleteFile = (index)=>{

    delete getData[nameField][index]

    getData[nameField] = [...getData[nameField]].filter((url) => url)
    setNameFile(textEmpty);
    updateReduxForm(getData);


  }

  const getFilies = getData && getData[nameField];
  return (
    <>

    <label ><b>{label}</b><span>{labelSecond}</span></label>
    <div 
    className="file-input-container"
    >
    <div className="file-decorate"><span>{nameFile}</span><i></i></div>
      <input
        className="input-file"
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        accept={typeUpload}
        // multiple
        
        {...props.input}
        {...props}
      />
    </div>
    
    {getFilies && getFilies.length > 0 && getFilies.map((item, index)=>{
        return(
          <div key={index}>
            {typeFile === 'img' ? (<img src={item} className="cabinet-img" alt="" />): ('')}
            {typeFile === 'video' ? (
            <video width="400" height="300" controls="controls" >
                    <source src={item} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            </video>
            ): ('')}
            <div className='cabinet-img-delete' onClick={()=>{deleteFile(index)}}>delete</div>
          </div>
        )
      })}
    </>
  );
};


const RenderInputFile = (name, label, labelSecond, typeUpload, maxSize, getData, updateReduxForm, typeFile, textEmpty) => {

  


  return (
    
    <div className="field-file-wrapper">
      <Field 
        label={label} 
        labelSecond={labelSecond}
        name={name}
        nameField={name}
        component={TemplateInputFile} 
        type="file"
        typeUpload={typeUpload}
        maxSize={maxSize}
        getData={getData}
        updateReduxForm={updateReduxForm}
        typeFile={typeFile}
        textEmpty={textEmpty}

      />

    </div>
  
  );
}




export default RenderInputFile

