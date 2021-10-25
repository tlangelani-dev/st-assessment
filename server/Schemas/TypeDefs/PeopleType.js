const {
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

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

module.exports = PeopleType;
