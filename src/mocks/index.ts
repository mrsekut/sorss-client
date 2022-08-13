if (typeof window === 'undefined') {
  // import('./server').then(s => s.worker.listen());
} else {
  import('./browser').then(s => s.worker.start());
}
export {};
