import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//     {
//         id: 1,
//         name: "Shoes",
//         description: "Runnning shoes",
//         price: "$5",
//         image:
//             "https://cdn.shopify.com/s/files/1/0262/1184/4176/products/catiba-catiba-pro-off-white-sneaker-canvas.slideshow1_b672a79f-a2c2-4a70-b3ba-0e61761f5484.jpg?v=1609745702",
//     },
//     {
//         id: 2,
//         name: "Macbook",
//         description: "apple Macbook",
//         price: "$100",
//         image:
//             "https://brain-images-ssl.cdn.dixons.com/4/2/10199624/u_10199624.jpg",
//     },
// ];

function Products({products, onAddToCart}) {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;
