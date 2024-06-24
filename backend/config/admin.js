import AdminJs, { ListAction } from "adminjs";
import AdminJsExpress from "@adminjs/express";
import * as AdminJsMongoose from "@adminjs/mongoose";
import user from "../models/users/usersModel.js";
import song from "../models/songs/songsModel.js";
import dotenv from "dotenv";
import { Components, componentLoader } from "../components/components.js";

dotenv.config();

AdminJs.registerAdapter(AdminJsMongoose);

const adminJs = new AdminJs({
  resources: [
    {
      resource: user,
      options: {
        parent: {
          name: "User Management",
        },
        listProperties: ["_id", "email", "role", "userAvatar"],
        showProperties: ["_id", "email", "role", "userAvatar"],
        editProperties: ["email", "role"],
        properties: {
          createdBy: {
            type: "reference",
            reference: "user",
          },
          userAvatar: {
            type: "string",
            components: {
              list: Components.UserAvatar,
            },
          },
        },
      },
    },
    {
      resource: song,
      options: {
        parent: {
          name: "Song Management",
        },
      },
    },
  ],
  componentLoader,
  rootPath: "/admin",
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const router = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "adminjs",
  cookiePassword: process.env.SECRET_KEY,
});

adminJs.watch();

export { adminJs, router };
