import styled from "styled-components";

export const Container = styled.main`
width: 100%;
overflow-x: none;
`

export const SectionOne = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 20rem;
z-index: 3;
> img {
    margin-top: 4.6rem;
    margin-bottom: 4.6rem;
    z-index: 3;
}
`
export const Branding = styled.section`

`
export const Title = styled.div`
display: flex;
flex-direction: column;
z-index: 3;
gap: 1rem;
width: 43.4rem;
justify-content: center;

> h1 {
    font-size: 30px;
}
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
display: flex;
justify-content: space-around;
position: relative;


z-index: -2;
width: 100%;
height: 67rem;
background-color: ${({ theme }) => theme.COLORS.LIGHT_BROWN};

color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};

> div {
    width: 51rem;


    > a {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    border: none;
    color: ${({ theme }) => theme.COLORS.BROWN};;
    font-weight: 900;
    }

}

> img {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
bottom:0;
top: -30%;
}

`

// seção 3

export const SectionThree = styled.section`
display: flex;
justify-content: center;
gap: 15rem;
margin: 10.8rem auto;
> div {
    width: 60rem;
    
    > a {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BROWN};
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};;
    font-weight: 900;
    }
}
`

export const SectionFour = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 45.7rem;
background-color: ${({ theme }) => theme.COLORS.LIGHT_BROWN};
position: relative;

> div {
    width: 15rem;
    height: 15rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    position: absolute;
    transform: translateX(-50%);
    rotate: 45deg;
    left: 50%;
bottom:0;
top: -5.6%;

}

> h4{
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 300;
    width: 60rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
}


> a {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 900;

}

> p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
font-family: 'Poppins', sans-serif;
    transform: translateY(9rem);
    font-size: 14px;
    font-weight: 300;

    > a {
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
    }
}
`