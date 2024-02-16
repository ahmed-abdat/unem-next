/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  aggressiveFrontEndNavCaching: true,
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,

  register : true,
  skipWaiting: true,
  // dynamicStartUrl: true,
  cacheStartUrl : true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
    // exclude: ["https://firebasestorage.googleapis.com/.*"],
  },
});




export default withPWA({
  images: {
    domains: ["tenor.com", "firebasestorage.googleapis.com"],
  },
  // Your Next.js config
});
