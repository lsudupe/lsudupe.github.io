
import { withContentlayer } from "next-contentlayer";

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        mdxRs: true,
    },
    output: 'export',
};

console.log("nextConfig", nextConfig);

export default withContentlayer(nextConfig as any);
