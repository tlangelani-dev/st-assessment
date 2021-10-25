import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { PEOPLE_QUERY } from '../../graphql/queries';
import iPerson from '../../interfaces/iPerson';
import Person from '../Person';
import { PeopleContainer } from './People.style';

interface IState {
    people: iPerson[]
}

const People = () => {
    const [people, setPeople] = useState<IState['people']>([]);
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(PEOPLE_QUERY, {
        variables: { page }
    });

    useEffect(() => {
        if (data) {
            setPeople(data.people);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Oops, there was an Error</p>;

    const back = () => {
        if (page > 2) { 
            setPage(page - 1);
        }
    }
    const next = () => {
        setPage(page + 1);
    }

    return (
        <>
            <PeopleContainer>
                {people.map((person) => {
                    return <Person person={person} />;
                })}
            </PeopleContainer>
            <div className='actions'>
                {page > 2 && <button onClick={back}>Back</button>}
                <button onClick={next}>Next</button>
            </div>
        </>
    )
}

export default People
