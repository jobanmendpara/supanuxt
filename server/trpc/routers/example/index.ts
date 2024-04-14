import endpoints from './endpoints';
import { createTRPCRouter } from '~/server/trpc/trpc';

export const exampleRouter = createTRPCRouter({
  ...endpoints,
});
