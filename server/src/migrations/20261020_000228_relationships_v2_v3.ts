import type { MigrateUpArgs } from '@payloadcms/db-mongodb';
import { migrateRelationshipsV2_V3 } from '@payloadcms/db-mongodb/migration-utils';

// Official Payload migration: v1/v2 stored relationship and upload IDs as strings, v3 expects ObjectIds.
export async function up({ req }: MigrateUpArgs): Promise<void> {
  await migrateRelationshipsV2_V3({ batchSize: 100, req });
}

// Not reversible: v3 cannot read string IDs, and there is no v1 runtime to go back to.
export async function down(): Promise<void> {}
