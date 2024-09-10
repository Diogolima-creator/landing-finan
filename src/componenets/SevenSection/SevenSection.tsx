import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const SevenSection = () => {

  const questions = [{
    question: 'Preciso cadastrar meu cartão de crédito para poder testar os 7 dias?',
    answer: 'Não, para aproveitar o período de teste de 7 dias de forma gratuita, fazendo seu controle pessoal com o Finances, não será necessário cadastrar seu cartão de crédito. Nenhum dado de pagamento será solicitado durante o período de teste. Se optar por assinar o Finances após o período de teste, você precisará cadastrar suas informações.'
  },{
    question: 'Quanto custa a assinatura do Finances?',
    answer: 'A assinatura do Finances tem um custo mensal de R$32,90, mas você também pode optar pela assinatura anual que custa 12x de R$20,83 ou R$199,90 à vista.Investir no Finances é uma decisão inteligente para você que deseja organizar suas finanças pessoais e finalmente ter um controle financeiro fácil de manter e capaz de te ajudar a alcançar suas metas de curto, médio e longo prazo. Nossa ferramenta oferece uma gama completa de recursos para auxiliar a controlar seus gastos, planejar seu orçamento e economizar tempo. Confira todos os detalhes dos planos disponíveis na página de planos do Finances'
  },{
    question: 'O Finances pode ser usado offline?',
    answer: 'Sim. Os aplicativos Finances para Android e iOS funcionam offline, proporcionando uma experiência conveniente e flexível para o controle financeiro pessoal. Com essa funcionalidade, você pode anotar seus gastos mesmo em locais sem acesso à internet, como durante viagens ou em áreas com conexão instável. Isso significa que você não precisa se preocupar em perder o registro de suas despesas em momentos críticos.Além disso, a sincronização dos seus dados ocorrerá automaticamente no seu próximo acesso à internet, garantindo que todas as informações sejam atualizadas e disponíveis em todos os dispositivos. Com o Finances, você pode gerenciar suas finanças de forma eficiente, mesmo quando estiver desconectado.'
  },{
    question: 'O Finances vende dados financeiros para terceiros?',
    answer: 'Nunca. Nossa única fonte de receita é a sua assinatura. É ela que permite nos mantermos sempre fiéis ao nosso grande propósito, que é levar progresso financeiro às pessoas. Valorizamos a confiança que você deposita em nós ao utilizar nossa plataforma de controle financeiro pessoal e nos comprometemos a proteger suas informações.No Finances, sua privacidade e segurança são prioridades absolutas. Ao escolher nosso serviço, você pode ter certeza de que seus dados financeiros estão seguros e não serão compartilhados com terceiros. Confie no Finances para gerenciar suas finanças com transparência e integridade.'
  },{
    question: 'O Finances pode deixar de existir?',
    answer: 'O Finances é o Gerenciador Financeiro Pessoal mais antigo do mercado brasileiro. Temos uma história construída com muito trabalho e paixão que nos orgulha. Operamos desde 2009, com crescimento constante, 100% auto-financiado com receitas próprias (assinaturas de clientes). Não, nós não iremos deixar de existir.Vamos sim seguir evoluindo e trabalhando incansavelmente todos os dias para melhorar nossos serviços e impactar positivamente a vida dos brasileiros.'
  },{
    question: 'Posso usar o Finances no celular e também no computador?',
    answer: 'Sim, o Finances está disponível em versões mobile e desktop, permitindo que você gerencie suas finanças de forma conveniente e acessível em qualquer dispositivo. Essa versatilidade oferece benefícios significativos, pois você pode usar a plataforma onde e quando for mais conveniente para você, sem se preocupar com restrições de acesso.Seja em movimento, utilizando o aplicativo no seu smartphone, ou em casa, acessando a versão desktop, você terá todas as ferramentas necessárias para manter seu controle financeiro pessoal atualizado e organizado. Com o Finances, sua vida financeira está sempre ao alcance das suas mãos, independentemente de onde você esteja ou do dispositivo que esteja usando.'
  },{
    question: 'Assinando pela Web, vou poder usar o Finances também no meu celular?',
    answer: 'Sim. As informações disponíveis para controle de finanças no Finances são sincronizadas. Por isso, você pode usar nas duas plataformas sempre que quiser. A assinatura está vinculada ao seu cadastro, independente da plataforma utilizada.'
  }]

  return (
    <S.Container>
      <S.Header>Perguntas frequentes</S.Header>
      <S.List>
        {questions.map((m) => 
        <S.ListItem>
          <S.ListHeader>
            <S.Question>{m.question}</S.Question>
            <FontAwesomeIcon className='icon' icon={faPlus} />
          </S.ListHeader>
        </S.ListItem>)}
      </S.List>
      <S.Helper>
        <S.HelperTexts>
          <S.HelperTitle>Ainda com dúvidas?</S.HelperTitle>
          <S.HelperParagraph>Caso tenha ficado com alguma dúvida sobre o uso do app, nossa Central de Ajuda está cheia de dicas incríveis para você aproveitar o Finances ao máximo!</S.HelperParagraph>
        </S.HelperTexts>
        <S.Button>Central de Ajuda</S.Button>
      </S.Helper>
    </S.Container>
  )
}
