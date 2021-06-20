# Quilt Cloudflare Workers Monorepo Template

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/quilt-framework/quilt-template-cloudflare-workers-monorepo)

This repo is a template for creating a [Quilt application](./TODO) that runs on Cloudflare Workers. To get started, either click the Deploy button above, or install [Wrangler](https://github.com/cloudflare/wrangler) and initialize your project by running:

```bash
wrangler generate my-project https://github.com/quilt-framework/quilt-template-cloudflare-workers
```

In the project that you create, you’ll want to fill in `account_id` and `name` in your `wrangler.toml` file, and the `name` field in your `package.json`. This template also provides a `deploy` GitHub workflow that will automatically deploy to Cloudflare when you merge into the `main` branch. For this workflow to run, you’ll need to set the `CF_API_TOKEN` and `CF_ACCOUNT_ID` secrets in GitHub. See the documentation for the [Cloudflare GitHub action](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler) for details on finding these values.

By default, Quilt produces Cloudflare Workers in the newer [modules format](https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules), which current requires a paid Cloudflare plan. If you want to deploy to a free Cloudflare account, you will need to update the `sewing-kit.config.ts` file in the repo to change the output format to [service-worker](https://developers.cloudflare.com/workers/cli-wrangler/configuration#service-workers):

```ts
import {createApp, quiltApp} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/sewing-kit';

export default createApp((app) => {
  app.use(quiltApp());
  app.use(cloudflareWorkers({format: 'service-worker'}));
});
```

Once your project is initialized, navigate to the root of the project, and run `yarn install && yarn develop` to start working on your application. Have fun!
