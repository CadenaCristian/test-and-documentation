const express = require('express');
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const files = require('./lambdas/files/functions');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API"
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis: ["./lambdas/files/*.js"]
};

const specs = swaggerJsDoc(options);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/files", files);

app.listen(3000, () => { console.log("The server is running on port : 3000"); })