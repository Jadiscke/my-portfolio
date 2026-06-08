"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { siteConfig } from "@/config";

function ParticleBackground() {
  const [particles, setParticles] = useState<
    { x: number; y: number; opacity: number; translateY: number; animateOpacity: number; duration: number; left: string; top: string }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 8 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3,
        translateY: Math.random() * 50 - 25,
        animateOpacity: Math.random() * 0.5,
        duration: Math.random() * 10 + 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-dracula-purple/40 rounded-full"
          initial={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, p.translateY],
            opacity: [p.opacity, p.animateOpacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: p.left,
            top: p.top,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-dracula-bg to-dracula-bg-darker">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-dracula-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dracula-pink/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dracula-orange/5 rounded-full blur-3xl" />

      {/* Animated particles - client only to avoid hydration mismatch */}
      <ParticleBackground />

      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Badge variant="purple">Full Stack Developer</Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="heading mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-dracula-fg-muted mb-8 max-w-2xl mx-auto"
          >
            An Industrial Engineer turned Full Stack Developer. I build web
            applications, database engines, and tools that solve real problems. Open
            source contributor based in {siteConfig.location}.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="primary" size="lg" asChild>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          {/* Skills showcase */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-dracula-fg-muted mb-12"
          >
            <span>Built with</span>
            <Badge variant="purple">TypeScript</Badge>
            <Badge variant="pink">Next.js</Badge>
            <Badge variant="orange">Go</Badge>
            <Badge variant="blue">Tailwind CSS</Badge>
            <Badge variant="yellow">React</Badge>
          </motion.div>

          {/* Decorative code snippet */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="code-block">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-dracula-red" />
                <div className="w-3 h-3 rounded-full bg-dracula-yellow" />
                <div className="w-3 h-3 rounded-full bg-dracula-green" />
              </div>
              <pre className="text-dracula-fg text-xs overflow-x-auto">
                <code>
                  <span className="code-keyword">package</span> <span className="code-variable">main</span>{"\n\n"}
                  <span className="code-keyword">import</span> (<span className="code-string">"fmt"</span>){"\n\n"}
                  <span className="code-keyword">func</span> <span className="code-function">main</span>() {"{"}{"\n"}
                  <span className="code-keyword">    </span>db := engine.<span className="code-function">New</span>(){"\n"}
                  <span className="code-keyword">    </span>db.<span className="code-function">Execute</span>(<span className="code-string">"SELECT * FROM users"</span>){"\n"}
                  <span className="code-keyword">    </span><span className="code-keyword">defer</span> db.<span className="code-function">Close</span>(){"\n"}
                  <span className="code-keyword">    </span>fmt.<span className="code-function">Println</span>(<span className="code-string">"Database engine running"</span>){"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-dracula-fg-muted uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-dracula-purple/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-dracula-purple rounded-full animate-scroll" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
