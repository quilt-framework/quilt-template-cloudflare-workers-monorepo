import {createHttpHandler, json} from '@quilted/http-handlers';

const handler = createHttpHandler();

handler.get('/', () => json({hello: 'world'}));

export default handler;
