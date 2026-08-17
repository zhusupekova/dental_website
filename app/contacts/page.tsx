import type { Metadata } from "next";
import { Footer, Header, LeadForm, MobileBar } from "../components";
import { clinic } from "../content";

export const metadata: Metadata = {
  title: `Контакты | ${clinic.name}`,
  description: `Адрес, телефон, WhatsApp, часы работы и карта клиники ${clinic.name} в Бишкеке.`,
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <span className="eyebrow">Контакты</span>
          <h1>Запись в клинику в Бишкеке</h1>
          <p>{clinic.address}. {clinic.hours}. Администратор ответит в течение 10 минут в рабочее время.</p>
        </section>
        <section className="section contacts">
          <div className="contact-info">
            <h2>{clinic.name}</h2>
            <p><strong>Адрес:</strong> {clinic.address}</p>
            <p><strong>Район:</strong> {clinic.district}</p>
            <p><strong>Часы работы:</strong> {clinic.hours}</p>
            <p><strong>Телефон:</strong> {clinic.phone}</p>
            <div className="contact-links">
              <a className="primary-button" href={clinic.whatsapp}>WhatsApp</a>
              <a className="ghost-button" href={`tel:${clinic.phone.replaceAll(" ", "")}`}>Позвонить</a>
            </div>
            <iframe src={clinic.mapUrl} title="Карта клиники" loading="lazy" />
          </div>
          <LeadForm />
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
