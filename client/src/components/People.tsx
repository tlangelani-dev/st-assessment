import { useEffect, useState } from 'react';
import {
    gql,
    useQuery
} from '@apollo/client';
import { PEOPLE_QUERY } from '../graphql/queries';

interface iPerson {
    name: string,
    height: string,
    mass: string,
    gender: string,
    homeworld: string
};

const People = () => {
    const { loading, error, data } = useQuery(PEOPLE_QUERY);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (data) {
            setPeople(data.people);
            console.log(people);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Oops, there was an Error</p>;

    return (
        <div>
            <h1>People</h1>
            {people.map((person: iPerson) => {
                return <p>{person.name}</p>;
            })}
        </div>
    )
}

export default People
