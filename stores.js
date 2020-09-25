import { writable } from "svelte/store";
import axios from "redaxios";
import { node } from "./grains";

export const typing = writable();

export const packChoice = writable();
export const backendChoice = writable();
export const frontendChoice = writable();

export async function sendReq({
  type,
  version,
  framework = null,
  database = null
}) {
  let payload = {};
  if (type.toLowerCase() === "node") {
    payload = node(version, framework, database);
  }

  try {
    const sandboxId = await axios.post(
      "https://codesandbox.io/api/v1/sandboxes/define?json=1",
      payload
    );
    const win = window.open(
      `https://codesandbox.io/s/${sandboxId.data["sandbox_id"]}`,
      "_blank"
    );
    win.focus();
  } catch (e) {
    return "error";
  }
}
