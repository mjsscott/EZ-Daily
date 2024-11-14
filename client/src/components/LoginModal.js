import { TiMail, TiKeyOutline, TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './LoginModal.css';


const OVERLAY_STYLES = {
  position: 'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zIndex: 1000
}

export default function LoginModal( { open, children, onClose }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (path) => {
    navigate(path);
  }

  if (!open) return null
  return (
    <>
      <div style={OVERLAY_STYLES}/>
      <div className='modal'>
        <div className='container'>

          <div className='header'>
            <div className='text'>Log In</div>
            <div className='underline'></div>
            <button className='close-button' onClick={onClose}><TiDeleteOutline className="delete-img"/></button>
          </div>
          <div className='inputs'>

            <div className='input'>
              <TiMail className="input-img" />
              <input 
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input'>
              <TiKeyOutline className="input-img"/>
              <input 
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='submit-container'>
            <div className='submit'>
              <button className="login-button" onClick={() => handleLogin('/profile')}>Enter</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}