# Quilt Cloudflare Workers Monorepo Template

This repo is a template for creating a [Quilt application](./TODO) and [Quilt service](./TODO), both running on [Cloudflare Workers](https://developers.cloudflare.com/workers/). To get started, clone this template repo.

In the project that you create, you’ll want to fill in `account_id` and `name` in the `wrangler.toml` files for the app and API directories, and the `name` field in your `package.json`. This template also provides a `deploy` GitHub workflow that will automatically deploy to Cloudflare when you merge into the `main` branch. For this workflow to run, you’ll need to set the `CF_API_TOKEN` and `CF_ACCOUNT_ID` secrets in GitHub. See the documentation for the [Cloudflare GitHub action](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler) for details on finding these values.

By default, Quilt produces Cloudflare Workers in the newer [modules format](https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules), which current requires a paid Cloudflare plan. If you want to deploy to a free Cloudflare account, you will need to update the `sewing-kit.config.ts` file in the repo to change the output format to [service-worker](https://developers.cloudflare.com/workers/cli-wrangler/configuration#service-workers):

```ts
// This example shows customizing app/sewing-kit.config.ts, but the
// same options are available in the `functions/api/sewing-kit.config.ts`
// file, too.

import {createApp, quiltApp} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/sewing-kit';

export default createApp((app) => {
  app.use(quiltApp());
  app.use(cloudflareWorkers({format: 'service-worker'}));
});
```

You can learn more about customizing the way your projects work on Cloudflare in [Quilt’s Cloudflare deploy documentation](https://github.com/lemonmade/quilt/blob/main/documentation/deploy/cloudflare.md).

Once your project is initialized, navigate to the root of the project, and run `yarn install && yarn develop` to start working on your application. Have fun!
