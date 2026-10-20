import type { MigrateUpArgs } from '@payloadcms/db-mongodb';

// v1 stored absolute `/uploads/<file>` URLs on upload docs. Removing them lets v3 regenerate
// `${serverURL}/api/uploads/file/<file>`; a stored URL from another origin would be returned as-is.
export async function up({ payload, session }: MigrateUpArgs): Promise<void> {
  await payload.db.collections.uploads.updateMany(
    { url: { $exists: true } },
    { $unset: { url: '' } },
    { session, timestamps: false }
  );
}

// Nothing to restore: v3 derives the URL from `filename` on read.
export async function down(): Promise<void> {}
