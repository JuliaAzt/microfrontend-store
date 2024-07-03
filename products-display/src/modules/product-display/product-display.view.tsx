import { Box, CircularProgress, Grid, Pagination } from "@mui/material";

import { Card } from "@/components/card";

import { priceMask } from "@/commons/helpers";
import { RemoteLoadProductListType } from "./resources";
import { useProductDisplay } from "./resources/use-product-display";

export type ProductDisplayProps = {
  loadProducts: RemoteLoadProductListType;
};

export const ProductDisplay = ({ loadProducts }: ProductDisplayProps) => {
  const { isLoading, data, onAddToCart, maxPages, page, setPage } =
    useProductDisplay({ loadProducts });

  return (
    <>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            columnGap="40px"
            rowGap="60px"
            padding={"40px"}
          >
            {data?.products?.map(
              ({ title, price, thumbnail, description, id }) => (
                <Card
                  title={title}
                  description={description}
                  price={priceMask(price)}
                  thumbnail={thumbnail}
                  key={id}
                  onClick={() =>
                    onAddToCart({
                      title: title,
                      price: priceMask(price),
                      thumbnail: thumbnail,
                      description: description,
                      id: id,
                    })
                  }
                />
              )
            )}
          </Grid>
          <Box display="flex" justifyContent="center">
            <Pagination
              count={maxPages}
              color="secondary"
              onChange={(_, value) => setPage(value)}
              page={page}
            />
          </Box>
        </>
      )}
    </>
  );
};
