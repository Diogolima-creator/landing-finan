import * as H from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRightToBracket, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { ShowDownForYou } from '../ShowDownForYou/ShowDownForYou'
import { ShowDownCommunity } from '../ShowDownCommunity/ShowDownCommunity'
import { ShowDownAnalyze } from '../ShowDownAnalyze/ShowDownAnalyze'
export const Header = () => {

  const [isSelected, setIsSelected] = useState('home')
  const [borderLogin, setBorderLogin] = useState(false)
  const [showDown, setShowDown] = useState(-1)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <H.HeaderAndShowDown>
      <H.Header>
          <H.Logo>
            <H.Img src='/money.svg'/>
          </H.Logo>
          <H.List>
              <H.ListItem onMouseEnter={() => setShowDown(-1)} onMouseLeave={() => setShowDown(-1)} onClick={() => setIsSelected('home')} className={ isSelected === 'home' ? 'selected' : 'item'}>Pagina Inicial <span className='dot'/></H.ListItem>
              <H.ListItem onMouseEnter={() => setShowDown(1)} onMouseLeave={() => setShowDown(-1)} className={ isSelected === 'foryou' ? 'selected' : 'itemShowDown'}><span>Para Você <FontAwesomeIcon icon={faAngleDown} /></span> <span  className='dot'/></H.ListItem>
              <H.ListItem onMouseEnter={() => setShowDown(2)} onMouseLeave={() => setShowDown(-1)} className={ isSelected === 'community' ? 'selected' : 'itemShowDown'}><span>Comunidades <FontAwesomeIcon icon={faAngleDown} /></span> <span  className='dot'/></H.ListItem>
              <H.ListItem onMouseEnter={() => setShowDown(3)} onMouseLeave={() => setShowDown(-1)} className={ isSelected === 'analyze' ? 'selected' : 'itemShowDown'}><span>Analise De Dados <FontAwesomeIcon icon={faAngleDown} /></span> <span  className='dot'/></H.ListItem>
              <H.ListItem onMouseEnter={() => setShowDown(-1)} onMouseLeave={() => setShowDown(-1)} onClick={() => setIsSelected('doubt')} className={ isSelected === 'doubt' ? 'selected' : 'item'}>Duvidas <span  className='dot'/></H.ListItem>
          </H.List>
          <H.Buttons>
              <H.Button 
              >
              <H.Helper
                        onMouseEnter={() => setBorderLogin(true)}
                        onMouseLeave={() => setBorderLogin(false)}
              >
                <H.Login href='https://finan-front.vercel.app/' target='_blank'>Login</H.Login>
                <FontAwesomeIcon className='icon' icon={faArrowRightToBracket} />
              </H.Helper>
              <H.BorderBottom className={borderLogin ? 'show' : 'remove'} />
            </H.Button>
          </H.Buttons>
          <H.Bars>
            <FontAwesomeIcon onClick={()=> setOpenMenu(!openMenu)} className='icon' icon={faBars} />
          </H.Bars>
          {openMenu && 
          <H.Menu>
            <H.MenuItem onClick={() => setIsSelected('home')}>Pagina Inicial</H.MenuItem>
            <H.MenuItem onClick={() => setIsSelected('home')}>Para Você <FontAwesomeIcon icon={faAngleDown} /></H.MenuItem>
            <H.MenuItem onClick={() => setIsSelected('home')}>Comunidades <FontAwesomeIcon icon={faAngleDown} /></H.MenuItem>
            <H.MenuItem onClick={() => setIsSelected('home')}>Analise de Dados <FontAwesomeIcon icon={faAngleDown} /></H.MenuItem>
            <H.MenuItem onClick={() => setIsSelected('home')}>Duvida</H.MenuItem>
            <H.MenuItem onClick={() => setIsSelected('home')}>
              <H.Login href='https://finan-front.vercel.app/' target='_blank'>Login </H.Login>
              <FontAwesomeIcon className='icon' icon={faArrowRightToBracket} />
            </H.MenuItem>

          </H.Menu>}
      </H.Header>
      {showDown === 1 && <ShowDownForYou showDown={showDown} setShowDown={setShowDown} />}
      {showDown === 2 && <ShowDownCommunity showDown={showDown} setShowDown={setShowDown} />}
      {showDown === 3 && <ShowDownAnalyze showDown={showDown} setShowDown={setShowDown} />}
    </H.HeaderAndShowDown>
  )
}
