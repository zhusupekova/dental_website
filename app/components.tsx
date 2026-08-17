import { clinic, doctors, faqs, prices, services } from "./content";
import { AppointmentStackForm } from "./watermelon-enhancements";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">A</span>
        <span>
          <strong>{clinic.logo}</strong>
          <small>стоматология в Бишкеке</small>
        </span>
      </a>
      <nav aria-label="Основная навигация">
        <a href="/#services">Услуги</a>
        <a href="/#doctors">Врачи</a>
        <a href="/about">О клинике</a>
        <a href="/prices">Цены</a>
        <a href="/#reviews">Отзывы</a>
        <a href="/contacts">Контакты</a>
      </nav>
      <div className="header-actions">
        <a className="ghost-button" href={`tel:${clinic.phone.replaceAll(" ", "")}`}>Позвонить</a>
        <a className="primary-button" href={clinic.whatsapp}>Записаться</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="/">
          <span className="brand-mark">A</span>
          <span>
            <strong>{clinic.logo}</strong>
            <small>частная клиника</small>
          </span>
        </a>
        <p>Шаблон сайта для стоматологии или многопрофильной клиники. Замените название, фото, адрес, врачей и цены под свою клинику.</p>
      </div>
      <div>
        <h3>Навигация</h3>
        <a href="/#services">Услуги</a>
        <a href="/doctors/aida-sadykova">Врачи</a>
        <a href="/prices">Цены</a>
        <a href="/contacts">Контакты</a>
      </div>
      <div>
        <h3>Контакты</h3>
        <p>{clinic.address}</p>
        <p>{clinic.hours}</p>
        <a href={`tel:${clinic.phone.replaceAll(" ", "")}`}>{clinic.phone}</a>
        <a href={clinic.whatsapp}>WhatsApp</a>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar" aria-label="Быстрая запись">
      <a href={clinic.whatsapp}>WhatsApp</a>
      <a href={`tel:${clinic.phone.replaceAll(" ", "")}`}>Позвонить</a>
      <a href="#lead-form">Записаться</a>
    </div>
  );
}

export function CTA({
  title = "Запишитесь на прием",
  text = "Администратор уточнит жалобу, подберет врача и ответит в течение 10 минут.",
}) {
  return (
    <section className="cta-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <a className="primary-button" href={clinic.whatsapp}>Написать в WhatsApp</a>
        <a className="ghost-button light" href={`tel:${clinic.phone.replaceAll(" ", "")}`}>Позвонить</a>
      </div>
    </section>
  );
}

export function ServiceCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "service-grid compact" : "service-grid"}>
      {services.map((service) => (
        <article className="service-card" key={service.slug}>
          <span className="icon-pill">{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.short}</p>
          <div className="card-bottom">
            <strong>{service.price}</strong>
            <a href={`/services/${service.slug}`}>Подробнее</a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function DoctorsGrid() {
  return (
    <div className="doctor-grid">
      {doctors.map((doctor) => (
        <a className="doctor-card" href={`/doctors/${doctor.slug}`} key={doctor.slug}>
          <img src={doctor.photo} alt={`Врач ${doctor.name}`} />
          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.role}</p>
            <small>{doctor.experience}</small>
          </div>
        </a>
      ))}
    </div>
  );
}

export function PriceTable() {
  return (
    <div className="price-table">
      {prices.map(([name, price]) => (
        <div className="price-row" key={name}>
          <span>{name}</span>
          <strong>{price}</strong>
        </div>
      ))}
    </div>
  );
}

export function FAQList({ schema = false }: { schema?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function LeadForm() {
  return <AppointmentStackForm />;
}
