/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const env = {
  SERVER_NAME: (()=> {
    if (isDev) return 'http://localhost:3000/'
    if (isProd) return 'https://stem-flower.vercel.app/'
    return undefined
  })(),
}



export default nextConfig;
