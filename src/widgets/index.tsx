import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

/**
 * Simple example snippet plugin which shows how to:
 * - Register style settings
 * - Register Custom CSS
 * - Register a command
 *
 * How to Use:
 * - Tag a Rem with ##Plugin Style, or use the /Add Plugin Style command on a Rem
 * - The Rem will be styled with the CSS defined in the plugin
 */
async function onActivate(plugin: ReactRNPlugin) {
  // Register a setting to change the Rem's text color
  await plugin.settings.registerStringSetting({
    id: "borderlight",
    title: "Bottom Border Color | Light Mode (hex)",
    description: "Provide a hex color for the bottom border in Light Mode.",
    defaultValue: "#c5c5cc",
  });

  // Each time the setting changes, re-register the text color css.
  plugin.track(async (reactivePlugin) => {
    const borderlight = await reactivePlugin.settings.getSetting("borderlight");
    await reactivePlugin.app.registerCSS(
      "border-bottom-color",
      `[data-rem-tags~="plugin-style"] .light .cloze {
        border-bottom-color: ${borderlight}; }`
    );
  });

    // Register a setting to change the Rem's text color
  await plugin.settings.registerStringSetting({
    id: "borderdark",
    title: "Border Bottom Color | Dark Mode (hex)",
    description: "Provide a hex color for the bottom border in Dark Mode.",
    defaultValue: "#747676",
  });

  // Each time the setting changes, re-register the text color css.
  plugin.track(async (reactivePlugin) => {
    const borderdark = await reactivePlugin.settings.getSetting("borderdark");
    await reactivePlugin.app.registerCSS(
      "borderdark",
      `[data-rem-tags~="plugin-style"] .dark .cloze {
        border-bottom-color: ${borderdark}; }`
    );
  });

    // Register a setting to change the Rem's text color
  await plugin.settings.registerStringSetting({
    id: "borderhover",
    title: "Bottom Border Color | Hover (hex)",
    description: "Provide a hex color for the bottom border when you hover over it.",
    defaultValue: "#b388eb",
  });

  // Each time the setting changes, re-register the text color css.
  plugin.track(async (reactivePlugin) => {
    const borderhover = await reactivePlugin.settings.getSetting("borderhover");
    await reactivePlugin.app.registerCSS(
      "borderhover",
      `[data-rem-tags~="plugin-style"] .cloze:hover {
        border-bottom-color: ${borderhover}; }`
    );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
