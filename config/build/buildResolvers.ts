import { ResolveOptions } from "webpack";

export function buildrRsolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
