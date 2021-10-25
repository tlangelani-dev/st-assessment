import iPerson from '../../interfaces/iPerson';
import { PersonContainer } from './Person.style';
import { useHistory } from "react-router-dom";

interface IProps {
    person: iPerson
}

const Person = ({ person }: IProps) => {
    const history = useHistory();

    const onClickPersonHandler = (name: string) => {
        history.push(`/person-details/${name}`);
    }
    
    return (
        <PersonContainer onClick={() => onClickPersonHandler(person.name)}>
            <h4>{person.name} ({person.gender})</h4>
            <div className='info'>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Homeworld: {person.homeworld}</p>
            </div>
        </PersonContainer>
    )
}

export default Person
