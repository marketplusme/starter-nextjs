const dev = process.env.NODE_ENV !== "production";

const keys = {
  api_endpoint: dev ? process.env.DEV_API_URL : process.env.PRODUCTION_API_URL,
};

export default keys;
