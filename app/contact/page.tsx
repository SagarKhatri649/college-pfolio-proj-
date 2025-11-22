"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Page() {
  return (
    <main className="w-full flex justify-center">
      <div className="w-full max-w-5xl px-6 py-16">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-foreground">Get In Touch</h1>
        <p className="mt-3 text-center text-sm text-muted-foreground">Have a project in mind or want to collaborate? Use the form below or reach me directly.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfoCard />
          <MessageFormCard />
        </div>
      </div>
    </main>
  )
}

function AccentFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="absolute left-6 right-6 -top-1 h-[2px] bg-gradient-to-r from-purple-400/60 via-fuchsia-400/60 to-purple-400/60 rounded-full" />
      <span className="absolute top-6 -right-1 h-[60%] w-[2px] bg-gradient-to-b from-cyan-400/60 via-teal-400/60 to-cyan-400/60 rounded-full" />
      <span className="absolute left-6 right-6 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400/60 via-teal-400/60 to-cyan-400/60 rounded-full" />
      {children}
    </div>
  )
}

function ContactInfoCard() {
  return (
    <AccentFrame>
      <Card className="bg-black/40 border-border/60">
        <CardHeader>
          <CardTitle className="text-foreground">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
              <Mail className="size-5" />
            </div>
            <div>
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-muted-foreground">eyadzoubi40@gmail.com</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Let&apos;s Connect</div>
            <p className="mt-1 text-sm text-muted-foreground">Reach out for project inquiries, collaborations, or just to say hello.</p>
          </div>

          <div>
            <div className="text-sm font-semibold">Follow Me</div>
            <div className="mt-3 flex items-center gap-3">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </AccentFrame>
  )
}

function MessageFormCard() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    console.log("contact_submit", Object.fromEntries(fd.entries()))
    alert("Message sent! (demo)")
    e.currentTarget.reset()
  }

  return (
    <AccentFrame>
      <Card className="bg-black/40 border-border/60">
        <CardHeader>
          <CardTitle className="text-foreground">Send Me a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <input name="name" placeholder="Your Name" className="w-full rounded-md border bg-muted/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50" />
            <input name="email" type="email" placeholder="Your Email" className="w-full rounded-md border bg-muted/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50" />
            <textarea name="message" rows={5} placeholder="Your Message" className="w-full rounded-md border bg-muted/30 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </AccentFrame>
  )
}
