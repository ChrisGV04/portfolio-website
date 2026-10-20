import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { en } from '@payloadcms/translations/languages/en';
import { es } from '@payloadcms/translations/languages/es';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Projects } from './collections/Projects';
import { Uploads } from './collections/Uploads';
import { Users } from './collections/Users';
import { ContactPage } from './globals/ContactPage';
import { GlobalInfo } from './globals/GlobalInfo';
import { HomePage } from './globals/Homepage';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? '',
  // Enabling collation makes string sorts locale-aware (`Árbol` before `Banana`); Payload sets the request locale.
  db: mongooseAdapter({ url: process.env.MONGODB_URI ?? '', collation: {} }),
  sharp,

  maxDepth: 5,
  defaultDepth: 2,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: process.env.CORS_DOMAIN ? [process.env.CORS_DOMAIN] : '*',

  routes: { api: '/api', admin: '/admin' },

  admin: {
    user: Users.slug,
    importMap: { baseDir: dirname },
    meta: {
      titleSuffix: '- CGV WEB',
      icons: [{ rel: 'icon', type: 'image/png', url: '/admin-res/logo/favicon.png' }],
    },
    components: {
      graphics: { Logo: '/admin/Logo#Logo', Icon: '/admin/Icon#Icon' },
    },
  },

  i18n: { supportedLanguages: { en, es } },

  localization: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    fallback: true,
  },

  globals: [GlobalInfo, HomePage, ContactPage],
  collections: [Users, Uploads, Projects],

  graphQL: { disable: true },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
