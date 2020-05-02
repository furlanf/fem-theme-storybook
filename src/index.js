import React, { useState } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SignUpModal,
} from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>

      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Toggle Theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrimaryButton>Hello World</PrimaryButton>
        <PrimaryButton modifiers={["success"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Hello World</SecondaryButton>
        <TertiaryButton>Hello World</TertiaryButton>
      </div>
      <div>
        <SignUpModal
          showModal={showModal}
          setShowModal={setShowModal}
        ></SignUpModal>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
