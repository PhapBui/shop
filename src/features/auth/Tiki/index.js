const crypto = require("crypto");

const client_key = "2bw8mMwRCUMDzwwjFsTUYqmVDv0RAd2K";
const client_secret =
  "vogjy01WMSPGny53R@rI2X~h@f4Ktr@hTFuOqqwX54z0TD7d9CHNT_J~93Ih9~v/";
const body = {
  id: 123,
};

const timestamp = Date.now();

function base64URLEncode(data) {
  const base64 = Buffer.from(data, "utf8").toString("base64");
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function sign(secret, payload) {
  const signature = crypto
    .createHmac("sha256", client_secret)
    .update(payload)
    .digest("hex");
  return signature;
}

const payload = timestamp + "." + client_key + "." + JSON.stringify(body);
console.log("payload: ", payload);
const encodedPayload = base64URLEncode(payload);
console.log("encoded_payload: ", encodedPayload);
const signature = sign(client_secret, encodedPayload);
console.log("signature: ", signature);
export default signature;
