import type { Entrypoint } from "jsr:@denops/std@7.0.0";
import { is, maybe } from "jsr:@core/unknownutil@4.3.0";
import { OBSWebSocket } from "npm:obs-websocket-js@5.0.6";

let obs: OBSWebSocket | undefined;

export const main: Entrypoint = (denops) => {
  denops.dispatcher = {
    new: () => {
      obs = new OBSWebSocket();
    },
    connect: async (url?: unknown, password?: unknown) => {
      await obs?.connect(
        maybe(url, is.String),
        maybe(password, is.String),
      );
    },
    disconnect: async () => {
      await obs?.disconnect();
    },
    identified: (): unknown => {
      return obs?.identified;
    },
  };
};
