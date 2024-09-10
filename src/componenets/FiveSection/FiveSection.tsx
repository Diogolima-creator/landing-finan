import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as F from './styles'
import { faBuildingColumns, faBullseye, faChartColumn, faCommentDots, faCreditCard, faExclamation, faFolderOpen, faHandshake } from '@fortawesome/free-solid-svg-icons'

export const FiveSection = () => {

  const left = [{
    icon: <FontAwesomeIcon className='icon' icon={faBuildingColumns} />,
    title: 'Controle de contas',
    text: 'Poupança, corrente ou investimento? Gerencie todas no Finances!'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faBullseye} />,
    title: 'Limite de gastos',
    text: 'Defina o quanto você pode gastar em cada categoria e economize sem esforço.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faExclamation} />,
    title: 'Alertas',
    text: 'Receba alertas de todas as suas contas a pagar e dê adeus aos juros!'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faCommentDots} />,
    title: 'Importação de notificação',
    text: 'Crie lançamentos a partir de notificação e SMS do seu banco ou cartão.'
  },]

  const right = [{
    icon: <FontAwesomeIcon className='icon' icon={faChartColumn} />,
    title: 'Relatórios',
    text: 'Resumos incríveis, com gráficos simples e completos.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faFolderOpen} />,
    title: 'Criação de categorias',
    text: 'Crie suas próprias categorias de acordo com a sua necessidade.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faCreditCard} />,
    title: 'Controle de cartões',
    text: 'O roxinho, o gold, o black… controle todos seus cartões em um único lugar.'
  },{
    icon: <FontAwesomeIcon className='icon' icon={faHandshake} />,
    title: 'Conciliação bancária',
    text: 'Exporte as transações do seu banco para dentro do Finances.'
  },]

  return (
    <F.Container>
      <F.Texts>
        <F.Header>Nossos principais recursos</F.Header>
        <F.SubHeader>Conheça os recursos que vão revolucionar seu controle financeiro pessoal, proporcionando uma visão clara da sua situação financeira e te ajudando a tomar decisões mais assertivas para alcançar seus objetivos.</F.SubHeader>
      </F.Texts>
      <F.Menu>
        <F.Left>
          {left.map((m) => 
          <F.Item>
            {m.icon}
            <F.ItemTitle>{m.title}</F.ItemTitle>
            <F.ItemText>{m.text}</F.ItemText>
          </F.Item>)}
        </F.Left>
        <F.Center>
            <F.Img src='./teste21.png' />
        </F.Center>
        <F.Left>
        {right.map((m) => 
          <F.Item>
            {m.icon}
            <F.ItemTitle>{m.title}</F.ItemTitle>
            <F.ItemText>{m.text}</F.ItemText>
          </F.Item>)}
        </F.Left>
      </F.Menu>
    </F.Container>
  )
}
