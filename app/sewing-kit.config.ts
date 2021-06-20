import {createApp, quiltApp} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/sewing-kit';

export default createApp((app) => {
  app.entry('./App');
  app.use(quiltApp(), cloudflareWorkers({format: 'service-worker'}));
});
