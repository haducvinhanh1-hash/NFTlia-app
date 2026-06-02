import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();
function DropdownProvider(props) {
  const [show, setShow] = useState(false);
  const [day, setDay] = useState('');
  const toggle = () => {
    setShow(!show);
  };
  const values = { show, setShow, toggle, day, setDay };
  return (
    <DropdownContext.Provider value={values}>
      {props.children}
    </DropdownContext.Provider>
  );
}
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === 'undefined')
    throw new Error('useDropdown must be used within DropdownProvider');
  return context;
}
export { useDropdown, DropdownProvider };
