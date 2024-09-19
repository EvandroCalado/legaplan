/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ["./sass"],
    prependData: `@import "src/sass/main.scss";`,
  },
};

export default nextConfig;
