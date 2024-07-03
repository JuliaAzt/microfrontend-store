import { ReactNode } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
type HeaderProps = {
  logo?: ReactNode;
  action?: ReactNode;
};

export const Header = ({ logo, action }: HeaderProps) => {
  return (
    <>
      <AppBar
        elevation={0}
        color="primary"
        position="relative"
        sx={{ boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)" }}
      >
        <Toolbar variant="dense" sx={{ height: "64px", padding: "10px" }}>
          <Box display="flex" justifyContent="space-between" width="100%">
            {logo && logo} {action && action}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
