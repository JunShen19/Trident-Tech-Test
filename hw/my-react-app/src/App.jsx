import "@/App.css";
import banner from "@/assets/banner.png";
import MenuItems from "@/components/MenuItems";

function App() {
  const paragraphs = [
    {
      title: "外 觀",
      content:
        "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。",
    },
    {
      title: "棲 地",
      content:
        "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。",
    },
    {
      title: "食 性",
      content:
        "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。",
    },
  ];

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="icon" style={{ zIndex: 1 }}>
          <div className="bird-eyes"></div>
          <div className="bird-beak">
            <div className="white1"></div>
            <div className="white2"></div>
            <div className="white3"></div>
          </div>
          <div className="bird-head">
            <div className="white1"></div>
          </div>
        </div>
        <p className="title">白頭翁不吃小米</p>
        <MenuItems />
      </div>

      <div className="main-content">
        <div className="banner">
          <img
            src={banner} // 替換成你的圖片 URL
            alt="Banner Image"
            style={{
              zIndex: -2,
              width: "200%",
              height: "200%",
              objectFit: "cover",
              transform: "translateY(-25%) translateX(-30%)", // 负值表示向左移动，可以根据需要调整百分比
            }} // 使圖片填滿整個 banner
          />
          <div className="content">
            <p className="title">白頭翁 (Chinese bulbul)</p>
            <p className="sub-title">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </p>
          </div>
        </div>

        <div className="paragraphs-container">
          {paragraphs.map((paragraph, index) => (
            <div className="paragraph" key={index}>
              <div className="title">
                <span>
                  {paragraph.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="circle"
                  >
                    <circle
                      cx="13"
                      cy="13"
                      r="8"
                      stroke="#AA6666"
                      strokeOpacity="0.6"
                      strokeWidth="8"
                    />
                  </svg>
                </span>
              </div>

              <div className="content">{paragraph.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
