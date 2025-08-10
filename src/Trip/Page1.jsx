import  { useState } from 'react';
import './Page.css';
import Photo from './Page3';


function Friends() {
  const [showPhoto, setShowPhoto] = useState(false);

  const handleClick = () => {
    setShowPhoto(true);
  };

  return (
    <>
      {showPhoto ? (
        <Photo />
      ) : (
        <div className='main'>
          <h1>Click here to get picture!!!!!</h1>
          <a href="#" onClick={handleClick}>
            Click me
          </a>
          
        </div>
      )}
    </>
  );
}

export default Friends;
