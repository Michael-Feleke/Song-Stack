import ac from "../config/accessControl.js";
import song from "../models/songs/songsModel.js";

const checkSongPermission = function (action, resource) {
  return async function (req, res, next) {
    const { role } = req.foundUser;

    const permission = ac.can(role)[action](resource);

    if (!permission.granted)
      return res.status(403).json({ message: "Forbidden song operation" });

    if (["createOwn", "readOwn", "updateOwn", "deleteOwn"].includes(action)) {
      const resourceId = req.params.id;

      const { _id } = req.foundUser;

      console.log(req.url);

      const resourceItem = resourceId
        ? await song.getSongById(resourceId)
        : await song.getAllOwnSongs(_id);

      if (!resourceItem)
        return res.status(403).json({ message: "Forbidden song operation" });

      if (resourceId && resourceItem.createdBy !== _id)
        return res.status(403).json({ message: "Forbidden song operation" });

      const isForbidden = resourceItem.some((resource) => {
        if (resource.createdBy !== _id.toString()) return true;
        else return false;
      });
      if (isForbidden)
        return res.status(403).json({ message: "Forbidden song operation" });
    }

    req.permission = permission;

    next();
  };
};

export { checkSongPermission };
