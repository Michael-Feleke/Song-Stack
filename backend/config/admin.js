import AdminJs from "adminjs";
import AdminJsExpress from "@adminjs/express";
import * as AdminJsMongoose from "@adminjs/mongoose";
import user from "../models/users/usersModel.js";
import song from "../models/songs/songsModel.js";
import dotenv from "dotenv";

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

export { adminJs, router };
