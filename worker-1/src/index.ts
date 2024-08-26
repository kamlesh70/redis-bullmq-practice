import { createClient } from "redis";

async function bootstrap() {
  try {
    const client = await createClient();
    await client.connect();
    console.log("connected to Redis");
    while (true) {  
      const popValue = await client.rPop('users');
      console.log(popValue);
      await new Promise((resolve, reject) => 
        setTimeout(() => {
        resolve(true);
      }, 2000))
    }
  } catch (error) { 
    console.log("failed to connect with redis ...");
    
  }
} 

bootstrap();