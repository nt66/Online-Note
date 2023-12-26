import { useContext } from 'react'
import { NoteContext } from '../../store/context'
import { ReactSVG } from 'react-svg'

import leftArrow from '../../assets/leftArrow.svg'
import './HoldBar.less'

function HoldBar() {
  const { setShrink, shrinkPanel } = useContext(NoteContext)

  return (
    <div  
      className={shrinkPanel ? 'bar-wrap-hidden' : 'bar-wrap'}
      >
      <div className='bar-hover'>
        <button className={shrinkPanel ? 'arrow-button-hidden' : 'arrow-button'} onClick={() => setShrink()}>
          <ReactSVG src={leftArrow} style={{ fill: '#9D9DA6', width: 20, height: 20 }} />
        </button>
      </div>
    </div>
  )
}

export default HoldBar
