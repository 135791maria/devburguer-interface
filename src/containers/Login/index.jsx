

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"



import { toast } from "react-toastify";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useUser } from "../../hooks/UserContext";


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



export function Login() {
  const navigate = useNavigate();
const {putUserData} = useUser();


  const schema = yup
    .object({
      email: yup.string().email("Digite um email valido").required("O email è obrigatorio"),
      password: yup.string().min(6, "A senha deve ter pelo menos seis caracteres").required(),
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    const {
      data:userData
    } = await toast.promise(api.post("/session", {
      email: data.email,
      password: data.password,
    }),
      {

        pending: 'verificando seus dados',
        success: {
          render() {
            setTimeout(() => {
              navigate("/")
            }, 2000);
            return 'Sejam bem Vindos (a) 👌';
          },

        },
        error: 'Email ou Senha Incorretos🤯',

      },
    );
    putUserData(userData)

   
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Ola,  seja bem vindo ao <span>Devburguer! </span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email"  {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>senha</label>
            <input type="senha"  {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>Nâo possui conta? <Link to="/cadastro">clique aqui.</Link>
        </p>
      </RightContainer>

    </Container>
  );

}