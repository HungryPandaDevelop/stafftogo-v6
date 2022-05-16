export default function(){
  return {
    order: ["email","password",],
    email: { name: "email", label: "Почта пользователя", placeholder: "Почта пользователя", type:"text" },
    password: { name: "password", label: "Пароль", placeholder: "Введите пароль", type:"password"},
  }
}