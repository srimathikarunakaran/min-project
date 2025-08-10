import picture from './Images/picture.jpeg';
import './Page.css';

function Photo(){
    return(
        <>

        <div className='container'>
            <h1>Friend Group Pic!!!</h1>
            <img src={picture} alt="" />
            <p>
            Operation Succsess!!
          </p>
          <h1 className='ending'>Thanks For Your Cooparation Guys..</h1>
        </div>
        
        
        </>
    )
}


export default Photo;
