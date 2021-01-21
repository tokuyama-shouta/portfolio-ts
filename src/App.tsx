import React from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';
import Yajirushi from './img/sita.png'
import Prf from './img/prf.jpg'
import Skill from './Skill'
import Contact from './Contact'

const App:React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          {/* eslint-disable-next-line */}
          <a>Tokuyama Shouta Portfolio</a>
          <nav>
            <ul>
              <li>About</li>
              <li>Skill</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="main-wrapper">
          <h2>Welcome to My Portfolio</h2>
          <Button variant="contained" color="secondary" className="button">
            Contact
          </Button>
          <h3>Engineer Beginner</h3>
        </div>
        <div className="main-yajirusi">
          <img src={Yajirushi} alt="矢印"/>
        </div>
        <div className="about-wrapper">
          <h2>About</h2>
          <div className="img-box">
            <img src={Prf} alt="徳山翔太"/>
            <p>はじめまして。徳山 翔太（とくやま しょうた）と申します。</p>
            <p>年齢は25歳になります。</p>
            <p>出身は大阪で、2020年4月に上京してきました！</p>
            <p>前職は液晶ガラスの製造会社で高校卒業後から６年間務めておりました。</p>
            <p>チームで活動する機会が多く、良くコミュニケーションを</p>
            <p>取り合いながら業務に勤めておりました。</p>
            <p>前職で得たコミュニケーション能力を活かし</p>
            <p>エンジニアとしてチームで開発したサービスで</p>
            <p>社会に貢献できれば良いなと思っております。</p>
            <br/>
            <br/>
            <p>私は<strong>「自分が携わったサービスで社会に貢献したい！」</strong>と思い、</p>
            <p>プログラミングの学習をはじめました。</p>
            <br/>
            <p>その中でもフロントエンドエンジニアを志望している理由は</p>
            <p>フロントエンドは技術の移り変わりが早い分野</p>
            <p>という事を学習しているうちに知りました。</p>
            <p>だからこそチャレンジしたいと思いました。</p>
            <p>常にスキルアップを目指し良いサービス開発やサイト制作をする</p>
            <p>そして社会に貢献したいと思っています。</p>
            <p>私は実務未経験ですが、学習意欲には自信があります。</p>
            <p>逸早く貢献できるように頑張りますので、よろしくお願い致します。</p>
          </div>
          <Skill/>
          <div className="portfolio-wrapper">
            <h2>Portfolio</h2>
            <div className="portfolio-box-container">
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
              <div className="portfolio-box"></div>
            </div>
          </div>

        </div>
        <Contact/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
