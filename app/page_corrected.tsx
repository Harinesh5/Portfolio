
"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeProvider } from "@/components/theme-provider"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Code,
  Brain,
  Cloud,
  Database,
  Award,
  GraduationCap,
  Users,
  MessageSquare,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

// 3D Brain Component
function AnimatedBrain() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.3} speed={1.5} roughness={0} />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      <>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/harineshmaa.pdf" download target="_blank" rel="noopener noreferrer">
            <Button variant="default">Download Resume</Button>
          </a>
          <a href="#projects">
            <Button variant="outline">View Projects</Button>
          </a>
          <a href="#contact">
            <Button variant="secondary">Contact Me</Button>
          </a>
          <a href="https://github.com/Harinesh5" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/harinesh-ma-a-675b8a254" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
          </a>
          <a href="mailto:harineshmadhavan2003@gmail.com">
            <Button variant="ghost"><Mail className="mr-2 h-4 w-4" /> Email</Button>
          </a>
        </div>
      </>
    </>
  )
}
