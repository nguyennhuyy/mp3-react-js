import { createServer, Model } from 'miragejs';
import { data } from '../data';
export function makeServer() {
	let server = createServer({
		seeds(server) {
			server.db.loadData({
				songs: data.songs,
				albums: data.album,
				albumMedia: data.albumMedia,
				albumsToday: data.albumToday,
				radio: data.radio,
				singer: data.singer,
				event: data.event,
			});
		},
		models: {
			songs: Model,
		},
		routes() {
			this.get('/api/songs', (schema) => {
				return schema.db.songs;
			});
			this.get('/api/albums', (schema) => {
				return schema.db.albums;
			});
			this.get('/api/albumstoday', (schema) => {
				return schema.db.albumsToday;
			});
			this.get('/api/albummedia', (schema) => {
				return schema.db.albumMedia;
			});
			this.get('/api/radio', (schema) => {
				return schema.db.radio;
			});
			this.get('/api/singer', (schema) => {
				return schema.db.singer;
			});
			this.get('/api/event', (schema) => {
				return schema.db.event;
			});
		},
	});
	return server;
}
