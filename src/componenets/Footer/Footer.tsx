import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as F from './styles'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  const items = ['Início','Quem somos','Recursos','Planos e preços','Blog']

  return (
    <F.Container>
      <F.Header>
          <F.Logo src='/money.svg'/>
          <F.List>
            {items.map((m) => 
            <F.ListItem>
              {m}
            </F.ListItem>)}
          </F.List>
          <F.Button>
              Comece Gratuitamente!
          </F.Button>
      </F.Header>
      <F.Footer>
          <F.FooterCnpj>©2024 Finances Tecnologia Ltda. CNPJ 12.345.678/0001-26</F.FooterCnpj>
          <F.Socials>
            <FontAwesomeIcon className='icon' icon={faLinkedin} />
            <FontAwesomeIcon className='icon' icon={faFacebook} />
            <FontAwesomeIcon className='icon' icon={faInstagram} />
            <FontAwesomeIcon className='icon' icon={faTwitter} />
          </F.Socials>
          <F.Policy>Política de Privacidade</F.Policy>
          <F.Terms>Termos de Serviço</F.Terms>
          <F.Dl>
            <F.Icon src='https://firebasestorage.googleapis.com/v0/b/galeriadefotos-bd42d.appspot.com/o/logo.png?alt=media&token=a8b0f549-4b54-4096-a7b3-01a42c2ef342'></F.Icon>
            <p>Feito por <span>Diogo Lima</span></p>
          </F.Dl>
      </F.Footer>
    </F.Container>
  )
}
