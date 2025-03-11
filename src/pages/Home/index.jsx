import { Container, SectionOne, Branding, Title, ButtonBorder, SectionTwo, SectionThree, SectionFour } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgOne from "../../assets/img1.png"
import imgThree from "../../assets/img2.png"
import imgTwo from "../../assets/Vector.png"

AOS.init();

export function Home() {
    return (
        <Container>
            <SectionOne>
                <Title data-aos="fade-right" data-aos-duration="500">
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
                    <ButtonBorder href="https://wa.me/5511948422483" target="blank">Quero saber mais</ButtonBorder>
                </Title>
                <img src={imgOne} data-aos="fade-left" data-aos-duration="500"/>
            </SectionOne>

            <SectionTwo >
                <Title data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2>
                        Criação, Estratégia e Gestão de Redes Sociais
                    </h2>
                    <p>
                        Serviços completos para redes sociais, incluindo: Organização e otimização do perfil, criação de conteúdos estratégicos
                        para engajamento e vendas, análise de desempenho e ajustes para melhores resultados.
                    </p>
                    <ButtonBorder href="https://wa.me/5511948422483" target="blank">Saiba mais</ButtonBorder>
                </Title>
                <img src={imgTwo} />
                <Title data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2>
                        Videomake, Fotos e Storytelling
                    </h2>
                    <p>
                        Conteúdos visuais e narrativas envolventes para destacar sua marca. Perfeito para quem busca vídeos criativos que aumentam o
                        engajamento,Storytelling que conecta com a audiência, fotos profissionais que valorizam sua identidade visual.
                    </p>
                    <ButtonBorder href="https://wa.me/5511948422483" target="blank">Saiba mais</ButtonBorder>
                </Title>
            </SectionTwo>
            <SectionThree>
                <img src={imgThree} data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" />
                <Title>
                    <h2 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" > 
                        Videomake, Fotos e Storytelling
                    </h2>
                    <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" >
                        Conteúdos visuais e narrativas envolventes para destacar sua marca. Perfeito para quem busca vídeos criativos que aumentam o
                        engajamento,Storytelling que conecta com a audiência, fotos profissionais que valorizam sua identidade visual.
                    </p>
                    <ButtonBorder data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" href="https://wa.me/5511948422483" target="blank">Quero saber mais</ButtonBorder>
                </Title>
            </SectionThree>
            <SectionFour>
                <div className="square"></div>

                <h4>Quer ver mais um pouco dos meu trabalho? vem comigo nas minhas redes sociais =&#x2769;         
                </h4>
                <a href="https://www.instagram.com/cb_estrategiadigital/?igsh=MTVzbW90NDQ2NzVsbA%3D%3D#" target="blank"><strong>@camila_braga.oficial_</strong></a>
                <p>© 2025 Camila Braga. Todos os direitos reservados - Desenvolvido por  <a href="https://guilhermejp.com" target="blank"><strong>[GuilhermeJP]</strong></a> </p>
            </SectionFour>
        </Container>
    )
}