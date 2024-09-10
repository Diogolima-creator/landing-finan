import { useState } from 'react'
import * as S from './styles'

interface ShowDownProps {
  setShowDown: React.Dispatch<React.SetStateAction<number>>
  showDown: number
}

export const ShowDownCommunity = (props:ShowDownProps) => {

  const [show,] = useState(props.showDown === 2 ? true : false)

  const menu = [{
    menuTitle: 'Comunidade',
    menuText: [
      'Grupos de Interesse',
      'Feed de Atividades',
      'Desafios e Competições',
      'Suporte da Comunidade',
    ]
  },
  {
    menuTitle: 'Eventos',
    menuText: [
      'Mentoria e Networking',
      'Eventos e Webinars',
      'Histórias de Sucesso',
    ]
  }
]
  
  return (
    <S.ShowDown className={show ? 'entrance' : 'exit'}
    onMouseEnter={() => props.setShowDown(2)} onMouseLeave={() => props.setShowDown(-1)}>
      {menu.map((m) => 
      <S.Menu className={show ? 'entranceMenu' : 'exitMenu'}>
        <S.MenuTitle>{m.menuTitle}</S.MenuTitle>
        {m.menuText.map((t) => 
          <S.MenuText>{t}</S.MenuText>)
        }
      </S.Menu>)}
    </S.ShowDown>
  )
}
