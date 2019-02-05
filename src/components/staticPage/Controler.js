import React, { Component } from 'react';

import Painting from "./components/PaintingBlock";
import TopMenu from "./components/TopMenu";

import Painting1 from './../../resources/assets/painting1.jpg';
import Painting2 from './../../resources/assets/painting2.jpg';
import Painting3 from './../../resources/assets/painting3.jpg';
import Painting4 from './../../resources/assets/painting4.png';
import Painting5 from './../../resources/assets/painting5.png';

class MainController extends Component {
  render() {

    const style = {
      wrapper: {
        transform: "translateY(" + (!this.props.showStaticPage ? "100vh" : "14vh") + ")",
        position: "fixed",
        height: "86vh",
        width: "100vw",
        zIndex: "99999",
        backgroundColor: "#eee",
        overflowY: "scroll",
        transition: "1s"
      }
    }

    return (
      <div style={style.wrapper}>
        <Painting painting={Painting1} name={"„Kolumna”"} about={"Obraz ma na celu wzbudzenie pozytywnych emocji, pokazując że nasze życie jako jest piękne i mieni się mocnym zielonym kolorem, a wszelkie przeciwności pokazane jako stopnie, z czasem i tak zostają zalane przez nostalgię i stają się z czasem coraz bardziej tylko dobrymi wspomnieniami, które mimo tego że nie znikną, będą łagodniejsze w odbiorze."}/>
        <Painting painting={Painting2} name={"„Walka na brzegu”"} about={"Stworzony obraz pokazuje walkę ze sobą dwóch armii, mimo tego że walczą o kompletnie inne wartości to ostatecznie i tak patrząc z boku jako przechodzień nie jesteśmy w stanie określić kto ma racje, albo walczy w dobrej sprawie."} showReverse />
        <Painting painting={Painting3} name={"„Noc”"} about={"Dzieło stworzone pod wpływem melancholijnych wspomnień związanych z wieczornymi wizytami nad morzem. Obraz ukazuje nieistniejącą linię horyzontu pomiędzy niebem dziennym, a wieczornym. Jest to próba uchwycenia momentu zmiany pory dnia."}/>
        <Painting painting={Painting4} name={"„Gwiazdy”"} about={"Komiksowa grafika przedstawia kobietę, której głowa jest zaprzątnięta milionem pomysłów na to jak wykorzystać kolejny dzień. Wykorzystanie gwiazd we włosach zostawia we mnie pytanie, czy to siwe włosy, przez zebrane doświadczenie wytwarzają te pomysły, czy to odbłyski w silnych czarnych włosach."}showReverse />
        <Painting painting={Painting5} name={"„Dylemat”"} about={"Rysunek jest podejściem do tematu tego jak wiele rzeczy musimy ukrywać za maskami naszych twarzy, oraz jak skomplikowanym tworem jest człowiek. Pokazanie wewnętrznej walki w której nie ma zwycięzców, gdyż gdy czlowiek się zmienia staje się mniej spójny, ale nie zmieniając swojego zdania nie jest w stanie się rozwijać."}/>
        <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontSize:"77px"}}>Dziękuje za uwagę</div>
      </div>
    );
  }
}


export default MainController;
