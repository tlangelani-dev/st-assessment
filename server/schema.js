const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');
const axios = require('axios');

const PeopleType = new GraphQLObjectType({
    name: 'People',
    fields: () => ({
        name: {
            type: GraphQLString,
        },
        height: {
            type: GraphQLString,
        },
        mass: {
            type: GraphQLString,
        },
        gender: {
            type: GraphQLString,
        },
        homeworld: {
            type: GraphQLString,
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people: {
            type: GraphQLList(PeopleType),
            resolve(parent, args) {
                return axios.get('https://swapi.dev/api/people').then(res => res.data.results);
            }
        },
        person: {
            type: PeopleType,
            args: {
                name: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return axios.get(`https://swapi.dev/api/people/?search=${args.name}`).then(res => res.data.results[0]);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
