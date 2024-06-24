import { ComponentLoader } from "adminjs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const componentLoader = new ComponentLoader();

const Components = {
  UserAvatar: componentLoader.add(
    "MyAvatarComponent",
    path.join(__dirname, "user-avatar")
  ),
};

export { componentLoader, Components };
