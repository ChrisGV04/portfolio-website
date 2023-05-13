import { GlobalConfig } from 'payload/types';
import { Projects } from '../collections/Projects';
import { Uploads } from '../collections/Uploads';
import { titleField } from '../fields/TitleField';
import { subtextField } from '../fields/SubtextField';

export const HomePage: GlobalConfig = {
  slug: 'homepage',
  access: { read: () => true },
  label: { en: 'Home Page', es: 'Inicio' },
  admin: { group: { en: 'Pages', es: 'Páginas' } },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: { en: 'Cover', es: 'Portada' },
          fields: [
            {
              name: 'gallery',
              type: 'array',
              maxRows: 6,
              minRows: 6,
              required: true,
              label: { en: 'Background gallery', es: 'Galería de fondo' },
              labels: { singular: { en: 'Image', es: 'Imagen' }, plural: { en: 'Images', es: 'Imágenes' } },
              fields: [
                {
                  name: 'img',
                  type: 'upload',
                  required: true,
                  relationTo: Uploads.slug,
                  label: { en: 'Image', es: 'Imagen' },
                },
              ],
            },
          ],
        }, // End Hero

        {
          name: 'about',
          label: { en: 'About', es: 'Acerca' },
          fields: [titleField(), subtextField()],
        }, // End About

        {
          name: 'featProjects',
          label: { en: 'Projects', es: 'Proyectos' },
          fields: [
            {
              name: 'projects',
              required: true,
              type: 'relationship',
              relationTo: Projects.slug,
              hasMany: true,
              min: 3,
              max: 9,
              label: { en: 'Projects', es: 'Proyectos' },
            },
          ],
        }, // End Featured Projects

        {
          name: 'bottomMarquee',
          label: { en: 'Gallery', es: 'Galería' },
          fields: [
            {
              name: 'gallery',
              type: 'array',
              maxRows: 6,
              minRows: 4,
              required: true,
              label: { en: 'Marquee gallery', es: 'Galería carrusel' },
              labels: { singular: { en: 'Image', es: 'Imagen' }, plural: { en: 'Images', es: 'Imágenes' } },
              fields: [
                {
                  name: 'img',
                  type: 'upload',
                  required: true,
                  relationTo: Uploads.slug,
                  label: { en: 'Image', es: 'Imagen' },
                },
              ],
            },
          ],
        }, // End Bottom Marquee
      ],
    },
  ],
};
