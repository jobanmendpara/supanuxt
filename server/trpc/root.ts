import { createTRPCRouter } from './trpc';
import {
  exampleRouter,
} from '~/server/trpc/routers';

export const appRouter = createTRPCRouter({
  exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
