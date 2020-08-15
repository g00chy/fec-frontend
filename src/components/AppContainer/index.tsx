import React from "react";
// eslint-disable-next-line no-unused-vars
import { ThemeProvider, ThemeOptions, createMuiTheme } from "@material-ui/core";

import { AuthContainer } from "../AuthContainer";
import { ToggleDisplayContainer } from "../ToggleDisplayContainer";

interface AppContainerProps extends BaseComponentProps {
  className?: string;
}

interface AppData {
  themeProps: ThemeOptions;
  showFirst: boolean;
}

type History = AppData[];

const defaultProp: ThemeOptions = {
  palette: {
    primary: {
      main: "#86b25f",
    },
  },
};

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  const [history, setHistory] = React.useState([
    { themeProps: defaultProp, showFirst: false },
  ] as History);
  const current = history[history.length - 1];
  const theme = createMuiTheme(current.themeProps);
  // TODO setter of showfirst and themeprops

  return (
    <ThemeProvider theme={theme}>
      <ToggleDisplayContainer isShowFirstChild={current.showFirst}>
        <div>normal page</div>
        <AuthContainer />
      </ToggleDisplayContainer>
    </ThemeProvider>
  );
};
