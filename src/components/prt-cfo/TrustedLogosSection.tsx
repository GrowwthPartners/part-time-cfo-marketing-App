import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import appboxo from '../../assets/logos/appboxo.webp'
import dataLeap from '../../assets/logos/Data-leap-client.webp'
import ebility from '../../assets/logos/ebility.webp'
import greenA from '../../assets/logos/GreenA.webp'
import hybrid from '../../assets/logos/hybrid.webp'
import juvoxa from '../../assets/logos/juvoxa.webp'
import kayaFounders from '../../assets/logos/kaya-founders.webp'
import manaClient from '../../assets/logos/Mana-client.webp'
import mangtas from '../../assets/logos/mangtas.webp'
import okeyReply from '../../assets/logos/okeyReply.webp'
import ronpos from '../../assets/logos/ronpos.webp'
import tigerhall from '../../assets/logos/tigerhall.webp'
import treeDots from '../../assets/logos/TreeDots-client.webp'

const logos = [
  dataLeap,
  appboxo,
  ebility,
  greenA,
  hybrid,
  manaClient,
  juvoxa,
  kayaFounders,
  mangtas,
  treeDots,
  okeyReply,
  ronpos,
  tigerhall,
]

export default function TrustedLogosSection() {
  const reduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  const logoList = useMemo(
    () => (reduceMotion ? logos : [...logos, ...logos]),
    [reduceMotion],
  )

  return (
    <section className="relative left-1/2 mt-14 w-screen -translate-x-1/2 border-y border-[rgba(138,109,0,0.14)] bg-[radial-gradient(circle_at_12%_12%,rgba(255,204,51,0.22),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fffbea_48%,#fff3c4_100%)] py-16">
      <div className="overflow-hidden px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--pcfo-accent-700)]">
            Trusted by operators
          </p>
          <h3 className="mt-3 text-2xl font-black leading-tight tracking-normal text-[var(--pcfo-text)] sm:text-3xl">
            Trusted by 200+ startups and businesses around the world
          </h3>
          <p className="mt-4 text-base font-semibold leading-7 text-[var(--pcfo-muted)] sm:text-lg">
            Curious to learn more? Book a free call with our expert to discuss your
            business needs and save time and effort.
          </p>
        </motion.div>

        {isMobile === true && (
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
            {logos.slice(0, 6).map((logo, index) => (
              <div
                key={`${index}-${logo}`}
                className="flex h-20 items-center justify-center rounded-2xl border border-[rgba(138,109,0,0.12)] bg-[radial-gradient(circle_at_12%_12%,rgba(255,204,51,0.22),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fffbea_48%,#fff3c4_100%)] px-4 py-3 shadow-[0_8px_22px_rgba(92,71,0,0.05)]"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="max-h-15 w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {isMobile === false && (
          <div className="relative mt-10">
            <div className="absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#fffbea] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#fff3c4] to-transparent" />

            <div className="overflow-hidden">
              <motion.div
                className="flex w-max items-center"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: ['0%', '-50%'],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 28,
                        ease: 'linear',
                        repeat: Infinity,
                      }
                }
              >
                {logoList.map((logo, index) => (
                  <div
                    key={`${index}-${logo}`}
                    className="mx-4 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-[rgba(138,109,0,0.12)] bg-[radial-gradient(circle_at_12%_12%,rgba(255,204,51,0.22),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fffbea_48%,#fff3c4_100%)] px-5 py-4 shadow-[0_8px_22px_rgba(92,71,0,0.05)]"
                  >
                    <img
                      src={logo}
                      alt="Partner logo"
                      className="max-h-14 w-auto max-w-full object-contain transition duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
