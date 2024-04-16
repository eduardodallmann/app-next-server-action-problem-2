export async function loadEvents() {
  const events: Array<any> = global.cacheEvents.get('events') || [];

  return { events };
}
