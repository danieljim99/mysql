import "babel-polyfill";

const Query = {
    users: async (parent, args, context, info) => {
        const {client} = context;

        const result = await client.query(`SELECT * FROM users`, null);

        console.log(result);

        return result;
    },

    posts: async (parent, args, context, info) => {
        const {client} = context;

        const results = await client.query('SELECT * FROM `posts`');

        return results;
    },

    searchPosts: async (parent, args, context, info) => {
        
    },
}

export {Query as default};