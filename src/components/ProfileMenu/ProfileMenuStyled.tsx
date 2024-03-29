import styled from "styled-components";

interface IMenuStyled {
    customColors: string
  }

export const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 23.75rem; 
    .border{
        border-top: 1px solid #EEEEEE;
    }


`

export const ButtonMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    h4{
        font-family: Sora;
        font-size: 1rem;
        color: #616161;
        margin-left: 2rem;
    }
    
`

export const ImageContainer = styled.div<IMenuStyled>`
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${(props) => props.customColors};;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
;
`
