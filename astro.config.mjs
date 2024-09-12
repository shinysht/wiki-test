import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightBlog from "starlight-blog";

const site = "https://wiki.example.com";
const github = "https://github.com/";
const discord = "https://discord.com/";
const youtube = "https://www.youtube.com/";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Test",
      social: { github, discord, youtube },
      components: {
        Header: "./src/components/overrides/Header.astro",
		Sidebar: "./src/components/overrides/Sidebar.astro"
      },
      editLink: {
        baseUrl: "https://github.com/shinysht/wiki-test/edit/main/",
      },
      sidebar: [
        {
          label: "Test",
          autogenerate: {
            directory: "test",
          },
        },
      ],
      defaultLocale: "root",
      // optional
      locales: {
        root: {
          label: "English",
          lang: "en", // lang is required for root locales,
        },

        // German docs in `src/content/docs/de/`
        de: {
          label: "Deutsch",
        },
        // France docs in `src/content/docs/fr/`
        fr: {
          label: "France",
        },
      },
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: "hidden",
          },
        }),
        starlightBlog(),
      ],
    }),
  ],
});
