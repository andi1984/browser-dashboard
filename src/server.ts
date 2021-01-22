require("dotenv").config();

import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV, NAV_DATA } = process.env;
const dev = NODE_ENV === "development";

const app = polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: () => {
        return { NAV_DATA };
      },
    })
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });

export default app;
