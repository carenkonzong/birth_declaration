import { ENV } from "../../src/config/env";

const create = async (url: string, body: any) => {
  const response = await fetch(`${ENV.API_URL}/${url}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response;
};

export { create };
