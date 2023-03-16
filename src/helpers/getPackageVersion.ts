import * as fs from "fs";
import * as Path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = Path.dirname(__filename);

export const getPackageVersion = () => {
  const packageJSONPath = Path.resolve(__dirname, "../../package.json");
  const content = fs.readFileSync(packageJSONPath, { encoding: "utf8" });
  const config = JSON.parse(content);

  return config.version;
};
