import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const nextConfig: NextConfig = {
  // The CMS has no frontend; send `/` to the admin panel.
  redirects: async () => [{ source: '/', destination: '/admin', permanent: false }],
  // Keep v1 file URLs working through Payload. `beforeFiles` skips `public/uploads`, which Next
  // would only serve for files present at startup.
  rewrites: async () => ({
    beforeFiles: [{ source: '/uploads/:filename', destination: '/api/uploads/file/:filename' }],
  }),
  turbopack: { root: path.dirname(fileURLToPath(import.meta.url)) },
  // Stop `next dev` from writing an AGENTS.md into the project.
  agentRules: false,
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
