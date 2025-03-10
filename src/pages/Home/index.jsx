import { Container, SectionOne, Branding, Title, ButtonBorder, SectionTwo, SectionThree, SectionFour } from "./styles";
import imgOne from "../../assets/img1.png"
import imgThree from "../../assets/img2.png"
import imgTwo from "../../assets/Vector.png"

export function Home() {
    return (
        <Container>
            <SectionOne>
                <Title>
                    <Branding>
                        <h2>Camilla Braga</h2>
                        <span>Social media</span>
                    </Branding>
                    <h1>
                        Apresente o seu negócio com estratégia e criatividade
                    </h1>
                    <p>
                        Sou Camila Braga, especialista em social media. Meu propósito é ajudar empresas e empreendedores a conquistar resultados reais com estratégias criativas, gestão eficiente e conteúdos de impacto.
                    </p>
                    <ButtonBorder>Quero saber mais</ButtonBorder>
                </Title>
                <img src={imgOne} />
            </SectionOne>

            <SectionTwo>
                <Title>
                    <h2>
                        Criação, Estratégia e Gestão de Redes Sociais
                    </h2>
                    <p>
                        Serviços completos para redes sociais, incluindo: Organização e otimização do perfil, criação de conteúdos estratégicos
                        para engajamento e vendas, análise de desempenho e ajustes para melhores resultados.
                    </p>
                    <ButtonBorder>Saiba mais</ButtonBorder>
                </Title>
                <img src={imgTwo} />
                <Title>
                    <h2>
                        Videomake, Fotos e Storytelling
                    </h2>
                    <p>
                        Conteúdos visuais e narrativas envolventes para destacar sua marca. Perfeito para quem busca vídeos criativos que aumentam o
                        engajamento,Storytelling que conecta com a audiência, fotos profissionais que valorizam sua identidade visual.
                    </p>
                    <ButtonBorder>Saiba mais</ButtonBorder>
                </Title>
            </SectionTwo>
            <SectionThree>
                <img src={imgThree} />
                <Title>
                    <h2>
                        Videomake, Fotos e Storytelling
                    </h2>
                    <p>
                        Conteúdos visuais e narrativas envolventes para destacar sua marca. Perfeito para quem busca vídeos criativos que aumentam o
                        engajamento,Storytelling que conecta com a audiência, fotos profissionais que valorizam sua identidade visual.
                    </p>
                    <ButtonBorder>Quero saber mais</ButtonBorder>
                </Title>
            </SectionThree>
            <SectionFour>
                <div className="square"></div>

                <h4>Quer ver mais um pouco dos meu trabalho? vem comigo nas minhas redes sociais =&#x2769;         
                </h4>
                <a><strong>@camila_braga.oficial_</strong></a>
                <p>© 2025 Camila Braga. Todos os direitos reservados - Desenvolvido por  <a href=""> <strong>[GuilhermeJP]</strong></a> </p>
            </SectionFour>
        </Container>
    )
}