'use server';

import type { PropsWithChildren } from 'react';

import { loadEvents } from '~/actions/events/load';
import { EventsTable } from '~/components/events/table';

export default async function EventLayout({ children }: PropsWithChildren) {
  const { events } = await loadEvents();

  return (
    <>
      <EventsTable events={events} />
      {children}
    </>
  );
}
