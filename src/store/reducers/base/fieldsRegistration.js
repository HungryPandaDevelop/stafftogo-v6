export default function(){
  return {
    order: ["name","email","password","typeCabinet"],
    name: { name: "name", label: "Имя пользователя", placeholder: "Имя пользователя", type:"text" },
    email: { name: "email", label: "Почта", placeholder: "Почта", type:"text" , disabled: 1},
    password: { name: "password", label: "Пароль", placeholder: "Введите пароль", type:"password"},
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