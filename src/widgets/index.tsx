import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.settings.registerStringSetting({
    id: "baselight",
    title: "Base Color | Light Mode (hex)",
    description: "Provide a hex color for the base in Light Mode.",
    defaultValue: "#C5C5CC",
  });

  plugin.track(async (reactivePlugin) => {
    const baselight = await reactivePlugin.settings.getSetting("baselight");
    await reactivePlugin.app.registerCSS(
      "baselight",
      `.light .cloze { border-bottom-color: ${baselight}; }`
    );
  });

  await plugin.settings.registerStringSetting({
    id: "basedark",
    title: "Base Color | Dark Mode (hex)",
    description: "Provide a hex color for the base in Dark Mode.",
    defaultValue: "#747676",
  });

  plugin.track(async (reactivePlugin) => {
    const basedark = await reactivePlugin.settings.getSetting("basedark");
    await reactivePlugin.app.registerCSS(
      "basedark",
      `.dark .cloze { border-bottom-color: ${basedark}; }`
    );
  });

  await plugin.settings.registerStringSetting({
    id: "enabledbasehover",
    title: "✅ Enabled | Base Color • Hover (hex)",
    description: "Provide a hex color for the base when the cloze is enabled (on hover).",
    defaultValue: "#3CB371",
  });

  plugin.track(async (reactivePlugin) => {
    const enabledbasehover = await reactivePlugin.settings.getSetting("enabledbasehover");
    await reactivePlugin.app.registerCSS(
      "basehover",
      `.cloze:hover { border-bottom-color: ${enabledbasehover}; }`
    );
  });

  await plugin.settings.registerStringSetting({
    id: "disabledbasehover",
    title: "⛔️ Disabled | Base Color • Hover (hex)",
    description: "Provide a hex color for the base when the cloze is disabled (on hover).",
    defaultValue: "#FA8072",
  });
  
  plugin.track(async (reactivePlugin) => {
    const disabledbasehover = await reactivePlugin.settings.getSetting("disabledbasehover");
    await reactivePlugin.app.registerCSS(
      "disabledbasehover",
      `.disabled_cloze:hover { border-bottom-color: ${disabledbasehover}; }`
    );
  });

await plugin.settings.registerStringSetting({
  id: "clozearrow",
  title: "✅ Enabled | Cloze Arrow Color (hex)",
  description: "Provide a hex color for the cloze arrow when the cloze is enabled.",
  defaultValue: "#3CB371",
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
  title: "✅ Enabled | Cloze Arrow Color • Hover (hex)",
  description: "Provide a hex color for the cloze arrow when the cloze is enabled (on hover).",
  defaultValue: "#3CB371",
  });

plugin.track(async (reactivePlugin) => {
  const clozearrowhover = await reactivePlugin.settings.getSetting("clozearrowhover");
  await reactivePlugin.app.registerCSS(
    "clozearrowhover",
    `.rich-text-editor__change-cloze-button:hover { color: ${clozearrowhover}; }`
  );
  });

  await plugin.settings.registerStringSetting({
    id: "disabledclozearrow",
    title: "⛔️ Disabled | Cloze Arrow Color (hex)",
    description: "Provide a hex color for the cloze arrow when the cloze is disabled.",
    defaultValue: "#FA8072",
    });
  
  plugin.track(async (reactivePlugin) => {
    const disabledclozearrow = await reactivePlugin.settings.getSetting("disabledclozearrow");
    await reactivePlugin.app.registerCSS(
      "disabledclozearrow",
      `.disabled_cloze .rich-text-editor__change-cloze-button, .dark .disabled_cloze .rich-text-editor__change-cloze-button { color: ${disabledclozearrow}; }`
    );
    });
  
  await plugin.settings.registerStringSetting({
    id: "disabledclozearrowhover",
    title: "⛔️ Disabled | Cloze Arrow Color • Hover (hex)",
    description: "Provide a hex color for the cloze arrow when the cloze is disabled (on hover).",
    defaultValue: "#FA8072",
    });
  
  plugin.track(async (reactivePlugin) => {
    const disabledclozearrowhover = await reactivePlugin.settings.getSetting("disabledclozearrowhover");
    await reactivePlugin.app.registerCSS(
      "disabledclozearrowhover",
      `.disabled_cloze .rich-text-editor__change-cloze-button:hover { color: ${disabledclozearrowhover}; }`
    );
    });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
