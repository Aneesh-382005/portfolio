/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

    if (!resumeUrl) {
      return [];
    }

    return [
      {
        source: "/Aneesh_Grover_Resume.pdf",
        destination: "/api/resume",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
