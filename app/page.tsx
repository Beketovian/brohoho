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
                            <a href="#faculty">Directing Partners</a>
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
                            href="#faculty"
                            className="btn-luxury"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            View Faculty
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
                    <div className="ticker-item">Looksmax Academy</div>
                    <div className="ticker-item">Physiognomy</div>
                    <div className="ticker-item">Status Signaling</div>
                </div>
            </div>

            {/* FACULTY SECTION (Dual Profiles) */}
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
                                src="https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/486467173_3918756718366696_774277866248192013_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHsozfDvnh_keLsV9opNGT2FZV3QgG0oxJFIN2FtR08-Q3jjFAqFMFXR48uGI8sKbpKI37iYygUoG5nu-ro1JKl&_nc_ohc=mkR2m1yimS4Q7kNvwHZt8xb&_nc_gid=6Wktp07RRDddrt6tu26cwQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afo7wWVmrgVdAFn4enquI8c3N3p5TN_I5y-S7WEyWG2YKw&oe=69627FEC&_nc_sid=7a9f4b"
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

                        {/* SOCIALS */}
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
                                src="https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/434408812_1469256884007487_1037682563705470748_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QEXR-k_fYB9KzYB4d1Ri2IdSuADD7QJvTM8bTDEUpP3ZA4nxkFezlCPJKQIVun3NFaVWEnFzqvR1qLbkMMBlHen&_nc_ohc=39ypAPFR3x0Q7kNvwEwVDKb&_nc_gid=-Zuq0IGzhzjOZ3cfhmcDAQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfrTXBZlTSUnpR0EK27-MccnMu0y_fezvkkE6oK_wWAi3Q&oe=69629F91&_nc_sid=7a9f4b"
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

                        {/* SOCIALS */}
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
