import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🐦‍🔥 akainotes",
    pageTitleSuffix: "Welcome to my org notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fff9f9",        // Fond très pâle légèrement rosé
          lightgray: "#f3eaea",    // Gris clair chaud
          gray: "#c8b8b8",         // Gris doux teinté rose
          darkgray: "#8c6f6f",     // Marron/rosé adouci
          dark: "#5c3c3c",         // Brun rubis
          secondary: "#a05c61",    // Rouge rubis doux (accent principal)
          tertiary: "#d9a5b3",     // Rose sablé / beige rosé
          highlight: "rgba(240, 110, 130, 0.1)", // survol léger rubis
          textHighlight: "#ffd3da88", // surbrillance texte pastel
        },
        darkMode: {
          light: "#201618",        // Fond foncé légèrement pourpre
          lightgray: "#3e2e30",    // Gris brun profond
          gray: "#7a5e5e",         // Gris adouci avec une touche rouge
          darkgray: "#e4c2c2",     // Clair chaud dans le dark mode
          dark: "#f5e9e9",         // Blanc cassé rosé
          secondary: "#e38b94",    // Rose rubis doux (accent)
          tertiary: "#c5a6aa",     // Rose désaturé / pastel
          highlight: "rgba(240, 110, 130, 0.15)", // Highlight douce
          textHighlight: "#ffd3da88", // Surbrillance douce en dark aussi
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.OxHugoFlavouredMarkdown,
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
