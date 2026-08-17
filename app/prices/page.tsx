import type { Metadata } from "next";
import { CTA, Footer, Header, MobileBar, PriceTable, ServiceCards } from "../components";
import { clinic } from "../content";

export const metadata: Metadata = {
  title: `Цены | ${clinic.name}`,
  description: "Цены на популярные услуги стоматологии в Бишкеке. Точная стоимость согласуется после диагностики.",
};

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <span className="eyebrow">Цены</span>
          <h1>Цены на стоматологические услуги в Бишкеке</h1>
          <p>Мы показываем ориентиры заранее. Финальная стоимость зависит от диагностики, объема лечения и выбранного плана.</p>
        </section>
        <section className="section">
          <PriceTable />
        </section>
        <section className="section alt">
          <div className="section-heading">
            <span className="eyebrow">Услуги</span>
            <h2>Выберите направление</h2>
          </div>
          <ServiceCards compact />
        </section>
        <CTA title="Уточнить стоимость" text="Напишите в WhatsApp, администратор задаст несколько вопросов и подскажет, с какого приема начать." />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
