import React from 'react'
import './stickyicons.scss'
import { Mail, Phone, WhatsApp } from '@mui/icons-material'

export default function StickyIcons() {
  return (
    <section className="Stick-icons">
        <section>
          <WhatsApp fontSize='large'/>
        </section>
        <section>
          <Phone fontSize='large'/>
        </section>
        <section>
          <Mail fontSize='large'/>
        </section>
    </section>
  )
}
