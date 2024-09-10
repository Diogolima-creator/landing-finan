import { useEffect, useState } from 'react';
import * as S from './styles'

export const SixSection = () => {

  const [cards, setCards] = useState([{
    title:'Eficiente e prático!',
    paragraph:'Conseguiu substituir minha planilha de excel! Há tempos testei diversos app, mas esse é excelente e funcional, e atendimento da equipe!',
    author: 'Rafael'
  },{
    title:'Recomendo a todos',
    paragraph:'Estou usando o App a 1 ano e está sendo incrível. Minha vida toda eu não tinha controle dos meus gastos e do meu dinheiro, e com esse app eu consigo controlar tudo isso e ainda economizar. Recomendo para todos experimentar. Vocês não vão se arrepender',
    author: 'Leo'
  },{
    title:'Mudou a minha vida',
    paragraph:'Uso há mais de 3 ANOS, e pagar a assinatura foi uma das melhores decisões que tomei na minha vida toda. O valor é praticamente um trocado quando você começa a ENXERGAR seus vacilos e começa a ganhar dinheiro pela ECONOMIA absurda que você alcança com organização e controle dentro de poucas semanas!',
    author: 'Paulo'
  },{
    title:'Ótimo App',
    paragraph:'Excelente aplicativo atende a todas as minhas necessidades e ajuda a manter a minha saúde financeira. Vale cada centavo.',
    author: 'Maria Eduarda'
  },{
    title:'O melhor app de finanças',
    paragraph:'Com o Finances eu saí do achismo e passei a ter a certeza de quanto gasto e onde preciso economizar. O fato de cadastrar cada gasto é um método importante para ter conhecimento para onde o dinheiro está indo. Obrigado Finances',
    author: 'Pedro'
  }])

  const larguraTela = window.innerWidth;

  useEffect(() => {
  
   if(larguraTela >= 768 && larguraTela < 1024){
      setCards(cards.slice(0,3))
   }

   if(larguraTela >= 425 && larguraTela < 768){
      setCards(cards.slice(0,2))
   }

   if(larguraTela < 425 ){
    setCards(cards.slice(0,1))
  }

  },[larguraTela])
  return (
    <S.Container>
      <S.Texts>
          <S.SubHeader>O que eles estão falando</S.SubHeader>
          <S.Header>Veja porquê nossos clientes amam a Finances</S.Header>
      </S.Texts>
      <S.Slider>
        {cards.map((c) => 
        <S.Card>
          <S.Top>
            <S.CardTitle>{c.title}</S.CardTitle>
            <S.CardStars>⭐⭐⭐⭐⭐</S.CardStars>
            <S.CardParagraph>{c.paragraph}</S.CardParagraph>
          </S.Top>
          <S.Footer>
            <S.FooterSubHeader>por</S.FooterSubHeader>
            <S.FooterAuthor>{c.author}</S.FooterAuthor>
          </S.Footer>
        </S.Card>)}
      </S.Slider>
    </S.Container>
  )
}
