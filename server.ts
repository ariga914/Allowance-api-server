import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { getManager } from "typeorm";
import { Deal } from "./entity/Deal";

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

        app.get("/list", async(req, res) => {
            //get a deal repository to perform operations with deal
            const dealRepository = getManager().getRepository(Deal);

            const deals = await dealRepository.find();

            //return loaded deals
            res.status(200).send(deals);
        })

        app.post('/add', async(req, res) => {
            //prepare output in JSON format
            const newDeal = {
                title: req.body.title,
                date: req.body.date,
                amount: req.body.amount,
                type: req.body.type
            }

            const dealRepository = getManager().getRepository(Deal);

            const deals = await dealRepository.save(newDeal);

            //return loaded users;
            res.send(deals);
        })        

		// run app
		app.listen(4000);

		console.log("Express application is up and running on port 4000");
	})
	.catch(error => {
		console.log('3306: [ERROR] Database error');
		console.log(`ERROR: ${error}`);
	});
