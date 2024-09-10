import * as S from './styles'

export const SecondSection = () => {

  const items = [{
    number: 1,
    title: 'Suas contas e cartões num só lugar',
    paragraph: 'Comece cadastrando suas contas e cartões para ter uma visão mais clara do controle de finanças'
  },{
    number: 2,
    title: 'Cadastre todos os seus gastos',
    paragraph: 'Mantenha tudo sob controle cadastrando suas contas e despesas organizadas por categorias.'
  },{
    number: 3,
    title: 'Saiba o destino de cada centavo',
    paragraph: 'Informe sua renda e ganhos extras para ter previsibilidade financeira e tomar decisões inteligentes.'
  },{
    number: 4,
    title: 'Transforme controle financeiro em hábito',
    paragraph: 'Lance os gastos do dia a dia, acompanhe os relatórios e assuma o total controle das finanças.'
  }]

  return (
    <S.Container>
      <S.ItemLogo>
        <S.Img src='test1.png' />
      </S.ItemLogo>
      <S.Right>
        <S.SubHeader>Organize suas finanças</S.SubHeader>
        <S.Header>A solução para um controle financeiro de sucesso</S.Header>
        <S.Items>
          {items.map((i) => 
          <S.Item>
              <S.ItemNumber>0{i.number}</S.ItemNumber>
              <S.Helper>
                <S.ItemTitle>{i.title}</S.ItemTitle>
                <S.ItemParagraph>{i.paragraph}</S.ItemParagraph>
              </S.Helper>
          </S.Item>
          )}
        </S.Items>
      </S.Right>
    </S.Container>
  )
}
