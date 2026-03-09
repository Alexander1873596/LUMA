import * as Sentry from "@sentry/react";

let exeptionsCaptureEnabled = true;

function updateExeptionsCaptureEnabled() {
  // @ts-ignore
  if (exeptionsCaptureEnabled) window.__LumaCloudModAnalyticsEnabled = true;
  // @ts-ignore
  else window.__LumaCloudModAnalyticsEnabled = false;
}

window.LumaCloudMod.onStorageChanged((key: string, value: any) => {
  if (key === "settings/exeptionsCaptureEnabled") exeptionsCaptureEnabled = value === false ? false : true;
  updateExeptionsCaptureEnabled();
});

(async () => {
  exeptionsCaptureEnabled =
    (await window.LumaCloudMod.getStorageValue("settings/exeptionsCaptureEnabled")) === false ? false : true;
  updateExeptionsCaptureEnabled();
})();
