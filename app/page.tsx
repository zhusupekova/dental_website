import type { Metadata } from "next";
import {
  CTA,
  DoctorsGrid,
  FAQList,
  Footer,
  Header,
  LeadForm,
  MobileBar,
  PriceTable,
  ServiceCards,
} from "./components";
import {
  benefits,
  clinic,
  clinicServices,
  doctors,
  photos,
  reviews,
  steps,
  trustBadges,
} from "./content";

export const metadata: Metadata = {
  title: "Стоматология в Бишкеке | AlaMed Clinic",
  description:
    "Современный шаблон сайта для стоматологии или частной клиники в Бишкеке: услуги, врачи, цены, отзывы и запись через WhatsApp.",
};

export default function Home() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Dentist", "LocalBusiness"],
    name: clinic.name,
    address: clinic.address,
    telephone: clinic.phone,
    url: "https://example.com",
    areaServed: `${clinic.city}, ${clinic.district}`,
    openingHours: "Mo-Sa 09:00-20:00, Su 10:00-16:00",
    medicalSpecialty: ["Dentistry", "PrimaryCare"],
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Стоматология в Бишкеке</span>
            <h1>Стоматология, где лечат спокойно, понятно и без лишнего стресса</h1>
            <p>
              Опытные врачи, современное оборудование, прозрачный план лечения и удобная запись через WhatsApp.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={clinic.whatsapp}>Записаться на прием</a>
              <a className="ghost-button" href="#services">Посмотреть услуги</a>
            </div>
            <div className="trust-badges">
              {trustBadges.map((badge) => <span key={badge}>{badge}</span>)}
            </div>
          </div>
          <div className="hero-media">
            <img src={photos.hero} alt="Современный стоматологический кабинет и врач" />
            <div className="hero-note">
              <strong>Для частной клиники</strong>
              <span>Частная клиника для всей семьи: диагностика, лечение и забота в одном месте.</span>
            </div>
          </div>
        </section>

        <section className="section" id="benefits">
          <div className="section-heading">
            <span className="eyebrow">Почему выбирают нас</span>
            <h2>Медицинская точность без холодного отношения</h2>
            <p>Каждый этап понятен пациенту: от записи до финального плана лечения.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((item, index) => (
              <article className="benefit-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt" id="services">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">Услуги</span>
              <h2>Популярные направления стоматологии</h2>
            </div>
            <p>Карточки можно заменить на направления многопрофильной клиники: {clinicServices.join(", ")}.</p>
          </div>
          <ServiceCards />
        </section>

        <CTA title="Не знаете, с чего начать?" text="Опишите ситуацию в WhatsApp, и администратор подскажет, к какому врачу лучше записаться." />

        <section className="section team-feature" id="doctors">
          <div className="feature-photo">
            <img src={doctors[0].photo} alt={`Врач ${doctors[0].name}`} />
          </div>
          <div className="feature-copy">
            <span className="eyebrow">Команда</span>
            <h2>{doctors[0].name}</h2>
            <p className="lead">{doctors[0].role}, {doctors[0].experience}</p>
            <p>{doctors[0].specialty}. Врач спокойно объясняет план лечения, показывает альтернативы и не начинает процедуру без согласия пациента.</p>
            <a className="primary-button" href={clinic.whatsapp}>Записаться к врачу</a>
          </div>
        </section>
        <section className="section compact-section">
          <DoctorsGrid />
        </section>

        <section className="section steps-section">
          <div className="section-heading">
            <span className="eyebrow">Первый прием</span>
            <h2>Как все проходит</h2>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <article key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-section" id="reviews">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">Доверие</span>
              <h2>Отзывы, сертификаты и оборудование</h2>
            </div>
            <p>Добавьте реальные отзывы из 2ГИС или Google, фото сертификатов, лицензии и кабинетов.</p>
          </div>
          <div className="trust-layout">
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <strong>{review.rating}</strong>
                  <p>{review.text}</p>
                  <span>{review.name} · {review.source}</span>
                </article>
              ))}
            </div>
            <div className="clinic-gallery">
              <img src={photos.reception} alt="Ресепшен частной клиники" />
              <img src={photos.equipment} alt="Стоматологическое оборудование" />
            </div>
          </div>
        </section>

        <section className="section alt" id="prices">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">Цены</span>
              <h2>Популярные услуги</h2>
            </div>
            <p>Точная стоимость зависит от диагностики. Мы заранее согласуем план лечения.</p>
          </div>
          <PriceTable />
          <div className="center-action">
            <a className="primary-button" href={clinic.whatsapp}>Получить консультацию</a>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Частые вопросы</h2>
          </div>
          <FAQList schema />
        </section>

        <section className="section contacts" id="contacts">
          <div className="contact-info">
            <span className="eyebrow">Контакты</span>
            <h2>Запишитесь на прием — администратор ответит в течение 10 минут</h2>
            <p><strong>Адрес:</strong> {clinic.address}</p>
            <p><strong>Район:</strong> {clinic.district}</p>
            <p><strong>Часы работы:</strong> {clinic.hours}</p>
            <p><strong>Телефон:</strong> {clinic.phone}</p>
            <div className="contact-links">
              <a className="primary-button" href={clinic.whatsapp}>WhatsApp</a>
              <a className="ghost-button" href={clinic.instagram}>Instagram</a>
            </div>
            <iframe src={clinic.mapUrl} title="Карта клиники в Бишкеке" loading="lazy" />
          </div>
          <LeadForm />
        </section>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
