"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// --- ICONS ---
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="social-icon">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const SteamIcon = () => (
    <svg viewBox="0 0 24 24" className="social-icon">
        <path d="M11.979 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.331 16.914l-2.662-3.805c-1.07.214-2.164-.206-2.827-1.07l-4.524 1.865c-.179 1.226-1.233 2.155-2.502 2.155-1.395 0-2.527-1.132-2.527-2.527s1.132-2.527 2.527-2.527c.451 0 .874.12 1.242.327l3.666-5.286c-.053-.292-.096-.583-.096-.889 0-2.607 2.113-4.72 4.72-4.72 2.607 0 4.72 2.113 4.72 4.72 0 2.606-2.113 4.72-4.72 4.72-.88 0-1.697-.243-2.408-.66l-2.696 3.886c.644 1.055.366 2.443-.655 3.149-.553.382-1.196.489-1.791.36l2.169-3.128c.504.288 1.157.172 1.545-.39.387-.56.242-1.332-.317-1.718l-3.328 4.798c.84.475 1.93.308 2.583-.635.653-.941.401-2.222-.522-2.859z" />
    </svg>
);

export default function Home() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".reveal-up");
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <main>
            {/* NAV */}
            <nav>
                <div className="container">
                    <div className="nav-inner">
                        <div
                            className="nav-logo"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Looksmax Academy.
                        </div>
                        <div
                            className="nav-menu"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            <a href="#academy">The Institution</a>
                            <a href="#programs">Programs</a>
                            <a href="#how-it-works">How It Works</a>
                            <a href="#faculty">Directing Partners</a>
                            <a href="#testimonials">Testimonials</a>
                            <a href="#faq">FAQ</a>
                            <a href="#contact">Apply</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ACADEMY HERO */}
            <section className="container hero" id="academy">
                <div className="hero-content">
                    <span
                        className="reveal-up"
                        style={{
                            display: "block",
                            fontSize: "0.8rem",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            marginBottom: "1.5rem",
                            fontFamily: "var(--font-sans)",
                            color: "var(--text-muted)",
                        }}
                    >
                        Est. 2024 &nbsp; | &nbsp; Miami, FL
                    </span>

                    <div className="hero-title-wrap">
                        <h1
                            className="display-text reveal-up"
                            style={{
                                fontFamily: "var(--font-display)",
                                transitionDelay: "0.1s",
                            }}
                        >
                            The Ivy League
                        </h1>
                    </div>
                    <div>
                        <div className="hero-title-wrap">
                            <h1
                                className="display-text reveal-up"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    fontStyle: "italic",
                                    color: "var(--text-muted)",
                                    transitionDelay: "0.2s",
                                }}
                            >
                                of
                            </h1>
                        </div>
                        <div className="hero-title-wrap">
                            <h1
                                className="display-text reveal-up"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    transitionDelay: "0.3s",
                                }}
                            >
                                Aesthetics
                            </h1>
                        </div>
                    </div>

                    <p
                        className="hero-sub reveal-up"
                        style={{
                            fontFamily: "var(--font-sans)",
                            transitionDelay: "0.4s",
                        }}
                    >
                        We do not sell hope. We sell strategy. <br />
                        The world's premier institution for facial analysis,
                        wardrobe calibration, and social dominance.
                    </p>

                    <div
                        className="reveal-up"
                        style={{ marginTop: "3rem", transitionDelay: "0.5s" }}
                    >
                        <a
                            href="#programs"
                            className="btn-luxury"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Explore Programs
                        </a>
                    </div>
                </div>
            </section>

            {/* TICKER */}
            <div className="ticker-wrap">
                <div
                    className="ticker"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    <div className="ticker-item">Looksmax Academy</div>
                    <div className="ticker-item">Physiognomy</div>
                    <div className="ticker-item">Status Signaling</div>
                    <div className="ticker-item">Style Theory</div>
                    <div className="ticker-item">Facial Analysis</div>
                    <div className="ticker-item">Wardrobe Calibration</div>
                    <div className="ticker-item">Looksmax Academy</div>
                    <div className="ticker-item">Physiognomy</div>
                    <div className="ticker-item">Status Signaling</div>
                </div>
            </div>

            {/* FACULTY SECTION — Intro / Directing Partners */}
            <section className="container faculty-section" id="faculty">
                <div className="faculty-header reveal-up">
                    <span
                        style={{
                            fontSize: "0.8rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            fontFamily: "var(--font-sans)",
                        }}
                    >
                        The Directors
                    </span>
                    <h2
                        style={{
                            fontSize: "3rem",
                            fontFamily: "var(--font-display)",
                            marginTop: "1rem",
                        }}
                    >
                        Principal Instructors.
                    </h2>
                </div>

                <div className="faculty-grid">
                    {/* INSTRUCTOR 1: BRADEN */}
                    <article className="instructor-card reveal-up">
                        <div className="instructor-img-wrapper">
                            <Image
                                src="/clav.jpg"
                                alt="Braden Peters"
                                fill
                                className="instructor-img"
                            />
                        </div>
                        <h3
                            className="instructor-name"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Braden Peters
                        </h3>
                        <span
                            className="instructor-title"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            "Clavicular" | Founder
                        </span>

                        <div className="social-row">
                            <a
                                href="https://www.instagram.com/clavicular0/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <InstagramIcon /> @clavicular0
                            </a>
                            <a
                                href="https://steamcommunity.com/id/Roman996/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <SteamIcon /> Steam
                            </a>
                        </div>

                        <div className="credential-list">
                            <div className="credential-item">
                                <span className="credential-year">Current</span>
                                <span className="credential-desc">
                                    Head of Structural Analysis
                                </span>
                            </div>
                            <div className="credential-item">
                                <span className="credential-year">2019</span>
                                <span className="credential-desc">
                                    B.S. Consumer Psychology, UF
                                </span>
                            </div>
                            <div className="credential-item">
                                <span className="credential-year">
                                    Expertise
                                </span>
                                <span className="credential-desc">
                                    Facial Aesthetics & Body Composition
                                </span>
                            </div>
                        </div>
                    </article>

                    {/* INSTRUCTOR 2: ADI */}
                    <article
                        className="instructor-card reveal-up"
                        style={{ transitionDelay: "0.2s" }}
                    >
                        <div className="instructor-img-wrapper">
                            <Image
                                src="/adi.jpg"
                                alt="Adi Xovic"
                                fill
                                className="instructor-img"
                            />
                        </div>
                        <h3
                            className="instructor-name"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Adi Xovic
                        </h3>
                        <span
                            className="instructor-title"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Co-Director | Social Strategy
                        </span>

                        <div className="social-row">
                            <a
                                href="https://www.instagram.com/adixovic/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <InstagramIcon /> @adixovic
                            </a>
                            <a
                                href="https://steamcommunity.com/profiles/76561198129744748/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <SteamIcon /> Steam
                            </a>
                        </div>

                        <div className="credential-list">
                            <div className="credential-item">
                                <span className="credential-year">Current</span>
                                <span className="credential-desc">
                                    Lead of Social Dynamics
                                </span>
                            </div>
                            <div className="credential-item">
                                <span className="credential-year">Focus</span>
                                <span className="credential-desc">
                                    High-Status Networking & Fashion Theory
                                </span>
                            </div>
                            <div className="credential-item">
                                <span className="credential-year">
                                    Expertise
                                </span>
                                <span className="credential-desc">
                                    Environment Curation & Signal Calibration
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="container section-block" id="programs">
                <div className="section-header reveal-up">
                    <span className="section-label" style={{ fontFamily: "var(--font-sans)" }}>
                        Curriculum
                    </span>
                    <h2 className="section-title" style={{ fontFamily: "var(--font-display)" }}>
                        Core Programs.
                    </h2>
                </div>
                <div className="programs-grid">
                    <article className="program-card reveal-up">
                        <span className="program-number" style={{ fontFamily: "var(--font-sans)" }}>01</span>
                        <h3 className="program-name" style={{ fontFamily: "var(--font-display)" }}>Facial Structural Analysis</h3>
                        <p className="program-desc" style={{ fontFamily: "var(--font-sans)" }}>
                            Evidence-based physiognomy and bone-structure assessment. Learn to identify harmony ratios, 
                            strengths, and optimization levers—not trends. Personalized reports and actionable calibration.
                        </p>
                    </article>
                    <article className="program-card reveal-up" style={{ transitionDelay: "0.1s" }}>
                        <span className="program-number" style={{ fontFamily: "var(--font-sans)" }}>02</span>
                        <h3 className="program-name" style={{ fontFamily: "var(--font-display)" }}>Wardrobe Calibration</h3>
                        <p className="program-desc" style={{ fontFamily: "var(--font-sans)" }}>
                            Style as signal. Build a capsule that matches your structure, context, and goals. 
                            Fit, color, and silhouette tailored to your analysis—no generic advice.
                        </p>
                    </article>
                    <article className="program-card reveal-up" style={{ transitionDelay: "0.2s" }}>
                        <span className="program-number" style={{ fontFamily: "var(--font-sans)" }}>03</span>
                        <h3 className="program-name" style={{ fontFamily: "var(--font-display)" }}>Social Dynamics & Status</h3>
                        <p className="program-desc" style={{ fontFamily: "var(--font-sans)" }}>
                            Environment curation, presence, and high-status signaling. Networking frameworks, 
                            venue selection, and behavioral calibration for real-world outcomes.
                        </p>
                    </article>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="container section-block section-alt" id="how-it-works">
                <div className="section-header reveal-up">
                    <span className="section-label" style={{ fontFamily: "var(--font-sans)" }}>
                        Process
                    </span>
                    <h2 className="section-title" style={{ fontFamily: "var(--font-display)" }}>
                        How It Works.
                    </h2>
                </div>
                <div className="steps-list">
                    <div className="step-item reveal-up">
                        <span className="step-num" style={{ fontFamily: "var(--font-display)" }}>1</span>
                        <div className="step-content">
                            <h4 className="step-title" style={{ fontFamily: "var(--font-display)" }}>Application</h4>
                            <p className="step-desc" style={{ fontFamily: "var(--font-sans)" }}>
                                Submit via the channel below. We review every application. No open enrollment—cohorts are small and by invitation.
                            </p>
                        </div>
                    </div>
                    <div className="step-item reveal-up" style={{ transitionDelay: "0.1s" }}>
                        <span className="step-num" style={{ fontFamily: "var(--font-display)" }}>2</span>
                        <div className="step-content">
                            <h4 className="step-title" style={{ fontFamily: "var(--font-display)" }}>Assessment</h4>
                            <p className="step-desc" style={{ fontFamily: "var(--font-sans)" }}>
                                Initial call to align goals and expectations. We assess fit; you assess us. No obligation.
                            </p>
                        </div>
                    </div>
                    <div className="step-item reveal-up" style={{ transitionDelay: "0.2s" }}>
                        <span className="step-num" style={{ fontFamily: "var(--font-display)" }}>3</span>
                        <div className="step-content">
                            <h4 className="step-title" style={{ fontFamily: "var(--font-display)" }}>Program</h4>
                            <p className="step-desc" style={{ fontFamily: "var(--font-sans)" }}>
                                Tailored curriculum: analysis, wardrobe, social. In-person sessions in Miami; remote components where applicable.
                            </p>
                        </div>
                    </div>
                    <div className="step-item reveal-up" style={{ transitionDelay: "0.3s" }}>
                        <span className="step-num" style={{ fontFamily: "var(--font-display)" }}>4</span>
                        <div className="step-content">
                            <h4 className="step-title" style={{ fontFamily: "var(--font-display)" }}>Ongoing</h4>
                            <p className="step-desc" style={{ fontFamily: "var(--font-sans)" }}>
                                Alumni access, check-ins, and refinement. We treat this as a long-term calibration, not a one-off.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="container section-block" id="testimonials">
                <div className="section-header reveal-up">
                    <span className="section-label" style={{ fontFamily: "var(--font-sans)" }}>
                        Outcomes
                    </span>
                    <h2 className="section-title" style={{ fontFamily: "var(--font-display)" }}>
                        What Graduates Say.
                    </h2>
                </div>
                <div className="testimonials-grid">
                    <blockquote className="testimonial-card reveal-up">
                        <p className="testimonial-text" style={{ fontFamily: "var(--font-sans)" }}>
                            &ldquo;Finally something that isn&apos;t fluff. The facial analysis gave me a clear map—what to lean into, what to downplay. My wardrobe and social approach changed completely.&rdquo;
                        </p>
                        <footer className="testimonial-meta" style={{ fontFamily: "var(--font-sans)" }}>
                            — M., Miami
                        </footer>
                    </blockquote>
                    <blockquote className="testimonial-card reveal-up" style={{ transitionDelay: "0.1s" }}>
                        <p className="testimonial-text" style={{ fontFamily: "var(--font-sans)" }}>
                            &ldquo;I thought I had good style. The calibration session showed me the gap between what I liked and what actually worked for my structure. Night and day.&rdquo;
                        </p>
                        <footer className="testimonial-meta" style={{ fontFamily: "var(--font-sans)" }}>
                            — J., New York
                        </footer>
                    </blockquote>
                    <blockquote className="testimonial-card reveal-up" style={{ transitionDelay: "0.2s" }}>
                        <p className="testimonial-text" style={{ fontFamily: "var(--font-sans)" }}>
                            &ldquo;The social dynamics module alone was worth it. I&apos;m more intentional about where I show up and how I carry myself. Results speak.&rdquo;
                        </p>
                        <footer className="testimonial-meta" style={{ fontFamily: "var(--font-sans)" }}>
                            — K., Los Angeles
                        </footer>
                    </blockquote>
                </div>
            </section>

            {/* ENROLLMENT TIERS */}
            <section className="container section-block section-alt" id="tiers">
                <div className="section-header reveal-up">
                    <span className="section-label" style={{ fontFamily: "var(--font-sans)" }}>
                        Enrollment
                    </span>
                    <h2 className="section-title" style={{ fontFamily: "var(--font-display)" }}>
                        Program Tiers.
                    </h2>
                </div>
                <div className="tiers-grid">
                    <article className="tier-card reveal-up">
                        <h3 className="tier-name" style={{ fontFamily: "var(--font-display)" }}>Foundation</h3>
                        <p className="tier-desc" style={{ fontFamily: "var(--font-sans)" }}>
                            Facial analysis + wardrobe fundamentals. Ideal for first-time calibration. Includes report and 2 in-person sessions.
                        </p>
                        <a href="#contact" className="btn-luxury btn-small" style={{ fontFamily: "var(--font-sans)" }}>Inquire</a>
                    </article>
                    <article className="tier-card tier-featured reveal-up" style={{ transitionDelay: "0.1s" }}>
                        <span className="tier-badge" style={{ fontFamily: "var(--font-sans)" }}>Most Popular</span>
                        <h3 className="tier-name" style={{ fontFamily: "var(--font-display)" }}>Intensive</h3>
                        <p className="tier-desc" style={{ fontFamily: "var(--font-sans)" }}>
                            Full curriculum: analysis, wardrobe, social dynamics. 6 sessions + ongoing support. Our standard offering.
                        </p>
                        <a href="#contact" className="btn-luxury btn-small" style={{ fontFamily: "var(--font-sans)" }}>Inquire</a>
                    </article>
                    <article className="tier-card reveal-up" style={{ transitionDelay: "0.2s" }}>
                        <h3 className="tier-name" style={{ fontFamily: "var(--font-display)" }}>Bespoke</h3>
                        <p className="tier-desc" style={{ fontFamily: "var(--font-sans)" }}>
                            Fully customized scope, timeline, and deliverables. For high-profile or multi-phase engagements.
                        </p>
                        <a href="#contact" className="btn-luxury btn-small" style={{ fontFamily: "var(--font-sans)" }}>Inquire</a>
                    </article>
                </div>
            </section>

            {/* FAQ */}
            <section className="container section-block" id="faq">
                <div className="section-header reveal-up">
                    <span className="section-label" style={{ fontFamily: "var(--font-sans)" }}>
                        Common Questions
                    </span>
                    <h2 className="section-title" style={{ fontFamily: "var(--font-display)" }}>
                        FAQ.
                    </h2>
                </div>
                <dl className="faq-list">
                    <div className="faq-item reveal-up">
                        <dt className="faq-q" style={{ fontFamily: "var(--font-display)" }}>Who is this for?</dt>
                        <dd className="faq-a" style={{ fontFamily: "var(--font-sans)" }}>
                            Professionals and high-achievers who want to optimize their presentation—facial, sartorial, and social—with a strategic, no-nonsense approach. We don&apos;t do generic advice.
                        </dd>
                    </div>
                    <div className="faq-item reveal-up" style={{ transitionDelay: "0.05s" }}>
                        <dt className="faq-q" style={{ fontFamily: "var(--font-display)" }}>Is everything in person?</dt>
                        <dd className="faq-a" style={{ fontFamily: "var(--font-sans)" }}>
                            Core sessions are in-person at our Miami Design District space. We offer remote components for analysis review and follow-ups where it makes sense.
                        </dd>
                    </div>
                    <div className="faq-item reveal-up" style={{ transitionDelay: "0.1s" }}>
                        <dt className="faq-q" style={{ fontFamily: "var(--font-display)" }}>How long does the program take?</dt>
                        <dd className="faq-a" style={{ fontFamily: "var(--font-sans)" }}>
                            Foundation: typically 2–3 weeks. Intensive: 6–8 weeks with sessions spaced for integration. Bespoke is timeline-flexible.
                        </dd>
                    </div>
                    <div className="faq-item reveal-up" style={{ transitionDelay: "0.15s" }}>
                        <dt className="faq-q" style={{ fontFamily: "var(--font-display)" }}>Do you work with women?</dt>
                        <dd className="faq-a" style={{ fontFamily: "var(--font-sans)" }}>
                            Yes. Our methodology applies across gender—structure, color, silhouette, and social signaling are universal. Calibration is individualized.
                        </dd>
                    </div>
                    <div className="faq-item reveal-up" style={{ transitionDelay: "0.2s" }}>
                        <dt className="faq-q" style={{ fontFamily: "var(--font-display)" }}>What&apos;s the investment?</dt>
                        <dd className="faq-a" style={{ fontFamily: "var(--font-sans)" }}>
                            Pricing is tier-based and communicated after your application. We don&apos;t publish rates; we match scope to goals in the assessment call.
                        </dd>
                    </div>
                </dl>
            </section>

            {/* FOOTER */}
            <footer id="contact">
                <div className="container">
                    <div className="footer-grid">
                        <div className="reveal-up">
                            <span
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.8rem",
                                    textTransform: "uppercase",
                                }}
                            >
                                Enrollment
                            </span>
                            <div style={{ marginTop: "2rem" }}>
                                <a
                                    href="mailto:admin@looksmaxacademy.com"
                                    className="contact-link"
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    DM "ACADEMY"
                                </a>
                            </div>
                            <p
                                style={{
                                    marginTop: "2rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Looksmax Academy
                                <br />
                                Miami Design District
                                <br />
                                By Application Only
                            </p>
                        </div>

                        <div
                            style={{ textAlign: "right", alignSelf: "end" }}
                            className="reveal-up"
                        >
                            <div className="footer-brand">
                                <h2
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    LOOKSMAX
                                    <br />
                                    ACADEMY.
                                </h2>
                            </div>
                            <div
                                style={{
                                    marginTop: "1rem",
                                    fontSize: "0.8rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-sans)",
                                }}
                            >
                                &copy; 2026 Looksmax Academy.
                                <br />
                                Designed with precision.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
