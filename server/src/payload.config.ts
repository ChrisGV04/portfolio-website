import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { Icon } from './admin/Icon';
import { Logo } from './admin/Logo';
import { Projects } from './collections/Projects';
import { Uploads } from './collections/Uploads';
import { Users } from './collections/Users';
import { ContactPage } from './globals/ContactPage';
import { HomePage } from './globals/Homepage';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default buildConfig({
  maxDepth: 5,
  defaultDepth: 2,
  serverURL: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`,
  cors: process.env.CORS_DOMAIN ? [process.env.CORS_DOMAIN] : '*',

  routes: { api: '/api', admin: '/admin' },

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- CGV WEB',
      favicon: '/admin-res/logo/favicon.png',
    },
    components: {
      graphics: { Logo, Icon },
    },
  },

  localization: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    fallback: true,
  },

  globals: [HomePage, ContactPage],
  collections: [Users, Uploads, Projects],

  graphQL: { disable: true },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
