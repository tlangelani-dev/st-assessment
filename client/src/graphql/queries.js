import { gql } from '@apollo/client';

export const PEOPLE_QUERY = gql`
    query PeopleQuery($page: Int) {
        people(page: $page) {
            name
            height
            mass
            gender
            homeworld
        }
    }
`

export const PERSON_QUERY = gql`
    query PersonQuery($name: String) {
        person(name: $name) {
            name
            height
            mass
            gender
            homeworld
        }
    }
`
