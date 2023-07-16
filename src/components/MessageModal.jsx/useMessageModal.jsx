import { useState } from 'react';

const useMessageModal = () => {
  const [isShowing, setIsShowing] = useState(false);
    const [message, setMessage] = useState('')
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
    setMessage,message
  }
};

export default useMessageModal;