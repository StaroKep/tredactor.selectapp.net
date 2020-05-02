import constants from "src/constants";

import { DB } from "db";
import { getTablePath } from "db/helpers";

import { User } from "handlers/user/types";

const { databases, tables } = constants;

export async function getUserIdAndPassword(params: {
  id: User["id"];
  password: User["password"];
}) {
  const tablePath = getTablePath([databases.tredactor, tables.users]);

  const connection = DB.connect();
  connection.connect();

  const result = await connection.query(
    `SELECT * FROM ${tablePath} WHERE ?? = ? AND ?? = ?`,
    ["id", params.id, "password", params.password]
  );

  connection.end();
  return result;
}
