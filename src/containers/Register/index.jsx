
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

import { api } from "../../services/api";

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
Link,
} from "./styles";



import { Button } from "../../components/Button";


export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required(" O Nome E Obrigatorio"),
      email: yup.string().email("Digite um email valido").required("O email è obrigatorio"),
      password: yup.string().min(6, "A senha deve ter pelo menos seis caracteres").required(),
      confirmPassword: yup.string().oneOf([yup.ref("password")], "As Senhas Devem Ser Iguais").required('Confirme Sua Senha'),
    })
    .required();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() =>{
navigate("/login");
        }, 2000);
        toast.success("Conta criada com succeso!");
      } else if (status === 400) {
        toast.error("Email ja cadastrado! Faça login para continuar")
      } else {
throw new Error()
      }
  
    } catch (error) {
      toast.error("Falha no sistema! Tente novamente.")
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text"  {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input type="email"  {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="senha"{...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password"  {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar conta.</Button>
        </Form>
        <p>Ja possui conta? <Link to="/login">clique aqui.</Link>
        </p>
      </RightContainer>

    </Container>
  );

}