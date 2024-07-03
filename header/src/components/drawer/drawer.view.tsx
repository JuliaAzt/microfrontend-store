import { SwipeableDrawer } from "@mui/material";
import { ReactNode } from "react";

type DrawerProps = {
  open: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
  children?: ReactNode;
};
export const Drawer = ({
  open,
  onOpenDrawer,
  onCloseDrawer,
  children,
}: DrawerProps) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onCloseDrawer}
      onOpen={onOpenDrawer}
    >
      {children}
    </SwipeableDrawer>
  );
};
