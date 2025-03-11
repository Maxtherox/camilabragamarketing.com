import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

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

@media (max-width: ${DEVICE_BREAKPOINTS.XX}) {
margin-left: 15rem;
}

@media (max-width: ${DEVICE_BREAKPOINTS.XL}) {

margin-left: 10rem;
}

@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: center;
    margin-left: 0;
    margin-top: 15.6rem;
    margin-bottom: 15.6rem;
    align-items: center;
 }

 @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-top: 10.6rem;
    margin-bottom: 10.6rem;
}


> img {
    margin-top: 4.6rem;
    margin-bottom: 4.6rem;
    z-index: 3;

    @media (max-width: ${DEVICE_BREAKPOINTS.XX}) {
        width: 600px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
        width: 500px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: none;
    }
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


@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    text-align: center;
    width: 43.4rem;
    }

@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 30rem;
    font-size: 18px;
}
> h1 {
    font-size: 30px;
}

> p {
    @media (max-width: ${DEVICE_BREAKPOINTS.XX}) {
        font-size: 14px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {

    }
}

> a {
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 auto;
    margin-top: 30px;
    }
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

@media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 90px;

    text-align: center;
    }




> div {
    width: 51rem;
    @media (max-width: 600px) {
    width: 40rem;
}

@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 35rem;
    font-size: 12px;
}

    > a {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
    border: none;
    color: ${({ theme }) => theme.COLORS.BROWN};;
    font-weight: 900;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin: 0 auto;
        margin-top: 10px;
        width: 180px;
        height: 40px;
        font-size: 14px;
    }
    }

}

> img {
    position: absolute;
    max-width: 2000px;
    transform: translateX(-50%);
    left: 50%;
    bottom:0;
    top: -30%;
    @media (max-width: 1600px) {
    max-width: 1200px;
    top: -16%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XX}) {
        max-width: 1100px;
        top: -10%;
        }

    @media (max-width: 1150px) {
    display: none;
        }
}


`

// seção 3

export const SectionThree = styled.section`
display: flex;
justify-content: center;
gap: 15rem;
margin: 8.8rem auto;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
        }

@media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
gap: 5rem;

        }
@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
gap: 0.1rem;
}


> img { 
    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
        max-width: 50%;
        max-height: 50%;
        scale: 75%;
        }


}
> div {
    width: 60rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    text-align:  left;
    width: 50rem;
 }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 40rem;
    text-align: center;
 }

 @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 35rem;
    font-size: 12px;
}
 
    > a {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BROWN};
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};;
    font-weight: 900;
    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin: 15px 0;
 }
 @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 20rem;
    margin: 15px auto
 }
    }
}
`
// seção 4 


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

@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 7rem;
    height: 7rem;
    font-size: 12px;
}
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

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 45rem;
    font-size: 18px;
    margin: 15px auto
 }
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 25rem;
    font-size: 18px;
    margin: 15px auto
}

@media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 25rem;
    font-size: 14px;
    margin: 0 auto;
}
}

> a {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 900;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 25rem;
    font-size: 16px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
}
}

> p {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
font-family: 'Poppins', sans-serif;
    transform: translateY(9rem);
    font-size: 14px;
    font-weight: 300;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    text-align: center;
    width: 40rem;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 25rem;
    font-size: 12px;
}
 }
    > a {
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_LIGHT};
    }
}
`