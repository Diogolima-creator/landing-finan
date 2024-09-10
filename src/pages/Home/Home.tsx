import * as H from './styles'
import { Header } from '../../componenets/Header/Header'
import { Footer } from '../../componenets/Footer/Footer'
import { FirstSection } from '../../componenets/FirstSection/FirstSection'
import { SecondSection } from '../../componenets/SecondSection/SecondSection'
import { ThirdSection } from '../../componenets/ThirdSection/ThirdSection'
import { FourSection } from '../../componenets/FourSection/FourSection'
import { FiveSection } from '../../componenets/FiveSection/FiveSection'
import { SixSection } from '../../componenets/SixSection/SixSection'
import { SevenSection } from '../../componenets/SevenSection/SevenSection'

export const Home = () => {

  return (
    <H.Container>
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourSection/>
      <FiveSection/>
      <SixSection/>
      <SevenSection/>
      <Footer/>
    </H.Container>
  )
}
