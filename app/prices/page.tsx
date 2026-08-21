import type { Metadata } from "next";
import { CTA, Footer, Header, MobileBar, PriceTable, ServiceCards } from "../components";
import { clinic } from "../content";

export const metadata: Metadata = {
  title: `Условия | ${clinic.name}`,
  description: "Условия записи на популярные услуги стоматологии в Бишкеке согласуются после диагностики.",
};

export default function PricesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <span className="eyebrow">Условия</span>
          <h1>Условия записи на стоматологические услуги в Бишкеке</h1>
          <p>Мы показываем ориентиры заранее. Финальный план зависит от диагностики, объема лечения и выбранного подхода.</p>
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
        <CTA title="Уточнить условия" text="Напишите в WhatsApp, администратор задаст несколько вопросов и подскажет, с какого приема начать." />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
