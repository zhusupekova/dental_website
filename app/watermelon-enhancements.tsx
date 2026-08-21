"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  Activity,
  CalendarCheck,
  ChevronRight,
  Clock3,
  FileCheck2,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { clinic, services } from "./content";

const quickActions = [
  { id: "pain", label: "Болит зуб", icon: HeartPulse, href: clinic.whatsapp },
  { id: "cleaning", label: "Чистка", icon: Sparkles, href: "/services/hygiene" },
  { id: "kids", label: "Ребенку", icon: Users, href: "/services/kids-dentistry" },
  { id: "checkup", label: "Осмотр", icon: Stethoscope, href: clinic.whatsapp },
];

const mobileLinks = [
  { href: "/#services", label: "Услуги" },
  { href: "/#doctors", label: "Врачи" },
  { href: "/about", label: "О клинике" },
  { href: "/prices", label: "Цены" },
  { href: "/#reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
];

export function MobileSiteMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className="mobile-menu-trigger"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        <span>Меню</span>
      </button>
      {isOpen && (
        <div className="mobile-menu-panel">
          <div className="mobile-menu-head">
            <strong>Быстрая навигация</strong>
            <button aria-label="Закрыть меню" onClick={() => setIsOpen(false)} type="button">
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="mobile-menu-links">
            {mobileLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="mobile-menu-card">
            <MapPin size={18} aria-hidden="true" />
            <div>
              <strong>{clinic.address}</strong>
              <span>{clinic.hours}</span>
            </div>
          </div>
          <div className="mobile-menu-actions">
            <a className="primary-button" href={clinic.whatsapp} onClick={() => setIsOpen(false)}>
              WhatsApp
            </a>
            <a
              className="ghost-button"
              href={`tel:${clinic.phone.replaceAll(" ", "")}`}
              onClick={() => setIsOpen(false)}
            >
              Позвонить
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function QuickCareBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const filteredServices = useMemo(
    () =>
      services.filter((service) =>
        service.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <div className="quick-care" aria-label="Быстрый выбор услуги">
      <div className={isSearching ? "quick-search expanded" : "quick-search"}>
        <Search size={18} aria-hidden="true" />
        {isSearching && (
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Найти услугу"
            aria-label="Найти услугу"
          />
        )}
        <button
          type="button"
          aria-label={isSearching ? "Закрыть поиск" : "Открыть поиск"}
          onClick={() => {
            setIsSearching((value) => !value);
            setQuery("");
          }}
        >
          {isSearching ? <X size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
      {!isSearching ? (
        <div className="quick-pills">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <a href={action.href} key={action.id}>
                <Icon size={16} aria-hidden="true" />
                <span>{action.label}</span>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="quick-results">
          {filteredServices.slice(0, 4).map((service) => (
            <a href={`/services/${service.slug}`} key={service.slug}>
              {service.title}
              <span>{service.price}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function ConfidencePanel() {
  return (
    <div className="confidence-panel" aria-label="Показатели доверия">
      <div>
        <ShieldCheck size={20} aria-hidden="true" />
        <strong>Прозрачный план</strong>
        <span>стоимость до начала</span>
      </div>
      <div>
        <Clock3 size={20} aria-hidden="true" />
        <strong>Ответ за 10 минут</strong>
        <span>WhatsApp или звонок</span>
      </div>
      <div>
        <CalendarCheck size={20} aria-hidden="true" />
        <strong>Прием сегодня</strong>
        <span>если есть свободное окно</span>
      </div>
    </div>
  );
}

const commandCards = [
  {
    icon: MessageCircle,
    title: "Пациент пишет в WhatsApp",
    text: "Администратор быстро уточняет жалобу и предлагает удобное время.",
  },
  {
    icon: Activity,
    title: "Врач проводит диагностику",
    text: "Осмотр, снимки по показаниям и спокойное объяснение ситуации.",
  },
  {
    icon: FileCheck2,
    title: "План лечения понятен",
    text: "Стоимость, этапы и сроки согласованы до начала процедур.",
  },
];

export function PatientJourneyConsole() {
  const [active, setActive] = useState(commandCards[0].title);
  const selected =
    commandCards.find((card) => card.title === active) ?? commandCards[0];
  const Icon = selected.icon;

  return (
    <div className="journey-console">
      <div className="console-topline">
        <span>Patient flow</span>
        <strong>готовый путь к записи</strong>
      </div>
      <div className="console-shell">
        <aside>
          {commandCards.map((card) => {
            const CardIcon = card.icon;
            return (
              <button
                className={active === card.title ? "active" : ""}
                key={card.title}
                onClick={() => setActive(card.title)}
                type="button"
              >
                <CardIcon size={17} />
                <span>{card.title}</span>
              </button>
            );
          })}
        </aside>
        <section>
          <div className="console-icon">
            <Icon size={24} />
          </div>
          <h3>{selected.title}</h3>
          <p>{selected.text}</p>
          <div className="console-progress">
            <span />
          </div>
        </section>
      </div>
    </div>
  );
}

export function MotionValueStrip() {
  return (
    <div className="motion-strip" aria-label="Преимущества сайта">
      {[
        ["01", "Mobile-first", "Запись видна сразу на телефоне"],
        ["02", "Soft motion", "Деликатные состояния и hover-эффекты"],
        ["03", "Ready to sell", "Структура под заявки и доверие"],
      ].map(([number, title, text]) => (
        <article key={title}>
          <span>{number}</span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function AppointmentStackForm() {
  const [selected, setSelected] = useState(services[0].title);
  const [contactMethod, setContactMethod] = useState("WhatsApp");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "Не указано");
    const phone = String(form.get("phone") || "Не указано");
    const time = String(form.get("time") || "Не указано");
    const message = [
      "Здравствуйте! Хочу записаться на прием.",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Услуга: ${selected}`,
      `Удобное время: ${time}`,
      `Способ связи: ${contactMethod}`,
    ].join("\n");

    window.location.href = `${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  return (
    <form className="lead-form appointment-stack" id="lead-form" onSubmit={handleSubmit}>
      <div className="stack-header">
        <span>Запись на прием</span>
        <strong>3 коротких шага</strong>
      </div>
      <label>
        Имя
        <input name="name" placeholder="Как к вам обращаться" />
      </label>
      <label>
        Телефон
        <input name="phone" placeholder="+996 ___ ___ ___" />
      </label>
      <div className="option-stack" aria-label="Выбор услуги">
        {services.slice(0, 4).map((service) => (
          <button
            className={selected === service.title ? "selected" : ""}
            key={service.slug}
            onClick={() => setSelected(service.title)}
            type="button"
          >
            <span>{service.title}</span>
            <small>{service.price}</small>
          </button>
        ))}
      </div>
      <div className="contact-switcher" aria-label="Предпочтительный способ связи">
        {["WhatsApp", "Звонок"].map((method) => (
          <button
            className={contactMethod === method ? "selected" : ""}
            key={method}
            onClick={() => setContactMethod(method)}
            type="button"
          >
            {method === "WhatsApp" ? <MessageCircle size={16} /> : <Phone size={16} />}
            {method}
          </button>
        ))}
      </div>
      <input name="service" readOnly type="hidden" value={selected} />
      <input name="contactMethod" readOnly type="hidden" value={contactMethod} />
      <label>
        Удобное время
        <input name="time" placeholder="Сегодня после 16:00" />
      </label>
      <button className="primary-button" type="submit">
        Отправить в WhatsApp
        <ChevronRight size={17} aria-hidden="true" />
      </button>
      <p>Администратор уточнит детали и подтвердит запись. Данные в шаблоне легко заменить под вашу клинику.</p>
    </form>
  );
}
