const HOST = location.origin.replace(/^http/, 'ws');
export const ws = new WebSocket(HOST);
