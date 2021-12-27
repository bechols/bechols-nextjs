const cp = require("child_process");
const gitSha = cp.execSync("git rev-parse --short HEAD", {
  cwd: __dirname,
  encoding: "utf8",
});

module.exports = {
  env: {
    gitShaShort: gitSha,
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
