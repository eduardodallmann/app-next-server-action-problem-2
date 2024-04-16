'use server';

import { redirect } from 'next/navigation';

import EventDrawer from '~/components/events/drawer';

export default async function EditEventPage({
  params,
}: {
  params: { slug: string };
}) {
  if (params.slug === 'new') {
    redirect(`/events/${Math.random().toString(36).substring(7)}`);
  }

  const event: any =
    (global.cacheEvents.get('events') as Array<any>)?.find(
      (e) => e.id === params.slug,
    ) || {};

  return <EventDrawer event={event} eventId={params.slug} />;
}
