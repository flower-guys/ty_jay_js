import React, { Component } from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';

const firebaseConfig = {
  apiKey: "AIzaSyAl3H_ijO7wZVFV2juq1ofEWNB_euZeyQY",
  authDomain: "ty-jay-js.firebaseapp.com",
  databaseURL: "https://ty-jay-js.firebaseio.com",
  projectId: "ty-jay-js",
  storageBucket: "ty-jay-js.appspot.com",
  messagingSenderId: "425444501628"
};
firebase.initializeApp(firebaseConfig);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #cd4154;
  a {
    color: #FFF;
    text-decoration: none;
  }
`;
const ImgWrapper = styled.img`
  width: 95vw;
  max-width: 550px;
  height: auto;
  border-radius: 10px;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <ImgWrapper src='https://firebasestorage.googleapis.com/v0/b/ty-jay-js.appspot.com/o/KakaoTalk_Photo_2018-12-10-09-40-03.jpeg?alt=media&token=f54d4d6d-8e69-429d-a208-2779921c5979' />
        <a
          className="App-link"
          href="https://www.notion.so/tyjayjs/5f4f4473147a44cb98834da5cd61c0cf?v=9f7101db210241ff845c8bcd52f50b3a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            TY👏Jay👊JS🙌
          </p>
        </a>
      </Container>
    );
  }
}

export default App;
