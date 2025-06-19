import nextra from "nextra";

const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : undefined;

const distDir = process.env.NEXT_PUBLIC_DIST_DIR || "out";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  basePath,
  distDir,
  // ... Add regular Next.js options here
});
