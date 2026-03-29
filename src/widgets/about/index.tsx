import { useMemo } from "react"

import aboutImage from "../../assets/img/About-Img.jpeg"
import { useLanguage } from "../../i18n/useLanguage"
import { BrandInlineText } from "../../shared/brand-typography"
import { Button } from "../../shared/button"
import { STAGGER_STEP_S } from "../../shared/motion/reveal"
import { ScrollReveal } from "../../shared/scroll-reveal"
import "./style.css"

export const About = () => {
    const { t } = useLanguage()

    const services = useMemo(
        () => [
            { title: "100+", description: t("about.stat1") },
            { title: "1000+", description: t("about.stat2") },
            { title: "100+", description: t("about.stat3") },
            { title: "5+", description: t("about.stat4") },
        ],
        [t],
    )
    return (
        <section className="about" id="about">
            <div className="container">
                <ScrollReveal>
                    <h2 className="about-title">{t("about.sectionTitle")}</h2>
                </ScrollReveal>
                <div className="about-content">
                    <ScrollReveal className="about-description" direction="right">
                        <h3 className="about-subtitle">{t("about.subtitle")}</h3>
                        <p className="about-text">
                            <BrandInlineText text={t("about.description")} />
                        </p>
                        <Button className="about-button">{t("about.learnMore")}</Button>
                    </ScrollReveal>
                    <ScrollReveal className="about-image" direction="left">
                        <figure className="about-image__figure">
                            <img
                                src={aboutImage}
                                alt={t("about.imageAlt")}
                            />
                            <figcaption className="about-image__caption">
                                <BrandInlineText text={t("about.imageCaption")} />
                            </figcaption>
                        </figure>
                    </ScrollReveal>
                </div>
                <div className="about-services">
                    <ScrollReveal>
                        <h5 className="about-services-title">{t("about.statsTitle")}</h5>
                    </ScrollReveal>
                    <div className="about-services-content">
                        {services.map((service, index) => (
                            <ScrollReveal
                                key={service.description}
                                className="about-services-content__item"
                                delay={index * STAGGER_STEP_S}
                            >
                                <p className="about-services-content__item-title">{service.title}</p>
                                <span className="about-services-content__item-description">
                                    {service.description}
                                </span>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
