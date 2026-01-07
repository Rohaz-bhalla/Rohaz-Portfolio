import React from 'react'
import MinecraftNavbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import ProjectGallery from '@/components/ProjectGallery'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import AchievementsSection from '@/components/AchievementsSection'
import ProfileSummary from '@/components/ProfileSummary'


function Home() {
  return (
    <div>
        <MinecraftNavbar /> 
        <Hero />
        <main className="space-y-32">
      <ProfileSummary />
    </main>
        <Timeline />
        <SkillsSection />
        <ProjectGallery />
        <AchievementsSection />
        <TestimonialsSection />
    </div>
  )
}

export default Home