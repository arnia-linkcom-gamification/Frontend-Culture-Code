import * as S from "../FormLogin/FormLoginStyled";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/schameogin";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonProps from "../Button/Button";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleFake = () => {
    console.log("estou esperando funcionar");
  };
  return (
    <S.Container>
      <S.DivTitle>
        <S.TitleWelcome>Seja bem vindo!</S.TitleWelcome>
        <S.Titlelogin>Faça seu login</S.Titlelogin>
      </S.DivTitle>
      <form onSubmit={handleSubmit(handleFake)}>
        <S.DivContainerInputs>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
          <S.DivInputEmail>
            <S.LabelEmail htmlFor="">E-mail</S.LabelEmail>
            <S.InputEmail
              type="text"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </S.DivInputEmail>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Senha</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </S.DivInputPassword>
        </S.DivContainerInputs>
        <S.DivButtonLogin>
          <ButtonProps
            name="Entrar"
            customWidth="100%"
            customHeight="72px"
            customColors="#ffff"
            customFontFamily="Sora"
            customFontWeight="700"
            customFontsize="1.5rem"
            customPadding=""
            customBackground=" #502B6B"
            customBackgroundHover="#60357e"
            onClick={handleFake}
            isOpen={true}
          />
        </S.DivButtonLogin>
      </form>
    </S.Container>
  );
};

export default FormLogin;
