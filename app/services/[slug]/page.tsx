import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA, FAQList, Footer, Header, MobileBar, PriceTable } from "../../components";
import { clinic, doctors, serviceBySlug, services } from "../../content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceBySlug(params.slug);
  if (!service) {
    return {};
  }

  return {
    title: `${service.title} в Бишкеке | ${clinic.name}`,
    description: `${service.short} Запись через WhatsApp, понятный план лечения и спокойный прием.`,
    openGraph: {
      title: `${service.title} в Бишкеке | ${clinic.name}`,
      description: `${service.short} Запись через WhatsApp.`,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${service.title} в Бишкеке | ${clinic.name}`,
      description: `${service.short} Запись через WhatsApp.`,
      images: [],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.short,
    provider: {
      "@type": "Dentist",
      name: clinic.name,
      address: clinic.address,
      telephone: clinic.phone,
    },
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <section className="subhero">
          <span className="eyebrow">Услуга</span>
          <h1>{service.title} в Бишкеке</h1>
          <p>{service.short} Врач объяснит диагностику, этапы, сроки и условия до начала лечения.</p>
          <div className="hero-actions">
            <a className="primary-button" href={clinic.whatsapp}>Записаться</a>
            <a className="ghost-button" href="/prices">Посмотреть условия</a>
          </div>
        </section>

        <section className="section content-split">
          <div className="content-panel">
            <h2>Кому подходит услуга</h2>
            <p>Пациентам, которые хотят решить проблему спокойно, без лишних медицинских терминов и с понятным планом. На консультации врач оценит ситуацию, покажет возможные варианты и предупредит о рисках.</p>
            <h2>Как проходит лечение</h2>
            <ul>
              <li>Осмотр, диагностика и фиксация жалоб.</li>
              <li>Объяснение вариантов лечения и предварительной стоимости.</li>
              <li>Процедура после согласия пациента и контроля комфорта.</li>
              <li>Рекомендации по уходу и напоминание о контрольном визите.</li>
            </ul>
          </div>
          <aside className="content-panel">
            <h3>Условия</h3>
            <p>{service.price}</p>
            <p>План лечения согласуем после диагностики.</p>
            <a className="primary-button" href={clinic.whatsapp}>Получить консультацию</a>
          </aside>
        </section>

        <section className="section alt">
          <div className="section-heading">
            <span className="eyebrow">Врач</span>
            <h2>{doctors[0].name}</h2>
            <p>{doctors[0].role}, {doctors[0].experience}. Подходит к лечению спокойно и подробно объясняет каждый этап.</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Вопросы по услуге</h2>
          </div>
          <FAQList schema />
        </section>
        <CTA />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
