import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.settings.registerStringSetting({
    id: "borderlight",
    title: "Bottom Border Color | Light Mode (hex)",
    description: "Provide a hex color for the bottom border in Light Mode.",
    defaultValue: "#c5c5cc",
  });

  plugin.track(async (reactivePlugin) => {
    const borderlight = await reactivePlugin.settings.getSetting("borderlight");
    await reactivePlugin.app.registerCSS(
      "borderlight",
      `.light .cloze { border-bottom-color: ${borderlight}; }`
    );
  });

  await plugin.settings.registerStringSetting({
    id: "borderdark",
    title: "Bottom Border Color | Dark Mode (hex)",
    description: "Provide a hex color for the bottom border in Dark Mode.",
    defaultValue: "#747676",
  });

  plugin.track(async (reactivePlugin) => {
    const borderdark = await reactivePlugin.settings.getSetting("borderdark");
    await reactivePlugin.app.registerCSS(
      "borderdark",
      `.dark .cloze { border-bottom-color: ${borderdark}; }`
    );
  });

  await plugin.settings.registerStringSetting({
    id: "borderhover",
    title: "Bottom Border Color | Hover (hex)",
    description: "Provide a hex color for the bottom border when you hover over it.",
    defaultValue: "#b388eb",
  });

  plugin.track(async (reactivePlugin) => {
    const borderhover = await reactivePlugin.settings.getSetting("borderhover");
    await reactivePlugin.app.registerCSS(
      "borderhover",
      `.cloze:hover { border-bottom-color: ${borderhover}; }`
    );
  });

await plugin.settings.registerStringSetting({
  id: "clozearrow",
  title: "Cloze Arrow Color (hex)",
  description: "Provide a hex color for the cloze arrow.",
  defaultValue: "#b388eb",
  });

plugin.track(async (reactivePlugin) => {
  const clozearrow = await reactivePlugin.settings.getSetting("clozearrow");
  await reactivePlugin.app.registerCSS(
    "clozearrow",
    `.rich-text-editor__change-cloze-button, .dark .rich-text-editor__change-cloze-button { color: ${clozearrow}; }`
  );
  });

await plugin.settings.registerStringSetting({
  id: "clozearrowhover",
  title: "Cloze Arrow Color | Hover (hex)",
  description: "Provide a hex color for the cloze arrow.",
  defaultValue: "#b388eb",
  });

plugin.track(async (reactivePlugin) => {
  const clozearrowhover = await reactivePlugin.settings.getSetting("clozearrowhover");
  await reactivePlugin.app.registerCSS(
    "clozearrowhover",
    `.rich-text-editor__change-cloze-button:hover { color: ${clozearrowhover}; }`
  );
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
