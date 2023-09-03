import './App.css';
import gptLogo  from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listitemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At corporis voluptas 
              eveniet quia deleniti animi libero iure tempora labore,</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At corporis voluptas 
              eveniet quia deleniti animi libero iure tempora labore, 
              mollitia corrupti quo fuga? Dicta fugit libero hic nesciunt 
              ducimus exercitationem asperiores est pariatur? Non, 
              cumque incidunt quidem temporibus consequatur a 
              laboriosam dolores maiores officia omnis nobis necessitatibus 
              blanditiis numquam rem dicta accusantium voluptate consectetur animi.
               Iure ullam molestiae vero officia fuga quod atque totam similique 
               quaerat in accusantium expedita facilis dicta, corrupti minus 
               numquam beatae, iste ad reiciendis. Tempora amet maxime dolor 
               voluptate nulla unde omnis ut. Soluta, eligendi libero error 
               sapiente dicta porro perferendis dolor excepturi ducimus, dolores 
               distinctio.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message'/>
              <button className="send">
                <img src={sendBtn} alt="send" />
              </button>  
          </div>
          <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Versi</p>
        </div>
      </div>
    </div>
  );
}

export default App;