import { z } from 'zod';
import { publicProcedure } from '~/server/trpc/trpc';

export const example = publicProcedure
  .input(z.void())
  .output(z.void())
  .query(async ({ ctx, input }) => {
  });
