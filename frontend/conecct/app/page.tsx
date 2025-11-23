import { Instagram, Facebook, Mail, Globe, Calendar, Clock, Github, Book, ArrowLeftRight, UserPlus } from "lucide-react"

// Discord Icon Component (Lucide doesn't have Discord icon)
const Discord = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

// WhatsApp Icon Component (Lucide doesn't have WhatsApp icon)
const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// Dropbox Icon Component (Lucide doesn't have Dropbox icon)
const Dropbox = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

// Profile Information
const PROFILE = {
  name: "NECC",
  description: "Núcleo de estudantes de Ciências da Computação",
  logo: "/necc-logo.png",
}

// Social Media Links
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com/necc.uminho",
    icon: Instagram,
  },
    {
    name: "Discord",
    href: "https://discord.gg/RswWWNDqym",
    icon: Discord,
  },
  {
    name: "NECC",
    href: "https://github.com/NECC",
    icon: Github,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/necc.di.uminho",
    icon: Facebook,
  },
  {
    name: "Website",
    href: "https://necc.di.uminho.pt",
    icon: Globe,
  },
  {
    name: "Email",
    href: "mailto:necc@di.uminho.pt",
    icon: Mail,
  },
]

// Featured Event (appears at the top if active)
const FEATURED_EVENT = {
  title: "Jantar de Curso Inverno",
  description: "Dia 26 de Novembro, pelas 20h00, prepara-te para o jantar de curso de LCC! O preço é de 12€ (sócio) e de 14€ (não sócio) e para garantires a tua reserva deves preencher este formulário e fazer o pagamento até ao dia 24 de Novembro às 23h00.",
  href: "https://forms.gle/B3RtWmwookuKTUgo6",
  image: "/jantar.png",
  eventDate: "26 Nov 2025",
  expiresAt: new Date("2025-11-26T20:00:00"), // Expires on event day at 8 PM
}

// Regular Links
const LINKS = [
  {
    title: "Comunidade Ciências da Computação - UMinho",
    href: "https://chat.whatsapp.com/HTGQZNNGbcHK6l6fHrNF1N",
    image: "/calendar-events-icon.jpg",
    icon: WhatsApp,
    highlight: false,
  },
  {
    title: "NECChange",
    href: "https://necchange.necc.di.uminho.pt/",
    image: "/necc-logo.png",
    icon: ArrowLeftRight,
    highlight: false,
  },
  {
    title: "Torna-te Sócio do NECC",
    href: "https://bit.ly/pre-inscriçãoNECC",
    image: "/necc-logo.png",
    icon: UserPlus,
    highlight: false,
  },
  {
    title: "Website",
    href: "https://necc.di.uminho.pt/",
    image: "/necc-logo.png",
    highlight: false,
  },
  {
    title: "Material de Curso",
    href: "https://github.com/NECC/Material-de-Curso",
    image: "/calendar-events-icon.jpg",
    icon: Book,
    highlight: false,
  },
  // {
  //   title: "Horário NECC",
  //   href: "https://docs.google.com/spreadsheets/d/1m1fUdgNNyapDm1-JaFVzwiJMwWNzNN89H7LE1Dq6rN0/edit?usp=sharing",
  //   image: "/calendar-events-icon.jpg",
  //   highlight: false,
  // },
  {
    title: "DropBox",
    href: "https://bit.ly/dropboxLCC",
    image: "/calendar-events-icon.jpg",
    icon: Dropbox,
    highlight: false,
  },
]

export default function LinkInBioPage() {
  const isFeaturedActive = FEATURED_EVENT.expiresAt > new Date()

  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-[65vh] overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-900">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("/necc-logo-pattern.png")`,
              backgroundSize: "120px 120px",
              backgroundRepeat: "repeat",
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Hero Content with Logo, Name, and Socials */}
          <div
            className="flex-shrink-0 pt-20 pb-8 px-8 flex flex-col items-center justify-end"
            style={{ minHeight: "65vh" }}
          >
            {/* Logo */}
            <div className="mb-6">
              <img src={PROFILE.logo} alt={`${PROFILE.name} Logo`} className="w-32 h-32 object-contain drop-shadow-2xl rounded-lg" />
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl font-bold text-white text-center mb-3 drop-shadow-lg">{PROFILE.name}</h1>
            <p className="text-white/95 text-lg text-center mb-8 drop-shadow-md max-w-sm leading-relaxed">
              {PROFILE.description}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-7 mb-8">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="text-white hover:text-white/70 transition-colors drop-shadow-lg"
                    aria-label={social.name}
                  >
                    <Icon className="w-7 h-7" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex-1 bg-zinc-950 px-6 pt-6 pb-12 overflow-y-auto">
            <div className="space-y-4 max-w-md mx-auto w-full">
              {/* Featured Event */}
              {isFeaturedActive && (
                <a
                  href={FEATURED_EVENT.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-5 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl shadow-2xl border-2 border-cyan-400/50 hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white/10 ring-2 ring-white/30">
                      <img
                        src={FEATURED_EVENT.image || "/placeholder.svg"}
                        alt={FEATURED_EVENT.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-cyan-100 uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                          Em Destaque
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-50 transition-colors">
                        {FEATURED_EVENT.title}
                      </h3>
                      <p className="text-sm text-cyan-50/90 mb-3 leading-snug">{FEATURED_EVENT.description}</p>
                      <div className="flex items-center gap-4 text-xs text-cyan-100/90">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{FEATURED_EVENT.eventDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Inscrições até ao evento</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {/* Regular Links */}
              {LINKS.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 w-full py-3 px-5 ${
                      link.highlight
                        ? "bg-cyan-600 hover:bg-cyan-700 shadow-lg"
                        : "bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10"
                    } text-white rounded-xl transition-all`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                      {Icon ? (
                        <Icon className="w-6 h-6 text-white" />
                      ) : (
                        <img
                          src={link.image || "/placeholder.svg"}
                          alt={link.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <span className={`text-base ${link.highlight ? "font-semibold" : "font-medium"}`}>{link.title}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
