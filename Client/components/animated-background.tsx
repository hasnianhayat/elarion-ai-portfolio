"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      pulsePhase: number
      pulseSpeed: number
      update: () => void
      draw: () => void
    }

    interface Wave {
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
      opacity: number
      update: () => void
      draw: () => void
    }

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.6 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        update() {
          this.x += this.vx
          this.y += this.vy
          this.pulsePhase += this.pulseSpeed

          if (this.x < 0 || this.x > canvas.width) this.vx *= -1
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        },
        draw() {
          if (!ctx) return
          const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5
          const currentRadius = this.radius * (0.7 + pulse * 0.6)

          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentRadius * 3)
          gradient.addColorStop(0, `rgba(0, 163, 163, ${this.opacity * pulse})`)
          gradient.addColorStop(0.5, `rgba(0, 163, 163, ${this.opacity * 0.3})`)
          gradient.addColorStop(1, "rgba(0, 163, 163, 0)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(this.x, this.y, currentRadius * 3, 0, Math.PI * 2)
          ctx.fill()

          ctx.beginPath()
          ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 163, 163, ${this.opacity})`
          ctx.fill()
        },
      }
    }

    const createWave = (yPosition: number): Wave => {
      return {
        y: yPosition,
        amplitude: Math.random() * 30 + 20,
        frequency: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.01 + 0.005,
        opacity: Math.random() * 0.1 + 0.05,
        update() {
          this.phase += this.speed
        },
        draw() {
          if (!ctx) return
          ctx.beginPath()
          ctx.moveTo(0, this.y)

          for (let x = 0; x < canvas.width; x += 5) {
            const y = this.y + Math.sin(x * this.frequency + this.phase) * this.amplitude
            ctx.lineTo(x, y)
          }

          ctx.strokeStyle = `rgba(0, 163, 163, ${this.opacity})`
          ctx.lineWidth = 2
          ctx.stroke()
        },
      }
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const particles: Particle[] = []
    const waves: Wave[] = []

    for (let i = 0; i < 120; i++) {
      particles.push(createParticle())
    }

    for (let i = 0; i < 5; i++) {
      waves.push(createWave(canvas.height * (i / 5)))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        wave.update()
        wave.draw()
      })

      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 180) {
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
            const alpha = 0.15 * (1 - distance / 180)
            gradient.addColorStop(0, `rgba(0, 163, 163, ${alpha})`)
            gradient.addColorStop(0.5, `rgba(0, 163, 163, ${alpha * 1.5})`)
            gradient.addColorStop(1, `rgba(0, 163, 163, ${alpha})`)

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70"
      style={{ background: "transparent" }}
    />
  )
}
