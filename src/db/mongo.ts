// From Vercel MongoDB starter

import {MongoClient} from 'mongodb';

const uri = process.env.MONGO_URL as string; // your mongodb connection string
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

declare global {
	var _mongoClientPromise: Promise<MongoClient>;
}
if (!process.env.MONGO_URL) {
	throw new Error('Please add your Mongo URI to .env');
}

if (process.env.NODE_ENV === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export const mongoClient = clientPromise;
