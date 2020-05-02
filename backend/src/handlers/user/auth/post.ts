import { Request, Response } from "express";

import { getUserIdAndPassword } from "handlers/user/get.helpers";

import { RequestBody } from "./types";

export default async (request: Request, response: Response) => {
  const data: RequestBody = request.body;
  const { uid, password } = data;

  console.log(data, uid, password);

  if (!password) {
    response.sendStatus(500);
    return;
  }

  const user = await getUserIdAndPassword({
    id: uid,
    password
  });

  console.log(user);

  response.send(user);
};
