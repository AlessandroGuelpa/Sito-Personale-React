/* eslint jsx-a11y/no-noninteractive-tabindex: ["error", { "roles": ["region"] }] */
// Scrollable code regions need keyboard focus.
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaHeadphones,
  FaSoundcloud,
} from "react-icons/fa";

import { siteConfig } from "@/config/site";
import { SITE_URL, SITE_NAME } from "@/utils/seo";
import "@/styles/vehrt.css";

// Keep the existing catalogue until the new SoundCloud handle is confirmed.
const SOUNDCLOUD_PROFILE_URL = "https://soundcloud.com/vehrtaudio";
const soundcloudPlayerSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  SOUNDCLOUD_PROFILE_URL,
)}&color=%23A32937&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false`;

const SONIC_PI_EXAMPLE = `use_bpm 160

live_loop :kick do
  sample :bd_haus, amp: 1.5
  sleep 1
end

live_loop :hats, sync: :kick do
  sleep 0.5
  sample :drum_cymbal_closed, amp: 0.35
  sleep 0.5
end

live_loop :pulse, sync: :kick do
  use_synth :tb303
  play (ring :e2, :e2, :g2, :e2).tick,
    release: 0.12, cutoff: 78,
    res: 0.8, amp: 0.4
  sleep 0.5
end`;

function Equalizer() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="vehrt-equalizer">
      {[0.45, 0.8, 0.6, 1, 0.35, 0.7, 0.5].map((height, index) => (
        <motion.span
          key={index}
          animate={
            reducedMotion
              ? undefined
              : { scaleY: [height, 1, 0.3, 0.75, height] }
          }
          style={{ scaleY: height }}
          transition={{
            duration: 1.5 + index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function VehrtPage() {
  const { hash } = useLocation();
  const pageUrl = `${SITE_URL}/vehrt`;
  const pageTitle = `VEHRT — Techno & Live Coding | ${SITE_NAME}`;
  const pageDescription =
    "VEHRT is a techno project combining live coding in Sonic Pi and production in Ableton. Listen to the music and get in touch for collaborations.";
  const shareImage = `${SITE_URL}/vehrt/og-image.png`;

  useEffect(() => {
    // HTTP redirects preserve old fragments such as /dj-qbit#ascolta.
    const sectionId = hash === "#ascolta" ? "listen" : hash.slice(1);

    if (sectionId) document.getElementById(sectionId)?.scrollIntoView();
  }, [hash]);

  return (
    <div className="vehrt-page" lang="en">
      <Helmet>
        <html data-vehrt="true" lang="en" />
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />
        <link href={pageUrl} rel="canonical" />
        <meta content="website" property="og:type" />
        <meta content="en_US" property="og:locale" />
        <meta content={pageUrl} property="og:url" />
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={shareImage} property="og:image" />
        <meta
          content="VEHRT wordmark in white and dark red on black"
          property="og:image:alt"
        />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={pageTitle} name="twitter:title" />
        <meta content={pageDescription} name="twitter:description" />
        <meta content={shareImage} name="twitter:image" />
        <meta
          content="VEHRT wordmark in white and dark red on black"
          name="twitter:image:alt"
        />
      </Helmet>

      <a className="vehrt-skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="vehrt-header">
        <div className="vehrt-container vehrt-header-inner">
          <a
            aria-label="VEHRT — back to top"
            className="vehrt-brand"
            href="#vehrt-top"
          >
            <img alt="" height="48" src="/vehrt/monogram.svg" width="48" />
            <span>VEHRT</span>
          </a>
          <nav aria-label="Main navigation" className="vehrt-nav">
            <a href="#listen">Listen</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <Link className="vehrt-portfolio-link" to="/">
            Portfolio <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <main id="main-content">
        <section
          aria-labelledby="vehrt-title"
          className="vehrt-hero"
          id="vehrt-top"
        >
          <div aria-hidden="true" className="vehrt-fracture" />
          <div className="vehrt-container vehrt-hero-inner">
            <div className="vehrt-hero-meta">
              <p className="vehrt-eyebrow">
                <span aria-hidden="true" />
                Techno / Live coding
              </p>
              <Equalizer />
            </div>
            <h1 id="vehrt-title">
              <span className="sr-only">VEHRT</span>
              <img
                alt=""
                className="vehrt-wordmark"
                height="244"
                src="/vehrt/wordmark.svg"
                width="986"
              />
            </h1>
            <div className="vehrt-hero-bottom">
              <p className="vehrt-intro">
                A techno project built with live coding in Sonic Pi and
                production in Ableton.
              </p>
              <div className="vehrt-actions">
                <a className="vehrt-button vehrt-button-primary" href="#listen">
                  <FaHeadphones aria-hidden="true" /> Listen now
                </a>
                <a
                  className="vehrt-text-link"
                  href={SOUNDCLOUD_PROFILE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SoundCloud <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div aria-hidden="true" className="vehrt-hero-index">
              <span>Sound / Code / Production</span>
              <span>Scroll to explore ↓</span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="listen-title"
          className="vehrt-container vehrt-section"
          id="listen"
        >
          <div className="vehrt-section-heading">
            <p className="vehrt-eyebrow">01 / Listen</p>
            <h2 id="listen-title">The music.</h2>
            <p>Tracks and mixes from the SoundCloud catalogue.</p>
          </div>
          <div className="vehrt-player">
            <div className="vehrt-player-heading">
              <span>
                <FaSoundcloud aria-hidden="true" /> SoundCloud
              </span>
              <span>VEHRT</span>
            </div>
            <iframe
              allow="autoplay"
              className="vehrt-soundcloud-frame"
              height="450"
              loading="lazy"
              src={soundcloudPlayerSrc}
              title="VEHRT music — existing SoundCloud catalogue"
              width="100%"
            />
          </div>
          <div className="vehrt-player-footer">
            <p>
              The catalogue stays on the existing profile during the name
              change.
            </p>
            <a
              className="vehrt-text-link"
              href={SOUNDCLOUD_PROFILE_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open on SoundCloud <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="process-title"
          className="vehrt-container vehrt-section"
          id="process"
        >
          <div className="vehrt-section-heading">
            <p className="vehrt-eyebrow">02 / Process</p>
            <h2 id="process-title">Inside the process.</h2>
            <p>Two tools. One musical project.</p>
          </div>
          <div className="vehrt-process-grid">
            <div className="vehrt-process-copy">
              <article>
                <p className="vehrt-tool-label">Live coding</p>
                <h3>Sonic Pi</h3>
                <p>
                  Rhythms, synths and effects written in code. Loops can be
                  changed while the music plays, building a set one layer at a
                  time.
                </p>
                <div
                  aria-label="Sonic Pi building blocks"
                  className="vehrt-code-tags"
                >
                  <code>live_loop</code>
                  <code>sample</code>
                  <code>with_fx</code>
                </div>
                <a
                  className="vehrt-text-link"
                  href="https://sonic-pi.net"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Explore Sonic Pi <span aria-hidden="true">↗</span>
                </a>
              </article>
              <article>
                <p className="vehrt-tool-label">Production</p>
                <h3>Ableton</h3>
                <p>
                  Sound design, arrangement and production alongside live
                  coding. A different way to work with the same material:
                  rhythm, texture and movement.
                </p>
              </article>
            </div>
            <div className="vehrt-code-panel">
              <div className="vehrt-code-heading">
                <span>
                  <FaCode aria-hidden="true" /> live_set.rb
                </span>
                <span>160 BPM</span>
              </div>
              <pre
                aria-label="Sonic Pi code example"
                role="region"
                tabIndex={0}
              >
                <code>{SONIC_PI_EXAMPLE}</code>
              </pre>
              <p className="vehrt-code-caption">
                A Sonic Pi sketch. The code is part of the instrument.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="vehrt-container vehrt-section vehrt-contact"
          id="contact"
        >
          <img
            alt=""
            className="vehrt-contact-mark"
            height="1024"
            loading="lazy"
            src="/vehrt/monogram.svg"
            width="1024"
          />
          <div className="vehrt-contact-copy">
            <p className="vehrt-eyebrow">03 / Contact</p>
            <h2 id="contact-title">
              Booking &amp;
              <br />
              collaborations.
            </h2>
            <p>For booking enquiries and collaborations, get in touch.</p>
            <a
              className="vehrt-button vehrt-button-primary"
              href={siteConfig.links.email}
            >
              Get in touch <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="vehrt-footer">
        <div className="vehrt-container vehrt-footer-inner">
          <p>© {new Date().getFullYear()} VEHRT</p>
          <p>Techno / Live coding / Production</p>
          <Link className="vehrt-text-link" to="/">
            Alessandro Guelpa <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
