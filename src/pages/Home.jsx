import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PortfolioShell from '../components/PortfolioShell'
import headshot from '../assets/headshot.png'
import './Home.css'

const selectedWork = [
  {
    title: 'Product / Design',
    to: '/product',
    summary: 'UI/UX Design, Product Design, Prototypes',
    tone: 'home-work-card-silver',
  },
  {
    title: 'Marketing',
    to: '/marketing',
    summary: 'Campaigns, strategy, growth',
    tone: 'home-work-card-mist',
  },
  {
    title: 'Archive',
    to: '/photography',
    summary: 'Photography, Visual Works',
    tone: 'home-work-card-ice',
  },
  {
    title: 'About',
    to: '/about',
    summary: 'Experience, skills',
    tone: 'home-work-card-pearl',
  },
]

const WEATHER_LABELS = {
  0: { label: 'Clear', icon: '☀' },
  1: { label: 'Mostly clear', icon: '☀' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Overcast', icon: '☁' },
  45: { label: 'Fog', icon: '〰' },
  48: { label: 'Fog', icon: '〰' },
  51: { label: 'Light drizzle', icon: '☂' },
  53: { label: 'Drizzle', icon: '☂' },
  55: { label: 'Heavy drizzle', icon: '☂' },
  61: { label: 'Light rain', icon: '☂' },
  63: { label: 'Rain', icon: '☂' },
  65: { label: 'Heavy rain', icon: '☂' },
  71: { label: 'Light snow', icon: '❄' },
  73: { label: 'Snow', icon: '❄' },
  75: { label: 'Heavy snow', icon: '❄' },
  80: { label: 'Rain showers', icon: '☂' },
  81: { label: 'Showers', icon: '☂' },
  82: { label: 'Heavy showers', icon: '☂' },
  95: { label: 'Thunderstorm', icon: '⚡' },
  96: { label: 'Storm', icon: '⚡' },
  99: { label: 'Storm', icon: '⚡' },
}

function getTimezoneCity() {
  if (typeof Intl === 'undefined') return 'Local'

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (!timezone) return 'Local'

  return timezone.split('/').at(-1)?.replaceAll('_', ' ') ?? 'Local'
}

function useDesktopWidgets() {
  const [now, setNow] = useState(() => new Date())
  const [weather, setWeather] = useState({
    location: getTimezoneCity(),
    temperature: '--',
    high: '--',
    low: '--',
    condition: 'Loading weather',
    icon: '◌',
  })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    let cancelled = false
    let refreshTimer

    const fallbackLocation = {
      latitude: 40.7128,
      longitude: -74.006,
      label: 'New York',
      timezone: 'America/New_York',
    }

    async function loadWeather({ latitude, longitude, label, timezone = 'auto' }) {
      try {
        const weatherUrl = new URL('https://api.open-meteo.com/v1/forecast')
        weatherUrl.searchParams.set('latitude', latitude)
        weatherUrl.searchParams.set('longitude', longitude)
        weatherUrl.searchParams.set('current', 'temperature_2m,weather_code')
        weatherUrl.searchParams.set('daily', 'temperature_2m_max,temperature_2m_min')
        weatherUrl.searchParams.set('timezone', timezone)
        weatherUrl.searchParams.set('forecast_days', '1')

        const response = await fetch(weatherUrl)
        if (!response.ok) throw new Error('weather fetch failed')

        const data = await response.json()
        const descriptor = WEATHER_LABELS[data.current?.weather_code] ?? { label: 'Weather', icon: '◌' }

        if (cancelled) return

        setWeather({
          location: label,
          temperature: Math.round(data.current?.temperature_2m ?? 0),
          high: Math.round(data.daily?.temperature_2m_max?.[0] ?? 0),
          low: Math.round(data.daily?.temperature_2m_min?.[0] ?? 0),
          condition: descriptor.label,
          icon: descriptor.icon,
        })
      } catch {
        if (cancelled) return

        if (label !== fallbackLocation.label) {
          loadWeather(fallbackLocation)
          return
        }

        setWeather((current) => ({
          ...current,
          location: label,
          condition: 'Weather unavailable',
          icon: '◌',
        }))
      }
    }

    function startWeatherUpdates(location) {
      loadWeather(location)
      refreshTimer = window.setInterval(() => {
        loadWeather(location)
      }, 10 * 60 * 1000)
    }

    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          startWeatherUpdates({
            latitude: coords.latitude,
            longitude: coords.longitude,
            label: getTimezoneCity(),
          })
        },
        () => {
          startWeatherUpdates(fallbackLocation)
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 10 * 60 * 1000,
        },
      )
    } else {
      startWeatherUpdates(fallbackLocation)
    }

    return () => {
      cancelled = true
      window.clearInterval(refreshTimer)
    }
  }, [])

  return { now, weather }
}

export default function Home() {
  const { now, weather } = useDesktopWidgets()

  const clockHoursMinutes = useMemo(
    () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now),
    [now],
  )
  const [clockHour = '00', clockMinute = '00', clockSecond = '00'] = clockHoursMinutes.split(':')

  const clockDate = useMemo(
    () => new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).format(now),
    [now],
  )

  const calendarWeekday = useMemo(
    () => new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now).toUpperCase(),
    [now],
  )

  return (
    <PortfolioShell showFooter={false}>
      <main className="home-page">
        <section className="home-hero">
          <div className="home-hero-aside">
            <div className="home-desktop-widgets" aria-label="Live desktop widgets">
              <article className="home-desktop-widget home-clock-widget">
                <div className="home-widget-glow" aria-hidden="true" />
                <span className="home-widget-label">{clockDate}</span>
                <div className="home-clock-face">
                  <time dateTime={now.toISOString()}>
                    <span className="home-clock-main">{clockHour}:{clockMinute}</span>
                    <span className="home-clock-separator">:</span>
                    <span className="home-clock-seconds">{clockSecond}</span>
                  </time>
                </div>
              </article>

              <article className="home-desktop-widget home-weather-widget">
                <div className="home-widget-glow" aria-hidden="true" />
                <div className="home-widget-topline">
                  <span className="home-widget-label">Weather</span>
                  <span className="home-weather-icon" aria-hidden="true">{weather.icon}</span>
                </div>
                <div className="home-weather-temp">{weather.temperature}&deg;</div>
                <div className="home-weather-meta">
                  <strong>{weather.condition}</strong>
                  <span>{weather.location}</span>
                  <span>H {weather.high}&deg;  L {weather.low}&deg;</span>
                </div>
              </article>

              <article className="home-desktop-widget home-calendar-widget">
                <div className="home-widget-glow" aria-hidden="true" />
                <div className="home-calendar-left">
                  <span className="home-widget-label">{calendarWeekday}</span>
                  <strong>{now.getDate()}</strong>
                  <span>No events today</span>
                </div>
                <div className="home-calendar-right">
                  <span className="home-widget-label">Profile</span>
                  <div className="home-title-stack" aria-label="Home introduction">
                    <span>Data-minded creative</span>
                    <span>Builder with taste</span>
                    <span>Culturally fluid</span>
                    <span>User-first, structure-always</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <img src={headshot} alt="Josephine Wang portrait collage" className="home-profile-image" />
          </div>
        </section>

        <section className="home-work" id="selected-work">
          <div className="home-work-meta">
            <span className="home-eyebrow">Portfolio</span>

            <div className="home-mini-meta">
              <span>New York / Beijing</span>
              <span>Open to internships and entry-level roles</span>
            </div>
          </div>

          <div className="home-work-list">
            {selectedWork.map((item, index) => (
              <Link key={item.title} to={item.to} className={`home-work-card ${item.tone}`}>
                <div className="home-work-card-top">
                  <span className="home-work-card-index">0{index + 1}</span>
                </div>
                <div className="home-work-main">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-contact" id="contact">
          <p className="home-contact-copy">Available for internships, entry-level roles, and collaborative projects.</p>
          <div className="home-contact-actions">
            <a href="mailto:mw5333@nyu.edu" className="home-primary-cta">Email</a>
            <a
              href="https://www.linkedin.com/in/josephine-wang-4a8b872b0/"
              target="_blank"
              rel="noreferrer"
              className="home-secondary-cta"
            >
              LinkedIn
            </a>
            <a href="mailto:mw5333@nyu.edu?subject=Resume%20Request" className="home-secondary-cta home-resume-cta">
              Resume
            </a>
          </div>
        </section>
      </main>
    </PortfolioShell>
  )
}
