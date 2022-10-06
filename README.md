
# Activities API 

Implemenatation of activities api as graphql as well as rest
## Requirments 

you should have docker and docker-compose installed on your machine 

### Installation

Running locally

Use the package manager [npm] to install the dependencies.
```bash
npm install or
yarn 
```
## Instruction using docker 

* clone the project from the repo 
* build your project using

 ```
 $ docker-compose build
 ```
* cd -> project directory and run your project using the following command 

 ```
 $ docker-compose up 
 ```

### Running the Server
The server can be initiated with the `node` command.
```bash
node src/index.js

```
 your node js project will run on http://localhost:4000/graphql
 
 * admin-mongo interface will be displayed on http://localhost:8082/
 
 * add a random name to your connection and in the field connection string put the following connection string 
 (mongodb://mongodb/myappdb)
 
## API DOCS

Running swagger api you need to hit /api-docs

Running Graphql appolo server you need to hit /graphql


### License
[MIT](https://choosealicense.com/licenses/mit/)
