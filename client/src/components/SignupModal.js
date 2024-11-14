import { TiMail, TiKeyOutline, TiDeleteOutline, TiUserOutline } from "react-icons/ti";
import ('./SignupModal.css');

const OVERLAY_STYLES = {
  position: 'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zIndex: 1000
}

export default function SignupModal( { open, children, onClose }) {
  if (!open) return null 
  return (
    <>
      <div style={OVERLAY_STYLES}/>
      <div className='modal'>
        <div className='container'>

          <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
            <button className='close-button' onClick={onClose}><TiDeleteOutline className="delete-img"/></button>
          </div>
          <div className='inputs'>
          <div className='input'>
            <TiUserOutline className="input-img"/>
              <input type='name'/>
            </div>
            <div className='input'>
              <TiMail className="input-img" />
              <input type='email'/>
            </div>
            <div className='input'>
              <TiKeyOutline className="input-img"/>
              <input type='password'/>
            </div>
          </div>
          <div className='submit-container'>
            <div className='submit'>
              <button className="login-button">Enter</button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}