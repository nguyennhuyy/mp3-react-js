import { createServer, Model } from 'miragejs';
import { songs, albums, albumsToday, albumMedia } from '../data';
export function makeServer() {
	let server = createServer({
		seeds(server) {
			server.db.loadData({
				songs,
				albums,
				albumsToday,
				albumMedia,
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
		},
	});
	return server;
}
