import {createService, quiltService} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/sewing-kit';

export default createService((service) => {
  service.entry('./api');
  service.use(quiltService(), cloudflareWorkers());
});
