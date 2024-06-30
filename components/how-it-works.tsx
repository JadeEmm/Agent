import React from 'react'
import List, { ListItem } from './list'
import SectionHeadline from './section-headline'

function HowItWorks() {
  return (
    <section className="py-2 sm:py-16">

        <SectionHeadline styles="py-4 sm:py-16" title='How finding an agent works?' />

        <List>
            <ListItem count={1} 
                primary="Create your account  for free"
                secondary="Yes, that&apos;s right! "
            />
            <ListItem count={2} 
                primary="Connect with agents for your personalized application strategy"
                secondary="You are in complete control."
            />
            <ListItem count={3} 
                primary="Study for your interviews while the agent applies for you"
                secondary="Your agent will track all the applications "
            />
        </List>
    </section>

  )
}

export default HowItWorks