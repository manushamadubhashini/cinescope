import { MongoClient } from "mongodb";

const OPTIONS = {}
const MONGODB_URL = process.env.MONGODB_URL 
const client = new MongoClient(MONGODB_URL , OPTIONS)
export const db = client.db("sample_mflix") // create mongodb instance