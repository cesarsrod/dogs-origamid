import React from "react";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginPasswordLost = () => {
  const email = useForm();

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha ? </h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="email" {...email} />

        <Button>Enviar email</Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
