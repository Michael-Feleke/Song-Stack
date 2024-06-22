import ac from "../config/accessControl.js";
import user from "../models/users/usersModel.js";

const checkUserPermission = function (action, resource) {
  return async function (req, res, next) {
    const { role } = req.foundUser;

    const permission = ac.can(role)[action](resource);

    if (!permission.granted)
      return res.status(403).json({ message: "Forbidden account operation" });

    if (["updateOwn", "deleteOwn"].includes(action)) {
      const resourceId = req.params.id;

      const { _id } = req.foundUser;

      const resourceItem = await user.findUserById(resourceId);

      if (!resourceItem || resourceItem._id.toString() !== _id.toString())
        return res.status(403).json({ message: "Forbidden account operation" });
    }

    req.permission = permission;

    next();
  };
};

export { checkUserPermission };
