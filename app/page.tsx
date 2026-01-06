"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
    // Define the type for the ref to satisfy TypeScript
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Handle Scroll Reveal Animation
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
                            Braden Peters.
                        </div>
                        <div
                            className="nav-menu"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            <a href="#about">The Methodology</a>
                            <a href="#experience">Curriculum Vitae</a>
                            <a href="#contact">Inquire</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="container hero" id="about">
                <div className="hero-text">
                    <span
                        className="eyebrow reveal-up"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        Miami, FL
                    </span>

                    <div className="hero-title-wrap">
                        <h1
                            className="display-text reveal-up"
                            style={{
                                fontFamily: "var(--font-display)",
                                transitionDelay: "0.1s",
                            }}
                        >
                            The Architect
                        </h1>
                    </div>
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
                            of your
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
                            Identity
                        </h1>
                    </div>

                    <div
                        className="hero-tags reveal-up"
                        style={{
                            transitionDelay: "0.5s",
                            fontFamily: "var(--font-sans)",
                        }}
                    >
                        <div className="tag-item">
                            <span>✦</span> Aesthetic Calibration
                        </div>
                        <div className="tag-item">
                            <span>✦</span> Status Strategy
                        </div>
                        <div className="tag-item">
                            <span>✦</span> Looksmaxing
                        </div>
                    </div>

                    <div
                        className="reveal-up"
                        style={{ marginTop: "4rem", transitionDelay: "0.6s" }}
                    >
                        <a
                            href="#contact"
                            className="btn-luxury"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Start Transformation
                        </a>
                    </div>
                </div>

                <div
                    className="hero-img-container reveal-up"
                    style={{ transitionDelay: "0.4s" }}
                >
                    <div className="hero-img-wrapper">
                        <Image
                            src="https://scontent-hou1-1.cdninstagram.com/v/t51.2885-19/486467173_3918756718366696_774277866248192013_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-hou1-1.cdninstagram.com&_nc_cat=1&_nc_oc=Q6cZ2QHsozfDvnh_keLsV9opNGT2FZV3QgG0oxJFIN2FtR08-Q3jjFAqFMFXR48uGI8sKbpKI37iYygUoG5nu-ro1JKl&_nc_ohc=mkR2m1yimS4Q7kNvwHZt8xb&_nc_gid=6Wktp07RRDddrt6tu26cwQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afo7wWVmrgVdAFn4enquI8c3N3p5TN_I5y-S7WEyWG2YKw&oe=69627FEC&_nc_sid=7a9f4b"
                            alt="Braden Peters Clavicular"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>

                    <div className="hero-float">
                        <span
                            className="eyebrow"
                            style={{
                                color: "var(--text-main)",
                                fontFamily: "var(--font-sans)",
                            }}
                        >
                            Current Status
                        </span>
                        <h4
                            style={{
                                margin: "0.5rem 0",
                                fontSize: "1.2rem",
                                fontFamily: "var(--font-display)",
                            }}
                        >
                            Accepting Select Clients
                        </h4>
                        <p
                            style={{
                                fontSize: "0.85rem",
                                color: "var(--text-muted)",
                                marginTop: "0.5rem",
                                fontFamily: "var(--font-sans)",
                            }}
                        >
                            Waitlist is currently open for Q3 2025. DM
                            &quot;COACH&quot; for expedited review.
                        </p>
                    </div>
                </div>
            </section>

            {/* TICKER */}
            <div className="ticker-wrap">
                <div
                    className="ticker"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    <div className="ticker-item">Clavicular Consulting</div>
                    <div className="ticker-item">Aesthetic Strategy</div>
                    <div className="ticker-item">Personal Branding</div>
                    <div className="ticker-item">Clavicular Consulting</div>
                    <div className="ticker-item">Aesthetic Strategy</div>
                    <div className="ticker-item">Personal Branding</div>
                </div>
            </div>

            {/* EXPERIENCE */}
            <section className="container resume-section" id="experience">
                <div className="resume-grid">
                    <div className="sticky-col reveal-up">
                        <span
                            className="eyebrow"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Professional History
                        </span>
                        <h2
                            style={{
                                fontSize: "3rem",
                                lineHeight: "1.1",
                                marginTop: "1rem",
                                fontFamily: "var(--font-display)",
                            }}
                        >
                            Curriculum
                            <br />
                            Vitae.
                        </h2>
                        <p
                            style={{
                                marginTop: "2rem",
                                color: "var(--text-muted)",
                                fontSize: "0.9rem",
                                fontFamily: "var(--font-sans)",
                            }}
                        >
                            A track record of elevating personal brands and
                            corporate identities through visual precision and
                            psychological strategy.
                        </p>
                    </div>

                    <div className="resume-list">
                        <article className="resume-entry reveal-up">
                            <div
                                className="resume-date"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                2023 — Present
                            </div>
                            <div className="resume-content">
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    Clavicular.
                                </h3>
                                <h4 style={{ fontFamily: "var(--font-sans)" }}>
                                    Founder & Principal Consultant
                                </h4>
                                <p style={{ fontFamily: "var(--font-sans)" }}>
                                    Orchestrating comprehensive aesthetic
                                    overhauls for high-net-worth individuals.
                                    Specializing in wardrobe curation, physical
                                    presence optimization, and social signaling
                                    strategies in the Miami market.
                                </p>
                            </div>
                        </article>

                        <article className="resume-entry reveal-up">
                            <div
                                className="resume-date"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                2021 — 2023
                            </div>
                            <div className="resume-content">
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    Luxe Lifestyle Group
                                </h3>
                                <h4 style={{ fontFamily: "var(--font-sans)" }}>
                                    Brand Manager
                                </h4>
                                <p style={{ fontFamily: "var(--font-sans)" }}>
                                    Directed visual identity for a portfolio of
                                    luxury hospitality brands. Managed a $200k
                                    quarterly budget for influencer partnerships
                                    and high-production editorial campaigns.
                                </p>
                            </div>
                        </article>

                        <article className="resume-entry reveal-up">
                            <div
                                className="resume-date"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                2019 — 2021
                            </div>
                            <div className="resume-content">
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    Growth Media Inc.
                                </h3>
                                <h4 style={{ fontFamily: "var(--font-sans)" }}>
                                    Digital Strategist
                                </h4>
                                <p style={{ fontFamily: "var(--font-sans)" }}>
                                    Leveraged data analytics to optimize user
                                    acquisition funnels. Mastered the
                                    intersection of algorithmic reach and human
                                    psychology.
                                </p>
                            </div>
                        </article>

                        <article
                            className="resume-entry reveal-up"
                            style={{
                                borderTop: "1px solid var(--line-color)",
                                paddingTop: "3rem",
                            }}
                        >
                            <div
                                className="resume-date"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                Education
                            </div>
                            <div className="resume-content">
                                <h3
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    University of Florida
                                </h3>
                                <h4 style={{ fontFamily: "var(--font-sans)" }}>
                                    B.S. Marketing & Consumer Psychology
                                </h4>
                                <p style={{ fontFamily: "var(--font-sans)" }}>
                                    Graduated 2019. Focus on Behavioral
                                    Economics.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="contact">
                <div className="container">
                    <div className="footer-grid">
                        <div className="reveal-up">
                            <span
                                className="eyebrow"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                Contact
                            </span>
                            <div style={{ marginTop: "2rem" }}>
                                <a
                                    href="mailto:braden@clavicular.com"
                                    className="contact-link"
                                    style={{
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    DM &quot;COACH&quot;
                                </a>
                            </div>
                            <p
                                style={{
                                    marginTop: "2rem",
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-sans)",
                                }}
                            >
                                Miami, Florida
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
                                    CLAVICULAR.
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
                                &copy; 2025 Braden Peters.
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
