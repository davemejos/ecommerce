import * as migration_20260118_102125 from './20260118_102125';
import * as migration_20260118_133508_add_wishlists from './20260118_133508_add_wishlists';

export const migrations = [
  {
    up: migration_20260118_102125.up,
    down: migration_20260118_102125.down,
    name: '20260118_102125',
  },
  {
    up: migration_20260118_133508_add_wishlists.up,
    down: migration_20260118_133508_add_wishlists.down,
    name: '20260118_133508_add_wishlists'
  },
];
