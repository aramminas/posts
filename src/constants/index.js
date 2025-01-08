const subRoutes = (key) => [
  {
    key: `${key}-header`,
    path: "/post-header",
    name: "Post Header",
  },
  {
    key: `${key}-layout`,
    path: "/post-layout",
    name: "Post Layout",
  },
  {
    key: `${key}-share-buttons`,
    path: "/share-buttons",
    name: "Share Buttons",
  },
  {
    key: `${key}-gallery-post`,
    path: "/gallery-post",
    name: "Gallery Post",
  },
  {
    key: `${key}-video--post`,
    path: "/video-post",
    name: "Video Post",
  },
];

export const routes = [
  {
    key: "home",
    path: "/",
    name: "Home",
    subRoutes: [],
  },
  {
    key: "demos",
    path: "/demos",
    name: "Demos",
    subRoutes: [],
  },
  {
    key: "post",
    path: "/post",
    name: "Post",
    subRoutes: subRoutes("posts"),
  },
  {
    key: "features",
    path: "/features",
    name: "Features",
    subRoutes: subRoutes("features"),
  },
  {
    key: "categories",
    path: "/categories",
    name: "Categories",
    subRoutes: [],
  },
  {
    key: "shop",
    path: "/shop",
    name: "Shop",
    subRoutes: [],
  },
  {
    key: "buy-now",
    path: "/buy-now",
    name: "Buy Now",
  },
];

export const scrollStartPosition = 200;
