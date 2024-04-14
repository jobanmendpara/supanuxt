import type { inferQueryKeyStore } from '@lukemorales/query-key-factory';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { api } from '~/plugins/server';

const supabaseUser = useSupabaseUser();
const supabase = useSupabaseClient();

export const queries = createQueryKeyStore({
  app: {
    user: (userId: MaybeRef<string>) => ({
      queryKey: [userId] as const,
      queryFn: async () => {
        await api.exampleRouter.example.query();
      },
    }),
  },
});

export type AppQueryKeys = inferQueryKeyStore<typeof queries>;
