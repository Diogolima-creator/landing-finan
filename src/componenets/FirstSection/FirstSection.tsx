import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as F from './styles'
import { faArrowRight, faLaptop, faLock } from '@fortawesome/free-solid-svg-icons'

export const FirstSection = () => {
  return (
    <F.Container>
      <F.Items>
        <F.Item>
          <F.Title>
            Controle financeiro pessoal com toda a <span>praticidade</span> que a planilha não te oferece
          </F.Title>
          <F.Text>
            Organize seu dinheiro em tempo real em uma solução completa, prática e segura. Tenha o controle de finanças que você sempre quis!
          </F.Text>
          <F.Button>
            Testar gratuitamente <span><FontAwesomeIcon className='icon' icon={faArrowRight} /></span>
          </F.Button>
          <F.Security>
            <F.SecurityItem>
              <FontAwesomeIcon className='icon' icon={faLock} />
              <F.SecurityText>Segurança dos seus dados em primeiro lugar</F.SecurityText>
            </F.SecurityItem>
            <F.SecurityItem>
              <FontAwesomeIcon className='icon' icon={faLaptop} />
              <F.SecurityText>Acesse quando quiser, no celular ou computador</F.SecurityText>
            </F.SecurityItem>
          </F.Security>
        </F.Item>
        <F.ItemRight>
          <F.Img src='1.png'/>
        </F.ItemRight>
      </F.Items>  
    </F.Container>
  )
}
