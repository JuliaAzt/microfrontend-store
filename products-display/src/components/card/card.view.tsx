import { Box, Button, Card as CardMui, Typography } from "@mui/material";

type CardProps = {
  title: string;
  description: string;
  price: string;
  thumbnail: string;
  onClick: () => void;
};

export const Card = ({
  title,
  description,
  price,
  thumbnail,
  onClick,
}: CardProps) => {
  return (
    <CardMui
      variant="outlined"
      sx={{ padding: { md: "32px 40px", xs: "16px 24px" }, display: "block" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={"100%"}
      >
        <Box>
          <Box justifyContent="center" display="flex">
            <img width="300px" height="300px" src={thumbnail} alt={title} />
          </Box>
          <Box textAlign="center" my="13px">
            <Typography fontWeight="bold">{title}</Typography>
          </Box>
          <Box textAlign="left">
            <Typography variant="subtitle2">{description}</Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mt="13px"
          alignItems="center"
        >
          <Typography fontWeight="bold">{price}</Typography>
          <Button variant="contained" onClick={onClick}>
            Comprar
          </Button>
        </Box>
      </Box>
    </CardMui>
  );
};
