import type { PropsWithChildren } from 'react';

import { Transition } from './transition';

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Transition>{children}</Transition>
    </>
  );
}
