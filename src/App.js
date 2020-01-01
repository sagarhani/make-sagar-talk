import React, { useState } from "react";
import { GlobalStyle } from "./globalStyles";
import * as Styles from "./styles";

function App() {
  const defaultText = "I will talk whatever you type here.";
  const [text, setText] = useState(defaultText);

  const speak = () => {
    const message = new SpeechSynthesisUtterance();
    message.text = text;
    speechSynthesis.speak(message);
  };

  return (
    <>
      <GlobalStyle />

      <Styles.TalkContainer>
        <Styles.Header>Make Me Talk</Styles.Header>
        <Styles.TextArea
          onChange={e => {
            setText(e.target.value);
          }}
          placeholder="Type Something..."
        >
          {text}
        </Styles.TextArea>
        <Styles.SpeakButton
          onClick={() => {
            speak();
          }}
        >
          Talk Sagar
        </Styles.SpeakButton>
      </Styles.TalkContainer>
    </>
  );
}

export default App;
