const express = require("express");
const { createProduct, deleteProduct, getDetailSP, getProducts, getProductToCategorySPLienQuan, updateProduct, deleteNhieuProduct, showHiddenProduct } = require('../controllers/Product/product.controller');
const { getFeedbacks, createFeedback, deleteFeedback } = require("../controllers/Product/feedback.controller");

const router = express.Router();

// find all product
router.get("/get-product", getProducts );

// tao moi product
router.post("/create-product", createProduct );

// update product
router.put("/update-product", updateProduct );

// delete product
router.delete("/delete-product/:id", deleteProduct );

router.delete("/delete-nhieu-product", deleteNhieuProduct );

router.get("/get-product-idloaisp-lien-quan", getProductToCategorySPLienQuan );

router.get("/get-detail-product", getDetailSP );

router.put("/show-hidden-product", showHiddenProduct );

router.get("/get-feedback", getFeedbacks );
router.post("/create-feedback", createFeedback );
router.delete("/delete-feedback/:id", deleteFeedback );

module.exports = router;