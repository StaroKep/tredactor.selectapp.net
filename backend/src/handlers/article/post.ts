import { Request, Response } from "express";

import constants from "src/constants";

import { DB } from "db";
import { getTablePath } from "db/helpers";

import { Article } from "./types";

const { databases, tables } = constants;

export default (request: Request, response: Response) => {
  const data: Partial<Article> = request.body;

  const { body } = data;
  const stringifyedBody = JSON.stringify(body);

  const modyfiedData = {
    ...data,
    body: stringifyedBody
  };
  console.log(modyfiedData);

  const tablePath = getTablePath([databases.tredactor, tables.articles]);

  const connection = DB.connect();
  connection.connect();

  connection.query(
    `INSERT INTO ${tablePath} SET ?`,
    modyfiedData,
    (err, result) => {
      if (err) {
        response.sendStatus(500);
        return;
      }

      const { insertId: id } = result;

      response.send({
        id
      });
    }
  );

  connection.end();
};
