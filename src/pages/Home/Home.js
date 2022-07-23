/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import Slider from '../../component/Slider/Slider';
import BlogContainer from '../../components/BlogContainer/BlogContainer';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <header>
        <div className="main-banner__title">
          <h1>최적의 사운드.</h1>
          <p>
            지금까지 가장 편안하고 다재다능한 Beoplay EX를 소개합니다. 큰
            헤드폰과 성능은 동일하면서 크기는 주머니 안에 쏙 들어갈 정도로
            작습니다.
          </p>
          <button className="main-banner__button" type="button">
            자세히 살펴보기
          </button>
        </div>
        <div className="main-banner__image">
          <img
            alt="main-image"
            src="images/main/pexels-grzegorz-4336587.jpeg"
          />
        </div>
      </header>
      <section className="container-beige">
        <div className="container-beige-title">
          <h2>사운드. 영상. 당신의 선택입니다.</h2>
        </div>
        {/* <Slider /> */}
        <div className="container-beige-mv">
          <div className="container-beige-mv__title">
            <p>1925년 부터.</p>
            <h2>느껴보세요. 자유롭게.</h2>
          </div>
          <div className="container-beige-mv__video">
            <video
              src="images/main/pexels-cottonbro-6688144.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>
      <BlogContainer />
      <section className="container-white">
        <div className="container-white-title">
          <p>STORIES OF SOUND AND VISION</p>
          <h2>On the Record.</h2>
        </div>
        <div className="container-white-article">
          <div className="container-white-article__img">
            <img
              alt="article_img"
              src="images/main/pexels-anna-shvets-5231306.jpeg"
            />
          </div>
          <div className="container-white-article__textbox">
            <h2>Haute Couture HI-FI</h2>
            <p>
              발렌시아가와의 새로운 콜라보레이션의 결과로 탄생한 Speaker Bag은
              우리가 이 전설적인 패션 하우스와 공유하는 이상과 가치를
              보여줍니다.
            </p>
            <button className="container-white-article__button" type="button">
              자세히 살펴보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
