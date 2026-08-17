import type { Metadata } from "next";
import { CTA, DoctorsGrid, Footer, Header, MobileBar } from "../components";
import { clinic, photos } from "../content";

export const metadata: Metadata = {
  title: `О клинике | ${clinic.name}`,
  description: "История, ценности, команда, оборудование и фото частной клиники в Бишкеке.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <span className="eyebrow">О клинике</span>
          <h1>Частная клиника в Бишкеке с понятным подходом к лечению</h1>
          <p>Мы объединяем современную диагностику, аккуратную коммуникацию и спокойную атмосферу, чтобы пациент понимал, что происходит на каждом этапе.</p>
        </section>
        <section className="section content-split">
          <div className="content-panel">
            <h2>История и ценности</h2>
            <p>{clinic.name} создана как клиника, где медицинское качество не отделяется от человеческого отношения. Мы не торопим пациента, заранее обсуждаем стоимость и объясняем каждое решение.</p>
            <ul>
              <li>Честный план лечения и прозрачные цены.</li>
              <li>Бережный прием детей и взрослых.</li>
              <li>Современное оборудование и стерилизация.</li>
              <li>Удобная запись через WhatsApp, звонок и форму.</li>
            </ul>
          </div>
          <img className="wide-photo" src={photos.reception} alt="Ресепшен клиники" />
        </section>
        <section className="section alt">
          <div className="section-heading">
            <span className="eyebrow">Команда</span>
            <h2>Врачи клиники</h2>
          </div>
          <DoctorsGrid />
        </section>
        <section className="section">
          <img className="wide-photo" src={photos.equipment} alt="Оборудование клиники" />
        </section>
        <CTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
