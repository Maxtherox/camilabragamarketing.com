import { Container, SectionOne, Branding, Title, ButtonBorder } from "./styles";
import imgOne from "../../assets/img1.png"

export function Home(){
    return(
        <Container>
            <SectionOne>  
            <div>

            </div>
                <Branding>
                    <h2>Camilla Braga</h2>
                    <span>Social media</span>
                </Branding>
                <Title>
                    <h1>
                    Apresente o seu negócio com estratégia e criatividade
                    </h1>
                    <p>
                    Sou Camila Braga, especialista em social media. Meu propósito é ajudar empresas e empreendedores a conquistar resultados reais com estratégias criativas, gestão eficiente e conteúdos de impacto.
                    </p>
                </Title>
                 <ButtonBorder>Quero saber mais</ButtonBorder>
            </SectionOne>
            <img src={imgOne}/>
        </Container>
    )
}