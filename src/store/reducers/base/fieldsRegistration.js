import { required, minLength,mailCheck } from 'components/cabinet/forms/validator';

export default function(){
  return {
    order: ["name","email","password","typeCabinet"],
    name: { name: "name", label: "Имя пользователя", placeholder: "Имя пользователя", type:"text",validate: [required,minLength] },
    email: { name: "email", label: "Почта", placeholder: "Почта", type:"text" , validate: [required,minLength,mailCheck]},
    password: { name: "password", label: "Пароль", placeholder: "Введите пароль", type:"password", validate: [required,minLength]},
    typeCabinet: {
      type:"switch",
      name: "typeCabinet", 
      label: "Тип кабинета", 
      options: [
        {name:"Соискатель",value:"applicants"},
        {name:"Компания", value:"employers"},
      ],
    },
  }
}