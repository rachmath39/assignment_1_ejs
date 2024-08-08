const router = require("express").Router();
const fs = require('fs')
const products = require("../data/products.json");

router.get("/books",(req,res) => {
    res.json(products);
    
});

router.get("/books/:id/",(req,res) => {
    
    const { id }  = req.params;
    const product = products.find((el) => el.id === Number(id));
    
    //#3 menampilkan error !product
    if (!product){
        res.status(404).send(`Book with id ${id} is not Found`)
    } else {
        res.status(200).send(product);
    }
});

router.get("/ejs/books",(req,res) => {
    res.render("books",{ products });
});

module.exports = router;