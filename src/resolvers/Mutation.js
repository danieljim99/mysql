import "babel-polyfill";
import uuid from "uuid";

const Mutation = {
    register: async (parent, args, context, info) => {
        const {email, password, author} = args;

        const {client} = context;

        const query = `INSERT INTO users (id, email, password, author) VALUES (\"${uuid.v4()}\", \"${email}\", \"${password}\", ${author})`;

        const result = await client.query(query, (error, response) => {
            if(error){
                throw new Error(error);
            }

            return response;
        });

        return result;
    },

    login: async (parent, args, context, info) => {
        
    },

    logout: async (parent, args, context, info) => {
        
    },

    publish: async (parent, args, context, info) => {
        
    },

    removePost: async (parent, args, context, info) => {
        
    },

    removeUser: async (parent, args, context, info) => {
        
    },
}

export {Mutation as default};