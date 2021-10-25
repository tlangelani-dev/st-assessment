import Person from '../../components/Person';
import { PERSON_QUERY } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import iPerson from '../../interfaces/iPerson';
import { useHistory } from "react-router-dom";
import { PersonDetaisContainer } from './PersonDetails.style';

interface IState {
    person: iPerson
}

const PersonDetailsPage = (props: any) => {
    const history = useHistory();
    const { name } = props.match.params;
    const { loading, error, data } = useQuery(PERSON_QUERY, {
        variables: { name }
    });
    const [person, setPerson] = useState<IState['person']>(Object);

    const goBack = () => {
        history.goBack();
    };

    useEffect(() => {
        console.log(data);
        if (data) {
            setPerson(data.person);
        }
    }, [data]);

    return (
        <>
            <header>
                <h1>Person Details Page</h1>
            </header>
            <button onClick={goBack}>Go back</button>
            <PersonDetaisContainer>
                <p>Name: {person.name}</p>
                <p>Gender: {person.gender}</p>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Homeworld: {person.homeworld}</p>
            </PersonDetaisContainer>
        </>
    )
}

export default PersonDetailsPage
