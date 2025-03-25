// javaScript Assincrono
// await async
// Fullfilld - completed

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://luuh100:qUdWtdroz3JcnFQU@cluster0.m0u9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify-back");

//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
