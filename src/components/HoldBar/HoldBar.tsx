import { useContext, useCallback, MouseEvent } from 'react'
import { NoteContext } from '../../store/context'
import { ReactSVG } from 'react-svg'
import leftArrow from '../../assets/leftArrow.svg'
import './HoldBar.less'

function HoldBar() {
  const { setShrink, shrinkPanel, updatePanelWidth, panelWidth } = useContext(NoteContext)

  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const { clientX: startX } = e
    
    const onMove = (e: any) => {
      e.stopImmediatePropagation()
      const { clientX } = e
      const deltaX = clientX - startX
      updatePanelWidth(deltaX)
    }
  
    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
  
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }, [panelWidth])

  return (
    <div  
      className={shrinkPanel ? 'bar-wrap-hidden' : 'bar-wrap'}
      >
      <div className='bar-hover'
        onMouseDown={handleMouseDown}      
      >
        <button className={shrinkPanel ? 'arrow-button-hidden' : 'arrow-button'} onClick={() => setShrink()}>
          <ReactSVG src={leftArrow} style={{ fill: '#9D9DA6', width: 20, height: 20 }} />
        </button>
      </div>
    </div>
  )
}

export default HoldBar
