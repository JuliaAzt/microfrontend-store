import { Badge, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "@/components/header";
import shoppingBag from "@/assets/img/shopping-bag.svg";
import logoOutlined from "@/assets/img/logo-outlined.svg";
import { MenuCart } from "@/modules/cart";
import { CartState } from "../cart/resources/types";
import storeActions from "shared/StoreActions";
import storeSelectors from "shared/StoreSelectors";

export const Menu = () => {
  const dispatch = useDispatch();

  const onOpenMenu = () => {
    const action = storeActions("TOGGLE_MENU");
    dispatch(action(""));
  };

  const { total: cartQuantity } = useSelector(
    storeSelectors("GET_CART_STATE"),
  ) as CartState;

  return (
    <>
      <Header
        logo={<img src={logoOutlined} alt="logo" />}
        action={
          <Button variant="contained" color="secondary" onClick={onOpenMenu}>
            <Badge
              badgeContent={cartQuantity}
              color="error"
              data-testid="shopping-bag"
            >
              <img src={shoppingBag} alt="shopping-bag" />
            </Badge>
          </Button>
        }
      />
      <MenuCart />
    </>
  );
};
