<script setup lang="ts">
import { Project } from '~/types/cms';
import DesktopMedia from '~/components/portfolio/blocks/DesktopMedia.vue';
import FullscreenImg from '~/components/portfolio/blocks/FullscreenImg.vue';
import SimpleText from '~/components/portfolio/blocks/SimpleText.vue';
import TextMedia from '~/components/portfolio/blocks/TextMedia.vue';
import TextMobile from '~/components/portfolio/blocks/TextMobile.vue';

const project: Project = {
  id: 'apjwsfeiowp',
  title: 'Nombre del proyecto',
  slug: 'nombre-proyecto',
  url: 'https://chrisgvdev.com',
  meta: { company: 'CGV WEB', year: 2022 },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  theme: 'pn',
  categories: [
    {
      id: 'fwpoesfjp',
      slug: 'platforms',
      title: 'Plataformas',
    },
    {
      id: 'fwpoesfjh',
      slug: 'web-apps',
      title: 'Apps web',
    },
  ],
  featuredMedia: {
    id: 'owiendsofiew',
    mimeType: 'image/avif',
    alt: 'Imagen destacada',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    url: 'https://images.unsplash.com/photo-1672651158855-f225fe553b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=60',
  },

  content: [
    {
      id: 'gnewsdoieo',
      blockName: 'Simple text',
      blockType: 'block-simple-text',
      title: 'Bloque informativo para dar contexto al proyecto o cualquier otro dato.',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente exercitationem dolorum inventore ad ducimus quos, error hic quibusdam tempore tenetur dolorem eaque. Dignissimos laudantium hic voluptatem sequi facilis dolorem itaque corrupti assumenda natus nihil blanditiis tempora mollitia nam sed odit consequatur, a ab temporibus?\n\nExplicabo provident mollitia facere aliquid, voluptatibus laudantium. Porro nostrum dolor ullam rerum corrupti. Deleniti mollitia a error quam in doloremque, blanditiis aliquid velit aut incidunt officiis deserunt magnam, inventore eos voluptates modi. Adipisci fugiat ullam officia, sed temporibus praesentium ab facilis impedit earum minima obcaecati, ratione expedita velit harum ad nostrum facere non odit nihil.',
    }, // Simple text
    {
      id: 'pfihcndwse',
      blockName: 'Desktop media',
      blockType: 'block-desktop-media',
      img: {
        id: 'breieuwoqhdnho',
        alt: 'Relámpagos',
        mimeType: 'image/avif',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        url: 'https://images.unsplash.com/photo-1672274489122-8d20cb7caf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=60',
      },
    }, // Desktop image
    {
      id: 'pgoiresjgvwoifaw',
      blockName: 'Text media',
      blockType: 'block-text-media',
      mediaPos: 'r',
      title: 'Bloque de texto con fotografía lado a lado',
      body: 'Lorem ipsum dolor sit amet consectetur. Phasellus interdum urna aliquam est. Venenatis ac nunc tortor augue eget ultrices. Euismod dignissim in tristique sociis venenatis pellentesque mi a interdum. Ultricies vel ultrices augue ut scelerisque rhoncus.',
      media: {
        id: 'vesdovigenoio',
        mimeType: 'image/avif',
        alt: 'La luna',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        url: 'https://images.unsplash.com/photo-1672608322232-be8fbf473789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=60',
      },
    }, // Text media block
    {
      id: 'geroisnxdio',
      blockName: 'Fullscreen image',
      blockType: 'block-fullscreen-img',
      img: {
        id: 'vfepoijqdwaoin',
        mimeType: 'image/avif',
        alt: 'La luna',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        url: 'https://images.unsplash.com/photo-1672651158520-e2ee88dfd552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=60',
      },
    }, // Fullscreen image
    {
      id: 'gewodvihfwsioef',
      blockName: 'Text mobile',
      blockType: 'block-text-mobile',
      mediaPos: 'l',
      title: 'Bloque de ilustración en móvil y diseño responsivo',
      body: 'Lorem ipsum dolor sit amet consectetur. Sed magna eget quam in molestie. Integer ante in massa orci vulputate volutpat cras massa. Est massa facilisi adipiscing elit consectetur aenean.\n\nMagna fermentum nisl bibendum pellentesque sit natoque. Scelerisque enim non amet luctus imperdiet. Diam hac duis nibh quis viverra.',
      media: [
        {
          id: '009fyhyw20psfjc',
          res: {
            id: 'vfepoijqdwaoin',
            mimeType: 'image/avif',
            alt: 'La luna',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            url: 'https://images.unsplash.com/photo-1672651158520-e2ee88dfd552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
          },
        },
        {
          id: 'gwergowi430dw',
          res: {
            id: 'vfepoijqdwaoin',
            mimeType: 'image/avif',
            alt: 'La luna',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            url: 'https://images.unsplash.com/photo-1672627695765-af28a43d40ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
          },
        },
      ],
    }, // Text media
  ],
};

useHead({ title: project.title });

const themeBg = computedEager(() => {
  switch (project.theme) {
    case 'gr':
      return 'bg-gray-100';
    case 'rd':
      return 'bg-red-50';
    case 'or':
      return 'bg-orange-100';
    case 'am':
      return 'bg-amber-50';
    case 'lm':
      return 'bg-lime-100';
    case 'gn':
      return 'bg-green-50';
    case 'em':
      return 'bg-emerald-100';
    case 'tl':
      return 'bg-teal-100';
    case 'cy':
      return 'bg-cyan-50';
    case 'sk':
      return 'bg-sky-100';
    case 'bl':
      return 'bg-blue-100';
    case 'in':
      return 'bg-indigo-100';
    case 'vl':
      return 'bg-violet-100';
    case 'pr':
      return 'bg-purple-100';
    case 'fc':
      return 'bg-fuchsia-50';
    case 'pn':
      return 'bg-pink-100';
    default:
      return 'bg-gray-50';
  }
});
</script>

<template>
  <main>
    <Body :class="themeBg" />

    <PortfolioBlocksHero :project="project" />
    <component
      v-for="block in project.content"
      :key="block.id"
      :block="block"
      :is="
        block.blockType === 'block-desktop-media'
          ? DesktopMedia
          : block.blockType === 'block-fullscreen-img'
          ? FullscreenImg
          : block.blockType === 'block-simple-text'
          ? SimpleText
          : block.blockType === 'block-text-media'
          ? TextMedia
          : TextMobile
      "
    />
  </main>
</template>
