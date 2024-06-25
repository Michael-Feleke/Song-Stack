import AdminJs from "adminjs";
import AdminJsExpress from "@adminjs/express";
import * as AdminJsMongoose from "@adminjs/mongoose";
import user from "../models/users/usersModel.js";
import song from "../models/songs/songsModel.js";
import dotenv from "dotenv";
import { Components, componentLoader } from "../components/components.js";
import passwordFeature from "@adminjs/passwords";
import bcrypt from "bcrypt";

dotenv.config();

AdminJs.registerAdapter(AdminJsMongoose);

const adminJs = new AdminJs({
  resources: [
    {
      resource: user,
      features: [
        passwordFeature({
          componentLoader,
          properties: {
            encryptedPassword: "password",
            password: "newPassword",
          },
          hash: async (password) => {
            const salt = await bcrypt.genSalt();
            return bcrypt.hash(password, salt);
          },
        }),
      ],
      options: {
        parent: {
          name: "User Management",
          icon: "User",
        },
        listProperties: ["_id", "email", "role", "userAvatar"],
        showProperties: ["_id", "email", "role", "userAvatar"],
        properties: {
          userAvatar: {
            type: "string",
            components: {
              list: Components.UserAvatar,
            },
          },
          password: {
            type: "password",
            isVisible: false,
          },
        },
      },
    },
    {
      resource: song,
      options: {
        parent: {
          name: "Song Management",
          icon: "Music",
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
