import logo from './logo.svg';

import iMac from './assets/apple/iMac.png'
import iPadpro from './assets/apple/iPad_pro.png'
import iPhoneX from './assets/apple/iPhone_X.png'
import MacBookImg from './assets/apple/MacBook.png'

const IPhone = (color) => {
  return(
// iPhone X
      <div
  
      >
        <div
        style={{
          height:230,
          width:106,
          backgroundColor:'white',
          position: 'absolute',
          zIndex: 2,
          marginLeft:7,
          marginTop:6,
          borderRadius:11,
          textAlign:'center',
          backgroundImage: "url(" + "https://images.unsplash.com/photo-1642555074804-b0b780a4233b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=800" + ")"

        }}
        > 
        <p
        >
          iPhone X
        </p>
        </div>
          <img
          style={{
            height:244,
            width:120,
            backgroundColor:'white',
            borderRadius:20
          }}
            src={iPhoneX}
          />
      </div>
  )
}
const IPad = () => {
  return(
// iPad
<div>
<div
style={{
  marginLeft:560,
  zIndex: 2,
  textAlign: 'center',
  position: 'absolute',
  backgroundColor: 'white',
  height:200,
  width: 281,
  marginTop:7,
  borderRadius:4,
  backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"

}}
>
<p>
  IPad Pro
</p>
</div>
<img
style={{
  height:213,
  width: 298,
  marginLeft:550,
  zIndex: 1,
}}
src={iPadpro}
/>
</div>
  )
}
const IMac = () => {
  return(
    // iMac
<div
    
    style={{
      alignItems: 'center',
      marginLeft: 500,
    }}
    >
    <div className="App">
            <div
          style={{
            height:255,
            width: 477,
            marginTop:110,
            backgroundColor:'white',
            zIndex: 2,
            textAlign: 'center',
            position: 'absolute',
            marginLeft: 11,
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"

          }}
          >

          <p>
            iMac 2021
          </p>
          </div>
            <img src={iMac} style={{
              height: 400,
              width: 500,
              marginTop: 100,
              zIndex:1,
              position: 'absolute'
            }}/>
        </div>
    </div>
  )
}

const MacBook = () => {
  return(
    <div>
      <div
      style={{
        height:240,
            width: 392,
            marginTop:9,
            backgroundColor:'white',
            zIndex: 2,
            textAlign: 'center',
            position: 'absolute',
            marginLeft: 55,
            borderRadius:1,
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")"

      }}
      >
        <p>
          MacBook
        </p>
      </div>
      <img src={MacBookImg}
        style={{
          height:281,
          width:500

        }}
      />
    </div>
  )
}


function App() {
  return (
    <div> 
    <div
        style={{
          zIndex:1
        }}
    >

    </div>
    <IMac/>
    <div
    style={{
      marginLeft:300,
      zIndex:2,
      position: 'absolute',
      marginTop:310,
    }}
    >
    <IPad/>

    </div>
    <div
    style={{
      marginLeft:800,
      zIndex:3,
      position:'absolute',
      marginTop:342
    }}
    >
      <IPhone/>
    </div>
    <div
    style={{
      zIndex:2,
      position:'absolute',
      marginTop:300,
      marginLeft:210
    }}    >
    <MacBook/>

    </div>


    </div>
    
   
  );
}



export default App;
