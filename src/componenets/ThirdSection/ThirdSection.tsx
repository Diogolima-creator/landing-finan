import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as T from './styles'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

export const ThirdSection = () => {

  return (
    <T.Container>
      <T.Left>
        <T.Headers>
          <T.SubHeader>Segurança em primeiro lugar</T.SubHeader>
          <T.Header>Tenha a gestão financeira pessoal que sempre sonhou</T.Header>
        </T.Headers>
          <T.List>
            <T.Bullet>Sem anúncios dentro do app, para você poder focar no que realmente importa</T.Bullet>
            <T.Bullet>Tenha a facilidade de registrar e acompanhar seus gastos a qualquer momento</T.Bullet>
            <T.Bullet>Gerencie as faturas de todos os seus cartão de crédito num único lugar</T.Bullet>
            <T.Bullet>Receba alertas de contas a pagar e nunca mais sofra com juros</T.Bullet>
            <T.Bullet>Importe os dados da sua planilha financeira e não comece do zero</T.Bullet>
          </T.List>
          <T.Button>
            Testar gratuitamente 
          </T.Button>
          <T.Blocks>
              <T.Block>
                <T.BlockIcon>
                  <FontAwesomeIcon className='icon' icon={faApple} />
                </T.BlockIcon>
                <T.BlockTexts>
                  <T.BlockName>App Store</T.BlockName>
                  <T.BlockRating>40,3 mil avaliações</T.BlockRating>
                  <T.Stars>⭐⭐⭐⭐⭐</T.Stars>
                </T.BlockTexts>
              </T.Block>
              <T.Block>
                <T.BlockIcon>
                <FontAwesomeIcon className='icon' icon={faGooglePlay} />
                </T.BlockIcon>
                <T.BlockTexts>
                  <T.BlockName>Google Play</T.BlockName>
                  <T.BlockRating>46,8 mil avaliações</T.BlockRating>
                  <T.Stars>⭐⭐⭐⭐⭐</T.Stars>
                </T.BlockTexts>
              </T.Block>
          </T.Blocks>
      </T.Left>
      <T.Right>
        <T.Img src='./teste212.png'/>
      </T.Right>
    </T.Container>
  )
}
