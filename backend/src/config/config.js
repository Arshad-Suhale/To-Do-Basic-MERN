import dotenv from 'dotenv';

dotenv.config();

const configArray = ["PORT", "URI"]
const config = {};

// Checking For Missing Key in .env
for(const configElement of configArray){
    if( !process.env[configElement] ){
        throw new Error(`${configElement} is not defined in environment variables`);
    }
}

// Assigning to exporting variable
for(const configElement of configArray){
    config[configElement] = process.env[configElement]
}

export default config;