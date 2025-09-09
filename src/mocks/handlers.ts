import { http, HttpResponse } from 'msw';

// Add/adjust to your needs
export const handlers = [
  http.get('/api/health', () => HttpResponse.json({ ok: true })),
];