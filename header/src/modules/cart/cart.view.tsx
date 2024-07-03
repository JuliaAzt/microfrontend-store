import { useDispatch, useSelector } from "react-redux";
import { CardMenu } from "@/components/card-menu";
import { Drawer } from "@/components/drawer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import storeActions from "shared/StoreActions";
import storeSelectors from "shared/StoreSelectors";
import CloseIcon from "@/assets/img/close-icon.svg";
import { CartState } from "./resources/types";
import { MenuState } from "../menu/resources/types";

export const MenuCart = () => {
  const dispatch = useDispatch();

  const onClickMenu = () => {
    const action = storeActions("TOGGLE_MENU");
    dispatch(action(""));
  };

  const { items: cart, total: cartQuantity } = useSelector(
    storeSelectors("GET_CART_STATE"),
  ) as CartState;

  const { isOpen } = useSelector(storeSelectors("GET_MENU_STATE")) as MenuState;

  return (
    <Drawer
      open={isOpen}
      onCloseDrawer={onClickMenu}
      onOpenDrawer={onClickMenu}
    >
      <Box display="flex" alignItems="top">
        <Box padding={{ xs: "10px", sm: "20px", md: "40px" }}>
          <Box display="flex" justifyContent="space-between" mb="23px">
            <Typography fontWeight="bold">Compras</Typography>

            <Typography>{cartQuantity}</Typography>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid",
              borderBottom: "1px solid",
              paddingTop: "22px",
              paddingBottom: "40px",
              borderColor: "grey.100",
            }}
            display={"grid"}
            rowGap={"20px"}
          >
            {cart?.map(({ id, price, title, thumbnail }) => {
              return (
                <CardMenu
                  key={id}
                  price={price}
                  title={title}
                  thumbnail={thumbnail}
                />
              );
            })}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            pt="14px"
            alignItems="center"
          >
            <Button variant="contained" sx={{ height: "30px" }}>
              Concluir compra
            </Button>
            <Button
              variant="text"
              color="secondary"
              sx={{ height: "30px" }}
              onClick={onClickMenu}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
        <IconButton
          onClick={onClickMenu}
          sx={{ height: "40px", width: "30px" }}
        >
          <img src={CloseIcon} />
        </IconButton>
      </Box>
    </Drawer>
  );
};
