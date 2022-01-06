import logo from './logo.svg';

import iMac from './assets/apple/iMac.png'
import iPadpro from './assets/apple/iPad_pro.png'
import iPhoneX from './assets/apple/iPhone_X.png'
function App() {
  return (
    <div>

// iPhone X
<div>
  <div
  style={{
    height:324,
    width:150,
    backgroundColor:'white',
    position: 'absolute',
    zIndex: 2,
    marginLeft:11,
    marginTop:9,
    borderRadius:16,
    textAlign:'center'
  }}
  > 
  <p>
    iPhone X
  </p>
  </div>
    <img
    style={{
      height:344,
      width:172,
      backgroundColor:'white',
      borderRadius:26
    }}
      src={iPhoneX}
    />
</div>


// iPad
<div>
<div
style={{
  marginLeft:560,
  zIndex: 2,
  textAlign: 'center',
  position: 'absolute',
  backgroundColor: 'white',
  height:195,
  width: 280,
  marginTop:9,
  borderRadius:4
}}
>
<p>
  IPad Pro
</p>
</div>
<img
style={{
  height:213,
  width: 300,
  marginLeft:550,
  zIndex: 1,
}}
src={iPadpro}
/>
</div>

// iMac
<div
    
    style={{
      alignItems: 'center',
      marginLeft: 500
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
            marginLeft: 11

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
    </div>
    
   
  );
}



export default App;
