import { Request, Response } from "express";

import constants from "src/constants";

import { getTablePath } from "db/helpers";

import { User } from "handlers/user/types";
import { DB } from "db";
import {AuthCookie} from "handlers/user/auth/types";

const { databases, tables } = constants;

// TODO: Fix types
const getQuerySuccessfulResult = (result): User => {
  return result[0];
};

export default (request: Request, response: Response) => {
  const data: Partial<User> = request.body;

  const tablePath = getTablePath([databases.tredactor, tables.users]);

  const connection = DB.connect();
  connection.connect();

  connection.query(
    `SELECT * FROM ${tablePath} WHERE ?`,
    data,
    (err, result) => {
      if (err) {
        console.log(err);
        response.sendStatus(500);
      } else {
        const user = getQuerySuccessfulResult(result);

        if (!user) {
          response.sendStatus(400);
          return;
        }

        const { id } = user;

        response.cookie(AuthCookie, id).sendStatus(200);
      }
    }
  );

  connection.end();
};
