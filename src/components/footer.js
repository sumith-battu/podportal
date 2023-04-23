import React,{useState} from 'react'
import './Footer.css'

import { ReactComponent as PlayIcon } from '../assets/PlayIcon.svg'
import { ReactComponent as PauseIcon } from '../assets/PauseIcon.svg'
import { ReactComponent as NextIcon } from '../assets/NextIcon.svg'
import { ReactComponent as PreviousIcon } from '../assets/PrevIcon.svg'



export default function Footer() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className='footer-container'>
      <div className='player-control'>
        <PreviousIcon width={'32px'} />
        {
          isPlaying ? <PauseIcon width={'32px'} onClick={() => setIsPlaying(false)} /> : <PlayIcon width={'32px'} onClick={() => setIsPlaying(true)} />
        }
        <NextIcon width={'32px'} />
      </div>
    </div>
  )
}

