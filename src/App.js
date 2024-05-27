import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/home";
import Nav from "./navbar/nav";

import Register from "./Components/register";
import Login from "./Components/login";
import Header from "./navbar/header";

import ReactImageMagnify from "react-image-magnify";
import ScrollComponent from "./scroll";
import ProductDetails from "./Components/product_details/details";
import ProductDetailsPage from "./Components/productDetails/productdetails";
import Cart from "./Components/cart/cart";
import { CartProvider } from "./Components/contextapi/contex";
import Contactpage from "./Components/contactPage/Contactpages";
import Products from "./Components/newproduct/products";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Lotus Attitude Brooklyn - KS Fitted Bedsheet Set-5pcs - LTA-BS-BROOKLYN-BR02W",
      desc: "Soft and luxurious fitted bedsheet set from Lotus Attitude Brooklyn collection.",
      stock: "Out of Stock",

      size: "King Size",
      material: "Cotton",

      price: 364223,
      img: "https://sbfurniturenepal.com/web/image/product.template/21810/image_512?unique=5d90ac0",
    },
    {
      id: 2,
      name: "Lotus Milano - KS Fitted Bedsheet Set-5pcs - LTB-BS-MILANO-02",
      desc: "Elegant and comfortable fitted bedsheet set from Lotus Milano collection.",
      stock: "1 in Stock",

      size: "King Size",
      material: "Silk",

      price: 364223,
      img: "https://sbfurniturenepal.com/web/image/product.template/21733/image_512?unique=f16aab1",
    },
    {
      id: 5,
      name: "Lotus Milano - KS Fitted Bedsheet Set-5pcs - LTB-BS-MILANO-04",
      desc: "Premium quality fitted bedsheet set from Lotus Milano collection, perfect for a modern bedroom.",
      stock: "2 in Stock",

      size: "King Size",
      material: "Microfiber",

      price: 36422,
      img: "https://sbfurniturenepal.com/web/image/product.product/26258/image_1024/%5BBS5-KS-MILANO-04%5D%20Lotus%20Milano%20-%20KS%20Fitted%20Bedsheet%20Set-5pcs%20-%20LTB-BS-MILANO-04?unique=c3281ca",
    },
    {
      id: 3,
      name: "Lotus Milano - KS Fitted Bedsheet Set-5pcs - LTB-BS-MILANO-05 chandan sharma",
      desc: "Stylish and durable fitted bedsheet set from Lotus Milano collection, designed for comfort and style.",
      stock: "Out of Stock",

      size: "King Size",
      material: "Egyptian Cotton",

      price: 42842,
      img: "https://sbfurniturenepal.com/web/image/product.product/26262/image_1024/%5BBS5-KS-MILANO-05%5D%20Lotus%20Milano%20-%20KS%20Fitted%20Bedsheet%20Set-5pcs%20-%20LTB-BS-MILANO-05?unique=b7f0b4e",
    },
    {
      id: 4,
      name: "Lotus Attitude Norden - KS Fitted Bedsheet Set-5pcs - LTA-BS-NORDEN-GRON ",
      desc: "High-quality fitted bedsheet set from Lotus Attitude Norden collection, featuring a modern design.",
      stock: "Out of Stock",

      size: "King Size",
      material: "Polyester",

      price: 364223,
      img: "https://sbfurniturenepal.com/web/image/product.product/26296/image_1024/%5BBS5-KS-NORDEN-GRON%5D%20Lotus%20Attitude%20Norden%20-%20KS%20Fitted%20Bedsheet%20Set-5pcs%20-%20LTA-BS-NORDEN-GRON?unique=817b654",
    },
    {
      id: 6,
      name: "Lotus Attitude Norden - KS Fitted Bedsheet Set-5pcs - LTA-BS-NORDEN-HIMMEL",
      desc: "Luxurious and comfortable fitted bedsheet set from Lotus Attitude Norden collection, perfect for a peaceful night's sleep.",
      stock: "In Stock",

      size: "King Size",
      material: "Satin",

      price: 36422,
      img: "https://sbfurniturenepal.com/web/image/product.product/26292/image_1024/%5BBS5-KS-NORDEN-HIMMEL%5D%20Lotus%20Attitude%20Norden%20-%20KS%20Fitted%20Bedsheet%20Set-5pcs%20-%20LTA-BS-NORDEN-HIMMEL?unique=ebe6460",
    },
    {
      id: 7,
      name: "Lotus Attitude Norden - KS Fitted Bedsheet Set-5pcs - LTA-BS-NORDEN-MANDEL",
      desc: "Durable and stylish fitted bedsheet set from Lotus Attitude Norden collection, designed to enhance the elegance of your bedroom.",
      stock: "Out of Stock",

      size: "King Size",
      material: "Linen",

      price: 364223,
      img: "https://hometown.gumlet.io/media/product/21/5763/45580/1.jpg?mode=fill&h=360&w=360&dpr=1.5",
    },
    {
      id: 8,
      name: "Lotus Attitude Brooklyn - KS Fitted Bedsheet Set-5pcs - LTA-BS-BROOKLYN-BR04B",
      desc: "Comfortable and luxurious fitted bedsheet set from Lotus Attitude Brooklyn collection, designed for a restful sleep experience.",
      stock: "In Stock",

      size: "King Size",
      material: "Jersey",

      price: 364223,
      img: "https://wakefitdev.gumlet.io/img/npl_modified_images/bed_antho/velvet_blue/bed_WUWB7860SVBLANTHO/bed_WUWB7860SVBLANTHO_1.jpg?w=732",
    },

    {
      id: 9,
      name: "Modern Sofa",
      price: 499.99,
      category: "Sofa",
      img: "https://th.bing.com/th/id/R.68dceb77f3142d97381770b8292bc77f?rik=hxUYuCvGtjGfPg&pid=imgRaw&r=0",
      desc: "A comfortable and stylish modern sofa, perfect for any living room.",

      width: "200cm",
      height: "85cm",
      depth: "90cm",

      material: "Fabric",
      color: "Gray",
      weight: "45kg",
      brand: "SofaBrand",
      warranty: "2 years",
    },
    {
      id: 10,
      name: "Classic Wooden Table",
      price: 299.99,
      category: "Table",
      img: "https://th.bing.com/th/id/OIP.VG5abTXSSRQbebRDTOUkPAHaHa?rs=1&pid=imgDetMain",
      desc: "A classic wooden table made from high-quality oak, suitable for any dining room.",

      width: "150cm",
      height: "75cm",
      depth: "90cm",

      material: "Oak Wood",
      color: "Brown",
      weight: "50kg",
      brand: "WoodCraft",
      warranty: "5 years",
    },
    {
      id: 11,
      name: "Ergonomic Office Chair",
      price: 199.99,
      category: "Chair",
      img: "https://th.bing.com/th/id/OIP.RqwX2uCxapVPfhXhsaoSDgHaK2?rs=1&pid=imgDetMain",
      desc: "An ergonomic office chair designed for maximum comfort during long work hours.",

      width: "60cm",
      height: "110cm",
      depth: "60cm",

      material: "Mesh",
      color: "Black",
      weight: "15kg",
      brand: "OfficeComfort",
      warranty: "3 years",
    },
    {
      id: 12,
      name: "Glass Coffee Table",
      price: 149.99,
      category: "Table",
      img: "https://th.bing.com/th/id/R.5970634136527420378c09846464acb3?rik=SdDSrRJWoFQScg&pid=imgRaw&r=0",
      desc: "A sleek glass coffee table with a minimalist design, ideal for modern living rooms.",

      width: "100cm",
      height: "45cm",
      depth: "50cm",

      material: "Glass and Metal",
      color: "Transparent",
      weight: "20kg",
      brand: "GlassHouse",
      warranty: "1 year",
    },
    {
      id: 13,
      name: "Rustic Bookshelf",
      price: 249.99,
      category: "Bookshelf",
      img: "https://th.bing.com/th/id/R.9bac2c833f6213e1a941c17c587e0921?rik=%2fCXBUz10TkGouQ&pid=imgRaw&r=0",
      desc: "A rustic bookshelf made from reclaimed wood, adding a touch of vintage charm.",

      width: "80cm",
      height: "180cm",
      depth: "35cm",

      material: "Reclaimed Wood",
      color: "Natural",
      weight: "30kg",
      brand: "EcoFurniture",
      warranty: "3 years",
    },
    {
      id: 14,
      name: "Luxury King Bed",
      price: 899.99,
      category: "Bed",
      img: "https://th.bing.com/th/id/OIP.tJmxCcI5XqS0IAeA-BEq9wHaHa?rs=1&pid=imgDetMain",
      desc: "A luxury king-sized bed with a plush headboard, perfect for a comfortable night's sleep.",

      width: "200cm",
      height: "120cm",
      depth: "210cm",

      material: "Leather and Wood",
      color: "White",
      weight: "70kg",
      brand: "DreamSleep",
      warranty: "10 years",
    },
    {
      id: 15,
      name: "Dining Chair Set",
      price: 399.99,
      category: "Chair",
      img: "https://th.bing.com/th/id/OIP.CQAiKGdHiSz9Hqyyj52xlQHaF7?rs=1&pid=imgDetMain",
      desc: "A set of four dining chairs with cushioned seats, designed for comfort and style.",

      width: "45cm",
      height: "100cm",
      depth: "55cm",

      material: "Fabric and Wood",
      color: "Beige",
      weight: "25kg",
      brand: "DiningDelight",
      warranty: "2 years",
    },
    {
      id: 16,
      name: "Modern TV Stand",
      price: 299.99,
      category: "Stand",
      img: "https://th.bing.com/th/id/R.277d37fe990f6e53fd5a3bcec874cadb?rik=lbMJHia2kbBecg&pid=imgRaw&r=0",
      desc: "A modern TV stand with ample storage space for all your entertainment needs.",

      width: "150cm",
      height: "50cm",
      depth: "40cm",

      material: "MDF and Metal",
      color: "Black",
      weight: "35kg",
      brand: "MediaMaster",
      warranty: "3 years",
    },
    {
      id: 17,
      name: "Outdoor Patio Set",
      price: 699.99,
      category: "Outdoor",
      img: "https://th.bing.com/th/id/OIP.ENWf32KeX965d00RfyDkrwHaHa?rs=1&pid=imgDetMain",
      desc: "A complete outdoor patio set including a table, four chairs, and an umbrella.",

      table: {
        width: "120cm",
        height: "75cm",
        depth: "120cm",
      },
      chair: {
        width: "60cm",
        height: "95cm",
        depth: "60cm",
      },
      umbrella: {
        diameter: "300cm",
        height: "250cm",
      },

      material: "Rattan and Metal",
      color: "Brown",
      weight: "50kg",
      brand: "OutdoorLiving",
      warranty: "2 years",
    },
    {
      id: 18,
      name: "Kids Bunk Bed",
      price: 499.99,
      category: "Bed",
      img: "https://th.bing.com/th/id/R.9802807ce8b0e2ef905479341fa9712e?rik=AQr0QX4F4rJpqA&pid=imgRaw&r=0",
      desc: "A fun and functional bunk bed for kids, featuring safety rails and a ladder.",

      width: "100cm",
      height: "160cm",
      depth: "200cm",

      material: "Pine Wood",
      color: "White",
      weight: "60kg",
      brand: "KidsDream",
      warranty: "5 years",
    },
    {
      id: 19,
      name: "Recliner Armchair",
      price: 349.99,
      category: "Chair",
      img: "https://th.bing.com/th/id/R.2bc045b35126dbaa4cd7a8abb173506e?rik=cA4MrVxWZkFPrA&pid=imgRaw&r=0",
      desc: "A comfortable recliner armchair with adjustable positions and a footrest.",

      width: "90cm",
      height: "100cm",
      depth: "90cm",

      material: "Leather",
      color: "Brown",
      weight: "40kg",
      brand: "ComfortZone",
      warranty: "3 years",
    },
    {
      id: 20,
      name: "Vintage Cabinet",
      price: 299.99,
      category: "Cabinet",
      img: "https://th.bing.com/th/id/R.e9b79839ca7d91bc1936d4042d4fa957?rik=bVEEOoBgF81pqw&pid=imgRaw&r=0",
      desc: "A vintage-style cabinet with intricate carvings and ample storage space.",

      width: "80cm",
      height: "150cm",
      depth: "40cm",

      material: "Teak Wood",
      color: "Antique Brown",
      weight: "45kg",
      brand: "VintageVault",
      warranty: "5 years",
    },
    {
      id: 21,
      name: "Modern Bookshelf",
      price: 199.99,
      category: "Bookshelf",
      img: "https://th.bing.com/th/id/OIP.SGZgLyTP8Qh9t-4G44lpmgHaHa?rs=1&pid=imgDetMain",
      desc: "A modern bookshelf with open shelving, perfect for displaying books and decor.",

      width: "90cm",
      height: "180cm",
      depth: "30cm",

      material: "Metal and Wood",
      color: "Black",
      weight: "25kg",
      brand: "ShelvingSolutions",
      warranty: "2 years",
    },
    {
      id: 22,
      name: "Luxury Dining Table",
      price: 799.99,
      category: "Table",
      img: "https://th.bing.com/th/id/OIP.amBLjMOW34L2AMELo7Y8sAHaHa?rs=1&pid=imgDetMain",
      desc: "A luxury dining table with a marble top, perfect for elegant dining experiences.",

      width: "200cm",
      height: "75cm",
      depth: "100cm",

      material: "Marble and Metal",
      color: "White",
      weight: "80kg",
      brand: "DiningDeluxe",
      warranty: "10 years",
    },
    {
      id: 23,
      name: "Compact Desk",
      price: 149.99,
      category: "Desk",
      img: "https://th.bing.com/th/id/R.359a1466e8612497f9b1628da1fb2975?rik=SF41tqJ2jkmlXA&pid=imgRaw&r=0",
      desc: "A compact desk with built-in storage, ideal for home offices and small spaces.",

      width: "100cm",
      height: "75cm",
      depth: "50cm",

      material: "MDF",
      color: "White",
      weight: "20kg",
      brand: "OfficePro",
      warranty: "2 years",
    },
    {
      id: 24,
      name: "Leather Sofa",
      price: 599.99,
      category: "Sofa",
      img: "https://th.bing.com/th/id/OIP.FYjM6sQSInh9OxcixPOaJgHaHa?rs=1&pid=imgDetMain",
      desc: "A luxurious leather sofa with a sleek design, perfect for any modern living room.",

      width: "220cm",
      height: "85cm",
      depth: "95cm",

      material: "Leather",
      color: "Black",
      weight: "55kg",
      brand: "LuxSofa",
      warranty: "5 years",
    },
    {
      id: 25,
      name: "Storage Ottoman",
      price: 99.99,
      category: "Ottoman",
      img: "https://th.bing.com/th/id/OIP.ImptOKzVB7EtS4Jzg5v01AHaHa?rs=1&pid=imgDetMain",
      desc: "A versatile storage ottoman with a cushioned top, perfect for extra seating and storage.",

      width: "60cm",
      height: "45cm",
      depth: "60cm",

      material: "Fabric",
      color: "Gray",
      weight: "10kg",
      brand: "MultiPurpose",
      warranty: "1 year",
    },
    {
      id: 26,
      name: "Outdoor Lounge Chair",
      price: 199.99,
      category: "Outdoor",
      img: "https://th.bing.com/th/id/OIP.EO2pqk14TbKa_D8XrPBdfAHaHa?rs=1&pid=imgDetMain",
      desc: "A comfortable outdoor lounge chair with adjustable reclining positions.",

      width: "70cm",
      height: "100cm",
      depth: "140cm",

      material: "Rattan and Metal",
      color: "Beige",
      weight: "15kg",
      brand: "OutdoorComfort",
      warranty: "2 years",
    },
    {
      id: 27,
      name: "Adjustable Standing Desk",
      price: 399.99,
      category: "Desk",
      img: "https://th.bing.com/th/id/OIP.vHSNw0r6tRJvFlDe9eGOLQHaHa?rs=1&pid=imgDetMain",
      desc: "An adjustable standing desk that allows you to switch between sitting and standing positions.",

      width: "120cm",
      height: "75-120cm",
      depth: "60cm",

      material: "MDF and Metal",
      color: "White",
      weight: "30kg",
      brand: "FlexDesk",
      warranty: "5 years",
    },
    {
      id: 28,
      name: "Sectional Sofa",
      price: 999.99,
      category: "Sofa",
      img: "https://th.bing.com/th/id/R.0ddb768d59450273dc7925b6f4ecfeac?rik=DfkyrtEzhVRXlg&pid=imgRaw&r=0",
      desc: "A large sectional sofa with a modular design, perfect for spacious living rooms.",

      width: "300cm",
      height: "85cm",
      depth: "150cm",

      material: "Fabric",
      color: "Blue",
      weight: "90kg",
      brand: "HomeComfort",
      warranty: "7 years",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const fetchProduct = (productId) => {
    return products.find((product) => product.id === productId);
  };

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Nav count={cart.length} />
          <Routes>
            <Route path="/scroll" element={<ScrollComponent />} />
            <Route
              path="/"
              element={<Home product={products} addToCart={addToCart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/d" element={<ProductDetails />} />
            <Route
              path="/products/:productId"
              element={
                <ProductDetailsPage
                  fetchProduct={fetchProduct}
                  product={products}
                />
              }
            />
            <Route
              path="/magnify"
              element={<ReactImageMagnify cart={cart} />}
            />
            <Route path="/cart" element={<Cart component={cart} />} />
            <Route path="/contact" element={<Contactpage component={Cart} />} />
            <Route
              path="/products"
              element={<Products component={Cart} product={products} />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
