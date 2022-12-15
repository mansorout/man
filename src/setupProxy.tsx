/**
 * @author: Jaskirat Singh
 * @created : 14th Dec 2022
 * @summary : Middleware use to proxified data from one end to another.
 */

import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
  console.log(app, "proxy")
  app.use(
    '/authentication/otp/send',
    createProxyMiddleware({
      target: "https://k41xvsg1t7.execute-api.ap-south-1.amazonaws.com",
      changeOrigin: true,
    })
  );
};