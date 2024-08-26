import express from "express";
import { createClient } from "redis";
import bodyParser from "body-parser";

async function bootstrap() {
  try {
    const client = await createClient();
    await client.connect();
    console.log("connected to Redis");
    const app = express();
    app.listen(3000, () => {
      console.log("listening on port 3000...");
    });
    app.use(bodyParser.json());
    app.post("/redis-push", async (req, res) => {
      const body = req.body;
      if (body) {
        const resp = await client.lPush("users", JSON.stringify(body));
        console.log(resp);
        res.send("pushed to redis query");
        return;
      }
      res.send("failed")
    })
  } catch (error) {
    console.log("failed to connect with redis ...");
  }
}

bootstrap();