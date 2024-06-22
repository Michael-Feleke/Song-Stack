import { AccessControl } from "accesscontrol";

const ac = new AccessControl();

ac.grant("user")
  .createOwn("song")
  .readOwn("song")
  .deleteOwn("song")
  .updateOwn("song")
  .createOwn("account")
  .readOwn("account")
  .updateOwn("account")
  .deleteOwn("account");

ac.grant("admin")
  .extend("user")
  .readAny("song")
  .deleteAny("song")
  .updateAny("song")
  .readAny("account", ["*", "!password"])
  .deleteAny("account")
  .updateAny("account");

export default ac;
