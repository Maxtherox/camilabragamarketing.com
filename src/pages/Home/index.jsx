import { Container, SectionOne, Branding, Title, ButtonBorder, SectionTwo, SectionThree, SectionFour } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgOne from "../../assets/img1.png"
import imgThree from "../../assets/img2.png"
import imgTwo from "../../assets/Vector.png"
import { useEffect } from "react";

AOS.init();

export function Home() {
    useEffect(() => {
        document.title = 'Camila Braga - Marketing Digital e social media'; 
      },);
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
                    <ButtonBorder href="https://wa.me/5511965628083" target="blank">Quero saber mais</ButtonBorder>
                </Title>
                <img src={imgOne} data-aos="fade-left" data-aos-duration="500" title="Imagem de Camila braga em seu escritório." alt="Imagem de Camila braga em seu escritório."/>
            </SectionOne>

            <SectionTwo >
                <Title data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2>
                    Análise e Organização de Perfil

                    </h2>
                    <p>
                    Ideal para quem deseja:
		Gerenciar redes sociais.
		Organizar o perfil e transmitir uma mensagem clara e estratégica.
		Aumentar vendas e promover o crescimento do seu negócio ou empresa.
                    </p>
                    <ButtonBorder href="https://wa.me/5511965628083" target="blank">Saiba mais</ButtonBorder>
                </Title>
                <img src={imgTwo} title="Imagem geométrica." alt="Imagem geométrica de dois circulos se entrelaçando."/>
                <Title data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2>
                    Produção de Conteúdo (Videomake, Fotos e Storytelling)

                    </h2>
                    <p>
                    Serviço perfeito para:
		Criar vídeos e fotos profissionais.
		Contar histórias autênticas que conectem com seu público.
		Fortalecer a presença digital com conteúdos estratégicos.

                    </p>
                    <ButtonBorder href="https://wa.me/5511965628083" target="blank">Saiba mais</ButtonBorder>
                </Title>
            </SectionTwo>
            <SectionThree>
                <img src={imgThree} data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" title="Imagem de Camila braga em seu escritório no dia a dia." alt="Imagem de Camila braga em seu escritório no dia a dia.."/>
                <Title>
                    <h2 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" > 
                    Mentoria de Marketing com Propósito

                    </h2>
                    <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" >
                    Ideal para:
		Empreendedores que buscam fortalecer sua presença digital.
		Pessoas que desejam melhorar seus resultados nas redes sociais. <br/>
         <strong>Formato:</strong> Online ou presencial
                    </p>
                    <ButtonBorder data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" href="https://wa.me/5511965628083" target="blank">Quero saber mais</ButtonBorder>
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