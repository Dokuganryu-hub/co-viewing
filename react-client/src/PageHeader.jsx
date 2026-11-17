import {useState} from "react";

function PageHeader() {
    
  const [hideText, setHideText] = useState(false);

  function handleClick() {
    if (hideText === false) {
      setHideText(true);
    } else {
      setHideText(false);
    }
  }

  return (

    <div>
        <h1>Team Investigation</h1>
        
        <button id="hideTextButton" onClick={handleClick}>
          {hideText ? 'Show Text' : 'Hide Text'}
        </button>
        {!hideText && <p>Cam footage</p>}
    </div>

  )
}

export default PageHeader