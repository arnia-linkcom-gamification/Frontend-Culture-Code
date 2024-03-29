import styled from "styled-components";

interface IButtonProps {
  customWidth: string;
  customHeight: string;
  customBorder: string;
  customPadding: string;
  customColors: string;
  customFontsize: string;
  customFontWeight: string;
  customBackground: string;
  customFontFamily: string;
  customBorderRadius: string;
  customBackgroundHover: string;

  customBackgroundResponsive?: string;
  customColorResponsive?: string;
  customHouverBackgroundResponsive?: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.customWidth};
  height: ${(props) => props.customHeight};
  padding: ${(props) => props.customPadding};
  color: ${(props) => props.customColors};
  background: ${(props) => props.customBackground};
  font-size: ${(props) => props.customFontsize};
  font-weight: ${(props) => props.customFontWeight};
  font-family: ${(props) => props.customFontFamily};
  border-radius: ${(props) => props.customBorderRadius};
  border: ${(props) => props.customBorder};
  
  cursor: pointer;

  &:hover {
    /* background: #e3c4f9; */
    background: ${(props) => props.customBackgroundHover};
  }

  @media screen and (max-width: 768px) {
    background:${(props) => props.customBackgroundResponsive};
    color:${(props) => props.customColorResponsive};
    &:hover {
      background: ${(props) => props.customHouverBackgroundResponsive};
    }
  }
`;

// @media screen and (max-width: 768px) {
//   background: #502b6b;
//   color: rgba(255, 255, 255, 1);
//   &:hover {
//     background: #5d3579;
//   }
// }
