import { useState, useEffect, useRef } from "react";

const SupportIQLanding = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const sectionStyle = (id) => ({
    opacity: visibleSections.has(id) ? 1 : 0,
    transform: visibleSections.has(id) ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "'DM Sans', 'Helvetica Neue', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Mono:wght@400;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.15); }
          50% { box-shadow: 0 0 40px rgba(99,102,241,0.3); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes typing {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 40px rgba(99,102,241,0.4) !important;
        }

        .feature-card:hover {
          border-color: rgba(99,102,241,0.4) !important;
          transform: translateY(-4px) !important;
          background: rgba(99,102,241,0.06) !important;
        }

        .stat-card:hover {
          border-color: rgba(16,185,129,0.4) !important;
        }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "16px 32px",
          background: "rgba(9,9,11,0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            SupportIQ
          </span>
        </div>
        <a
          href="#waitlist"
          className="cta-btn"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            transition: "all 0.3s ease",
            border: "none",
            cursor: "pointer",
          }}
        >
          Rejoindre la bêta
        </a>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "800px", textAlign: "center", position: "relative" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "100px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              marginBottom: "32px",
              fontSize: "13px",
              color: "#a5b4fc",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                animation: "pulse-glow 2s infinite",
              }}
            />
            Bêta ouverte — Places limitées
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "24px",
            }}
          >
            Votre support client
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #a78bfa, #10b981)",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 4s ease infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              propulsé par l'IA
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 20px)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            SupportIQ résout automatiquement{" "}
            <strong style={{ color: "#a5b4fc" }}>70% des tickets</strong> de
            votre boutique Shopify. Suivi de commande, retours, FAQ — votre
            agent IA ne dort jamais.
          </p>

          {/* Chat preview mockup */}
          <div
            style={{
              maxWidth: "480px",
              margin: "0 auto 48px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
              textAlign: "left",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", fontFamily: "'Space Mono', monospace" }}>
                SupportIQ — En ligne
              </span>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.06)",
                borderRadius: "14px 14px 14px 4px",
                padding: "14px 18px",
                marginBottom: "12px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.5,
              }}
            >
              Où en est ma commande #4892 ? Ça fait 5 jours...
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                border: "1px solid rgba(99,102,241,0.15)",
                borderRadius: "14px 14px 4px 14px",
                padding: "14px 18px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
              }}
            >
              Bonjour ! 👋 Votre commande <strong>#4892</strong> est en
              transit via Colissimo. Elle sera livrée{" "}
              <strong style={{ color: "#a5b4fc" }}>demain avant 18h</strong>.
              Voici votre{" "}
              <span
                style={{
                  color: "#6366f1",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                lien de suivi
              </span>
              .
            </div>
          </div>

          <a
            href="#waitlist"
            className="cta-btn"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              padding: "18px 48px",
              borderRadius: "14px",
              textDecoration: "none",
              fontSize: "17px",
              fontWeight: 600,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Accéder à la bêta gratuite →
          </a>
        </div>
      </section>

      {/* STATS */}
      <section
        id="stats"
        ref={(el) => (sectionRefs.current["stats"] = el)}
        style={{
          padding: "80px 24px",
          ...sectionStyle("stats"),
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { value: "70%", label: "Tickets résolus automatiquement", color: "#6366f1" },
            { value: "24/7", label: "Disponible sans interruption", color: "#10b981" },
            { value: "< 3s", label: "Temps de réponse moyen", color: "#f59e0b" },
            { value: "-60%", label: "Coûts de support réduits", color: "#ec4899" },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: stat.color,
                  fontFamily: "'Space Mono', monospace",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        ref={(el) => (sectionRefs.current["features"] = el)}
        style={{
          padding: "80px 24px",
          ...sectionStyle("features"),
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Tout ce que votre support devrait faire.
            <br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Sans recruter personne.</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.4)",
              fontSize: "16px",
              marginBottom: "56px",
              maxWidth: "500px",
              margin: "0 auto 56px",
            }}
          >
            SupportIQ s'intègre à votre boutique Shopify en 5 minutes et commence à répondre immédiatement.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: "📦",
                title: "Suivi de commande intelligent",
                desc: "Connecté à vos transporteurs en temps réel. Répond instantanément aux questions de livraison.",
              },
              {
                icon: "↩️",
                title: "Gestion des retours automatisée",
                desc: "Génère les étiquettes retour, vérifie l'éligibilité et lance le remboursement automatiquement.",
              },
              {
                icon: "🧠",
                title: "Apprend votre catalogue",
                desc: "Recommande des produits, répond aux questions techniques et connaît vos stocks en temps réel.",
              },
              {
                icon: "🌍",
                title: "Multilingue natif",
                desc: "Répond dans la langue de votre client. Français, anglais, espagnol, allemand et 20+ langues.",
              },
              {
                icon: "🔀",
                title: "Escalade intelligente",
                desc: "Détecte les cas complexes et transfère au bon agent humain avec tout le contexte.",
              },
              {
                icon: "📊",
                title: "Analytics & insights",
                desc: "Dashboard en temps réel : satisfaction client, sujets récurrents, opportunités d'amélioration.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{f.icon}</div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "#fafafa",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        ref={(el) => (sectionRefs.current["how"] = el)}
        style={{
          padding: "80px 24px",
          ...sectionStyle("how"),
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "56px",
              letterSpacing: "-1px",
            }}
          >
            Opérationnel en{" "}
            <span style={{ color: "#10b981" }}>5 minutes</span>
          </h2>

          {[
            {
              step: "01",
              title: "Connectez votre boutique Shopify",
              desc: "Un clic. SupportIQ accède à vos commandes, produits et clients automatiquement.",
            },
            {
              step: "02",
              title: "L'IA apprend votre business",
              desc: "SupportIQ analyse votre catalogue, vos FAQ existantes et vos politiques de retour.",
            },
            {
              step: "03",
              title: "Activez et observez",
              desc: "L'agent commence à répondre. Vous gardez le contrôle total et ajustez en temps réel.",
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                marginBottom: "40px",
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#6366f1",
                  lineHeight: 1,
                  minWidth: "50px",
                }}
              >
                {s.step}
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "6px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section
        id="pricing"
        ref={(el) => (sectionRefs.current["pricing"] = el)}
        style={{
          padding: "80px 24px",
          ...sectionStyle("pricing"),
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Un prix simple.{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Un ROI immédiat.</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "48px",
              fontSize: "16px",
            }}
          >
            Bêta gratuite pour les premiers inscrits. Pricing final au lancement.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                name: "Starter",
                price: "49",
                features: ["500 tickets/mois", "1 boutique Shopify", "Support email", "Réponses multilingues"],
                highlight: false,
              },
              {
                name: "Growth",
                price: "149",
                features: [
                  "2 000 tickets/mois",
                  "3 boutiques Shopify",
                  "Analytics avancés",
                  "Escalade intelligente",
                  "Support prioritaire",
                ],
                highlight: true,
              },
              {
                name: "Pro",
                price: "399",
                features: [
                  "Tickets illimités",
                  "Boutiques illimitées",
                  "API personnalisée",
                  "Agent dédié",
                  "SLA garanti",
                ],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))"
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${plan.highlight ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: "20px",
                  padding: "36px 28px",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 16px",
                      borderRadius: "100px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    POPULAIRE
                  </div>
                )}
                <div style={{ fontSize: "18px", fontWeight: 600, marginBottom: "4px" }}>
                  {plan.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: 700,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {plan.price}€
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px" }}>/mois</span>
                </div>
                {plan.features.map((f, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px 0",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <span style={{ color: "#10b981", fontSize: "16px" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section
        id="waitlist"
        ref={(el) => (sectionRefs.current["waitlist"] = el)}
        style={{
          padding: "100px 24px",
          ...sectionStyle("waitlist"),
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))",
            border: "1px solid rgba(99,102,241,0.15)",
            borderRadius: "24px",
            padding: "56px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.5px",
            }}
          >
            {submitted ? "Vous êtes sur la liste ! 🎉" : "Rejoignez la bêta gratuite"}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "16px",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}
          >
            {submitted
              ? "On vous contacte très vite avec votre accès. Préparez votre boutique Shopify !"
              : "Les 50 premiers inscrits bénéficient d'un accès gratuit pendant 3 mois. Sans engagement."}
          </p>

          {!submitted && (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "10px",
                maxWidth: "420px",
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: "1 1 240px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fafafa",
                  fontSize: "15px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                className="cta-btn"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Rejoindre →
              </button>
            </form>
          )}

          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "12px",
              marginTop: "16px",
            }}
          >
            Pas de spam. Désabonnement en un clic.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "12px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            S
          </div>
          <span style={{ fontSize: "16px", fontWeight: 600 }}>SupportIQ</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>
          © 2026 SupportIQ. L'IA qui transforme votre support client.
        </p>
      </footer>
    </div>
  );
};

export default SupportIQLanding;
