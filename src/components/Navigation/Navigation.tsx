import * as S from "../Navigation/Navigation.Styled";
import CardPerfil from "../CardPerfil/CardPerfil";
import { useLocation, useParams } from "react-router-dom";

interface INavigation {
  home: string;
  produtos: string;
  myPerfil: string;
  customColorslinks: string;
}

const Navigation = ({
  home,
  produtos,
  myPerfil,
  customColorslinks,
}: INavigation) => {
  const location = useLocation();
  const { id } = useParams();

  let customColors = "#ffffff";
  if (location.pathname.startsWith("/produtos") && id) {
    customColors = "#967fb1";
  }

  let customColorsStrong = "#ffff";

  if (location.pathname.startsWith("/produtos") && id) {
    customColorsStrong = "#8638e5";
  }

  if (location.pathname === "/produtos") {
    customColorsStrong = "#8638e5";
    customColors = "#967fb1";
  }

  if (location.pathname === "/perfil") {
    customColorsStrong = "#8638e5";
    customColors = "#967fb1";
  }

  return (
    <S.Conatainer>
      <div>
        <CardPerfil
          customColors={customColors}
          custonColorsStrong={customColorsStrong}
        />
      </div>

      <S.DivLinksNavigation>
        <S.Links customColors={customColorslinks} to={"/home"}>
          {home}
        </S.Links>
        <S.Links customColors={customColorslinks} to={"/produtos"}>
          {produtos}
        </S.Links>
        <S.Links customColors={customColorslinks} to={"/perfil"}>
          {myPerfil}
        </S.Links>
      </S.DivLinksNavigation>
    </S.Conatainer>
  );
};

export default Navigation;
