import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfoCards from '@/components/contact/ContactInfoCards'
import ContactMap from '@/components/contact/ContactMap'
import React from 'react'

function ContactPage() {
  return (
    <main>
        <ContactHero />
        <ContactInfoCards />  
        <ContactMap />  
        <ContactForm />
    </main>
  )
}

export default ContactPage