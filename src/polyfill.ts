// src/polyfill.ts
import * as crypto from 'crypto';

// Ensure global crypto exists (needed for ScheduleModule)
if (!(global as any).crypto) {
  (global as any).crypto = crypto;
}
