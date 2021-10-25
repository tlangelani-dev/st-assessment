import styled from 'styled-components';

export const PeopleContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 90%;
    }
`
