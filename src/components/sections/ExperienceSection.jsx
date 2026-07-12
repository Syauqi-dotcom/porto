import React from 'react';
import SectionLabel from '../atoms/SectionLabel';
import { ScrollReveal } from '../../utils/useScrollReveal';

// Load experience entries from content folder (managed by Decap CMS)
const experienceModules = import.meta.glob('../../content/experience/*.json', { eager: true });
const experiences = Object.values(experienceModules)
    .map(mod => mod.default || mod)
    .sort((a, b) => String(b.period).localeCompare(String(a.period)));

const ExperienceRow = ({ title, period, role, description, logo, index }) => (
    <ScrollReveal delay={0.1 * index} direction="up">
        <div className="grid md:grid-cols-[180px_1fr] gap-8 py-10 border-t border-[#16161D]/8 group">
            {/* Left: date */}
            <div className="pt-1">
                <span className="font-mono text-xs text-[#16161D]/40 tracking-wider">{period}</span>
            </div>

            {/* Right: content */}
            <div className="flex gap-5 items-start">
                {/* Logo */}
                {logo && (
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-[#16161D]/8 flex items-center justify-center overflow-hidden p-1.5 group-hover:border-[#A3785B]/30 transition-colors shadow-sm">
                        <img src={logo} alt={title} className="w-full h-full object-contain" />
                    </div>
                )}
                <div>
                    <h4 className="font-medium text-[#16161D] text-base mb-0.5 group-hover:text-[#A3785B] transition-colors">{title}</h4>
                    <p className="font-mono text-[11px] text-[#A3785B]/70 mb-3 tracking-wide">{role}</p>
                    <p className="text-[#16161D]/65 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    </ScrollReveal>
);

const ExperienceSection = () => (
    <section id="experience" className="py-32 border-t border-[#16161D]/5">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid md:grid-cols-[200px_1fr] gap-12 mb-4">
                <div className="pt-2">
                    <ScrollReveal delay={0}>
                        <SectionLabel index={2} label="Experience" />
                    </ScrollReveal>
                </div>
                <div>
                    <ScrollReveal delay={0.15} direction="up">
                        <h2 className="font-serif text-4xl md:text-5xl text-[#16161D] leading-tight">
                            Building skills,{' '}
                            <span className="italic" style={{ color: '#A3785B' }}>not just code.</span>
                        </h2>
                    </ScrollReveal>
                </div>
            </div>

            {/* Experience rows */}
            <div className="mt-8">
                {experiences.map((exp, idx) => (
                    <ExperienceRow key={idx} {...exp} index={idx} />
                ))}
                {/* Final border */}
                <div className="border-t border-[#16161D]/8" />
            </div>
        </div>
    </section>
);

export default ExperienceSection;
