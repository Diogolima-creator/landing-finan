import * as F from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faArrowUpRightDots, faClock, faHeadset, faLaptop, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export const FourSection = () => {

  const items = [
    {
    icon: <FontAwesomeIcon  className='icon' icon={faArrowTrendUp} />,
    title: 'Seu futuro mais seguro',
    paragraph: 'Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Finances Brasil te mostra previsões valiosas das suas finanças.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faClock} />,
    title: 'Economize tempo e dinheiro',
    paragraph: 'Concentre suas informações financeiras em um único app, e não perca tempo abrindo todos os aplicativos de banco para checar seus gastos.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faArrowUpRightDots} />,
    title: 'Previsibilidade garantida',
    paragraph: 'As faturas de todos os seus cartões de crédito reunidas em um lugar só! Já imaginou? Tudo para garantir a previsibilidade que você precisa.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faLaptop} />,
    title: 'Simples de usar',
    paragraph: 'O sistema foi desenhado para ser intuitivo e tornar sua experiência cada vez mais natural. Em pouco tempo você consegue fazer um controle incrível do seu dinheiro!'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faThumbsUp} />,
    title: 'Controle financeiro sem anúncios',
    paragraph: 'Aqui você pode focar no que realmente importa: Sua organização financeira. Não te distraímos com propagandas ou ofertas de serviço de terceiros dentro do app.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faHeadset} />,
    title: 'Suporte que funciona',
    paragraph: 'Dúvidas? Sugestões? Nosso suporte gente boa ajuda você! A gente tá aqui para resolver seus problemas e deixar sua vida mais tranquila.'
  }]

  return (
    <F.Container>
      <F.Texts>
        <F.SubHeader>Controle total</F.SubHeader>
        <F.Header>Entenda por que controlar suas finanças com a Finances Brasil</F.Header>
      </F.Texts>
      <F.Items>
          {items.map((m) => 
          <F.Item>
            <F.ItemIcon>{m.icon}</F.ItemIcon>
            <F.Helper>
              <F.ItemTitle>{m.title}</F.ItemTitle>
              <F.ItemParagraph>{m.paragraph}</F.ItemParagraph>
            </F.Helper>
          </F.Item>)}
      </F.Items>
    </F.Container>
  )
}
