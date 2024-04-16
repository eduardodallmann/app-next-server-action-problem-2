export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const NodeCache = (await import('node-cache')).default;

    global.cacheEvents = new NodeCache();

    global.cacheEvents.set('events', [
      {
        id: 'fdrt43',
        name: 'Event 1',
        description: 'This is the first event',
      },
      {
        id: 'hfyttr5',
        name: 'Event 2',
        description: 'This is the second event',
      },
    ]);
  }
}
