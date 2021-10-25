import { gql } from '@apollo/client';

export const PEOPLE_QUERY = gql`
    query PeopleQuery {
        people {
            name
            height
            mass
            gender
            homeworld
        }
    }
`
