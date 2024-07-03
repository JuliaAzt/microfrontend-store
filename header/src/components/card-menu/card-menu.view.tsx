import { Box, Card as CardMui, Typography } from "@mui/material";

type CardMenuProps = {
  thumbnail: string;
  title: string;
  price: string;
};
export const CardMenu = ({ thumbnail, title, price }: CardMenuProps) => {
  return (
    <CardMui
      variant="outlined"
      color="primary"
      sx={{
        minWidth: { xs: "120px", md: "400px" },
        padding: {
          xs: "16px",
          md: "32px",
        },
      }}
      data-testid="card-menu"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          wordWrap: "break-word",
        }}
      >
        <img width="75px" height="75px" src={thumbnail} alt={title} />
        <Typography>{title}</Typography>
        <Typography>{price}</Typography>
      </Box>
    </CardMui>
  );
};
