import { writable } from 'svelte/store';

import type { Guest } from 'src/routes/api/guests.json';

export const guestsStore = writable<Guest[]>([]);
