import * as migration_20261020_000228_relationships_v2_v3 from './20261020_000228_relationships_v2_v3';
import * as migration_20261020_000247_unset_v1_upload_urls from './20261020_000247_unset_v1_upload_urls';

export const migrations = [
  {
    up: migration_20261020_000228_relationships_v2_v3.up,
    down: migration_20261020_000228_relationships_v2_v3.down,
    name: '20261020_000228_relationships_v2_v3',
  },
  {
    up: migration_20261020_000247_unset_v1_upload_urls.up,
    down: migration_20261020_000247_unset_v1_upload_urls.down,
    name: '20261020_000247_unset_v1_upload_urls',
  },
];
