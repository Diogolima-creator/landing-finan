import * as S from './styles'

interface ShowDownProps {
  setShowDown: React.Dispatch<React.SetStateAction<number>>
  showDown: number
}

export const ShowDownForYou = (props:ShowDownProps) => {

  const menu = [{
    menuTitle: 'Recursos',
    menuText: [
      'Planejamento Financeiro',
      'Controle de Gastos',
      'Gestão de Investimentos',
      'Educação Financeira',
      'Relatórios Financeiros',
      'Segurança e Proteção Financeira'
    ]
  },
  {
    menuTitle: 'Ferramentas',
    menuText: [
      'Impostos e Conformidade',
      'Ferramentas de Poupança',
      'Calculadora de Investimentos',
      'Calculadora de Dividendos'
    ]
  }
]

  return (
    <S.ShowDown 
    onMouseEnter={() => props.setShowDown(1)} onMouseLeave={() => props.setShowDown(-1)}>
      {menu.map((m) => 
      <S.Menu>
        <S.MenuTitle>{m.menuTitle}</S.MenuTitle>
        {m.menuText.map((t) => 
          <S.MenuText>{t}</S.MenuText>)
        }
      </S.Menu>)}
    </S.ShowDown>
  )
}
