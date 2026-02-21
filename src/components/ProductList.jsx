import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function ProductList({ products = [], onRemove }) {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const visibleProducts = useMemo(() => {
    return showInStockOnly ? products.filter((p) => p.inStock) : products;
  }, [products, showInStockOnly]);

  const anyInStock = useMemo(() => products.some((p) => p.inStock), [products]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1f1b2e, #0d0c14)",
        color: "#f5e6c8",
        p: 4,
      }}
    >
      <Box sx={{ maxWidth: 980, mx: "auto" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          sx={{ mb: 3 }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #d4af37, #f5e6c8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Product Dashboard
          </Typography>

          <Button
            variant="contained"
            onClick={() => setShowInStockOnly((v) => !v)}
            aria-label="toggle-availability-filter"
            sx={{
              borderRadius: "999px",
              px: 2.5,
              fontWeight: 700,
              textTransform: "none",
              background: "linear-gradient(90deg, #d4af37, #b8892b)",
              color: "#111018",
              "&:hover": {
                background: "linear-gradient(90deg, #e2c15a, #c79a34)",
              },
            }}
          >
            {showInStockOnly ? "Show All" : "Show In Stock Only"}
          </Button>
        </Stack>

        {products.length === 0 ? (
          <Typography role="alert">No products available.</Typography>
        ) : (
          <>
            {!anyInStock && (
              <Typography role="alert" sx={{ mb: 2 }}>
                No products are currently in stock.
              </Typography>
            )}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onRemove={onRemove}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}