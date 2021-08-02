import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";

const ormOptions: any = {
	type: 'mysql',
	host: 'localhost',
	port: '3306',
	username: 'root',
	password: '',
	database: 'allowance-api',
	timezone: 'Z',
	logging: ["query", "error"],
	entities: ['entity/**/*.ts'],
	migrations: ['migration/**/*.ts'],
	migrationsRun: true
};

createConnection(ormOptions)
	.then(value => {
		console.log('3306: [SUCCESS] Database connected!');
		// create express app
		const app = express();
		app.use(bodyParser.json());

		// Routes Definitions
		app.get("/", (req, res) => {
			res.status(200).send("Hi!. My name is Bi");
		});

		// run app
		app.listen(4000);

		console.log("Express application is up and running on port 4000");
	})
	.catch(error => {
		console.log('3306: [ERROR] Database error');
		console.log(`ERROR: ${error}`);
	});
