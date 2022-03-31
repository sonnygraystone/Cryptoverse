import request from "superagent";
export function getCrypto() {
  return request.get("/api/v1/crypto").then((response) => {
    // console.log("resp body api", response.body);
    return response.body;
  });
}
