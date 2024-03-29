import * as S from "./CardSuccessfullyRescued.Styled";
import ButtonProps from "../Button/Button";
import CardMyBalance from "../CardMyBalance/CardMyBalance";
import ImgPersonagem from "../../assets/Group8.png";
import CardSmallProductsSuccess from "../CardSmallProductsSuccess/CardSmallProductsSuccess";
import { useNavigate } from "react-router-dom";

interface ICardSuccessfullyRescued {
  nameProduct: string | undefined;
  balance: number | undefined;
  priceProducts: number | undefined;
  image: string | undefined;
}

const CardSuccessfullyRescued = ({
  nameProduct,
  balance,
  priceProducts,
  image,
}: ICardSuccessfullyRescued) => {
  const navigate = useNavigate();

  const handleFake = () => {
    navigate("/home");
  };
  return (
    <S.Container>
      <S.DivImage>
        <S.Image src={ImgPersonagem} />
      </S.DivImage>
      <S.DivDescription>
        <S.DivTitleProduct>
          <S.Title>Produto resgatado com sucesso!</S.Title>
        </S.DivTitleProduct>

        <S.DivCardSmallProductsSuccess>
          <CardSmallProductsSuccess
            imagem={image}
            titleProduct={nameProduct}
            priceProducts={priceProducts}
          />
        </S.DivCardSmallProductsSuccess>

        <S.DivTextDescription>
          <S.TextDescription>
            Aqui irá um texto explicando como o produto será retirado.
          </S.TextDescription>
        </S.DivTextDescription>

        <S.DivMyBalance>
          <CardMyBalance imagem="" balance={balance} />
        </S.DivMyBalance>

        <S.DivButton>
          <ButtonProps
            name="Voltar à página inicial"
            customWidth="100%"
            customHeight="62px"
            customColors="#60357e"
            customFontFamily="Sora"
            customFontWeight="700"
            customFontsize="1.2rem"
            customBorderRadius="16px"
            customBorder="2px solid #60357e"
            customPadding=""
            customBackground=" #ffff"
            customBackgroundHover=""
            onClick={handleFake}
            isOpen={true}
          />
        </S.DivButton>
      </S.DivDescription>
    </S.Container>
  );
};

export default CardSuccessfullyRescued;
