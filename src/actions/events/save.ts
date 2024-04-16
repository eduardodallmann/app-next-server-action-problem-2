'use server';

import { revalidatePath } from 'next/cache';

import type { EventEntity } from '~/entities/event';

export async function saveEvent(eventId: string, eventReq: EventEntity) {
  const events: Array<any> = global.cacheEvents.get('events') || [];
  global.cacheEvents.set('events', [
    ...events.filter((e) => e.id !== eventId),
    { ...eventReq, id: eventId },
  ]);

  revalidatePath('/events');

  return {
    success: true,
    data: eventReq,
  };
}
