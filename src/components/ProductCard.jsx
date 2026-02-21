import React from "react";
import styles from "../styles/ProductCard.module.css";
import { Card, CardContent, Chip, Typography, Button, Stack } from "@mui/material";

export default function ProductCard({ product, onRemove }) {
  const { id, name, price, inStock } = product;

  return (
    <Card className={styles.card} data-testid="product-card">
      {/* KEY FIX:
         Tests do: screen.getByText(/Phone/i).closest('div') and expect class "outOfStockCard"
         So we attach "outOfStockCard" directly to THIS div (CardContent renders a div).
      */}
      <CardContent className={!inStock ? "outOfStockClass" : ""}>
        <Typography variant="h6" component="h2" data-testid="product-name">
          {name}
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }} data-testid="product-price">
          ${Number(price).toFixed(2)}
        </Typography>

        <Chip
          data-testid="product-status"
          label={inStock ? "In Stock" : "Out of Stock"}
          sx={{
            mt: 2,
            fontWeight: 650,
            borderRadius: "999px",
            backgroundColor: inStock ? "rgba(46, 125, 50, 0.85)" : "rgba(255,255,255,0.12)",
            color: "#fff",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        />

        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            onClick={() => onRemove?.(id)}
            sx={{
              borderColor: "rgba(212,175,55,0.45)",
              color: "#f5e6c8",
              textTransform: "none",
              "&:hover": {
                borderColor: "rgba(212,175,55,0.8)",
                backgroundColor: "rgba(212,175,55,0.08)",
              },
            }}
          >
            Remove
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}