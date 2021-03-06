const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLInt
} = require('graphql');
const axios = require('axios');

const PeopleType = require('./TypeDefs/PeopleType');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people: {
            type: new GraphQLList(PeopleType),
            args: {
                page: {
                    type: GraphQLInt,
                    defaultValue: 1
                }
            },
            resolve(parent, args) {
                return axios.get(`https://swapi.dev/api/people?page=${args.page}`).then(res => res.data.results);
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
