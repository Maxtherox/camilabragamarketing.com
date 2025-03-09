import styled from "styled-components";

export const Container = styled.main`

`

export const SectionOne = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
> img {
    margin-top: 4.6rem;
    margin-bottom: 4.6rem;
}
`
export const Branding = styled.section`

`
export const Title = styled.div`
display: flex;
flex-direction: column;

gap: 1rem;
max-width: 43.4rem;
justify-content: center;
`

export const ButtonBorder = styled.a`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid ${({ theme }) => theme.COLORS.BROWN};
border-radius: 3.2rem;
font-weight: bold;
font-size: 1.4rem;
width: 16.1rem;
height: 5.7rem;
margin-top: 2rem;
`

// seção 2

export const SectionTwo = styled.section`

`