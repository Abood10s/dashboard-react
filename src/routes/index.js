import React from "react";
const HomePage = React.lazy(() => import("../pages/Home"));
const ProductsPage = React.lazy(() => import("../pages/Products"));
const LoginPage = React.lazy(() => import("../pages/Login"));

export const PATHS = {
  OVERVIEW: "/",
  LOGIN: "/login",
  ACCOUNT: "/about",
  PRODUCTS: "/products",
  SETTINGS: "/settings",
  CONTACT_US: "/contact",
  SINGLE_BLOG: "/blog/:id",
};

export const router = [
  { index: true, element: <HomePage /> },
  { path: PATHS.PRODUCTS, element: <ProductsPage /> },
  { path: PATHS.LOGIN, element: <LoginPage /> },
  { path: PATHS.ACCOUNT, element: <p>ACCOUNT</p> },
  { path: PATHS.SETTINGS, element: <p>SETTINGS</p> },
  { path: PATHS.CONTACT_US, element: <p>CONTACT_US</p> },
  { path: PATHS.SINGLE_BLOG, element: <p>SINGLE_BLOG</p> },
  { path: "*", element: <p>test</p> },
];
