'use server';

import type { PropsWithChildren } from 'react';

import { SavingProvider } from '~/global-context/saving';
import { TransitionProvider } from '~/global-context/transition';

export async function Providers({ children }: PropsWithChildren) {
  return (
    <TransitionProvider>
      <SavingProvider>{children}</SavingProvider>
    </TransitionProvider>
  );
}
