import {AkdapiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {AkdapiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new AkdapiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
