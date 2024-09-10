import * as S from './styles'

interface ShowDownProps {
  setShowDown: React.Dispatch<React.SetStateAction<number>>
  showDown: number
}

export const ShowDownAnalyze = (props:ShowDownProps) => {

  const menu = [{
    menuTitle: 'Analises',
    menuText: [
      'Crédito',
      'Dívidas',
      'Rentabilidade',
      'Fluxo de Caixa',
      'Desempenho Financeiro',
      'Padrões de Gastos',
      'Tendências de Mercado',
    ]
  },
  {
    menuTitle: 'Tecnologias',
    menuText: [
      'Segurança de Dados',
      'Análise de Big Data',
      'Inteligência Artificial e Machine Learning',
      'Blockchain e Criptomoedas',
    ]
  }
]

  return (
    <S.ShowDown 
    onMouseEnter={() => props.setShowDown(3)} onMouseLeave={() => props.setShowDown(-1)}>
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
