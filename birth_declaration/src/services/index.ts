const host = "http://localhost:8080";

const create = async (url: string, body: any) => {
  const response = await fetch(`${host}/${url}`, {
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
