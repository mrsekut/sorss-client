import { setupWorker } from 'msw';
import { handlers } from '../features/feeds/handler.mock';

export const worker = setupWorker(...handlers);
