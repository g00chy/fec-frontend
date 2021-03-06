import React from "react";
import { Paper } from "@material-ui/core";

import {
  LoginContainer,
  CreateContainer,
  ToggleDisplayContainer,
} from "src/components";

import { useStyles } from "./style";

interface AuthContainerProps {
  className?: string;
}

export const AuthContainer: React.FC<AuthContainerProps> = (props) => {
  const [showFirst, _setShowFirst] = React.useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.cloth}>
        <ToggleDisplayContainer
          className={classes.container}
          isShownFirstChild={showFirst}
        >
          <LoginContainer />
          <CreateContainer />
        </ToggleDisplayContainer>
      </Paper>
    </div>
  );
};
