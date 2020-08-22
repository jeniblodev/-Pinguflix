/* eslint-disable quotes */
import React from 'react';
import Menu from '../components/Menu';
import dadosIniciais from '../data/dados_iniciais.json';
import BannerMain from '../components/BannerMain';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Pingu é o protagonista e personagem título da série de TV de mesmo nome. Dirigida, animada e criada por Otmar Gutmann. A série foi feita com a técnica de animação chamada claymation. Ao todo foram produzidos um total de 105 episódios, de 5 minutos cada. Em 2004, a empresa inglesa HIT Entertainment adquiriu os direitos da série e produziu duas novas temporada, com outros 52 episódios."
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </div>
  );
}

export default Home;
