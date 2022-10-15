import { writable } from 'svelte/store';

import type { Guest } from 'src/routes/api/guests/+server';

export const guestsStore = writable<Guest[]>([]);
