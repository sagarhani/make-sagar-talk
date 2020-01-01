import styled from "styled-components";

export const TalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 70vh;
  border-radius: 4px;
  background-color: white;
  position: relative;

  @media only screen and (max-width: 950px) {
    width: 75vw;
  }
`;

export const Image = styled.img`
  position: absolute;
  height: 150px;
  width: 150px;
  top: -150px;
  left: 575px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  background-color: #e93b30;
  color: white;
  font-family: "Pacifico";
  font-size: 22px;
`;

export const TextArea = styled.textarea`
  border-radius: 4px;
  box-shadow: none;
  outline: none;
  border-style: none;
  border: 1px #ededed solid;
  height: 40px;
  padding: 4px 12px 4px 12px;
  font-size: 18px;
  flex-grow: 1;
  background-color: #ededed;
  font-family: monospace;

  ::placeholder {
    font-style: italic;
    font-weight: 100;
  }
`;

export const SpeakButton = styled.button`
  background-color: #e93b30;
  font-family: "Short Stack";
  height: 7vh;
  font-family: "Pacifico";
  font-size: 3vh;
  color: white;
  border: none;

  :hover {
    cursor: pointer;
  }
`;
