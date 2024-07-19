// Import necessary components
import BrowseItems from '@/components/browse-items';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import KeyMetrics from '@/components/KeyMetrics';
import MaxWContainer from '@/components/max-w-container';
import WhyChooseAgent from '@/components/WhyChooseAgent';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <Header />
     
      {/* Hero */}
      <Hero />
      
      {/* Main Content */}
      <MaxWContainer>

        {/* What is Agent? */}
        <section className="py-8 sm:py-16 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">What is Agent?</h2>
            <p className="text-xl font-bold mb-8">
              Agent is the platform where you can hire dedicated job search agents to streamline your job hunt, saving time and increasing success.
            </p>
          </div>
        </section>

     {/* Transforming Traditional Job Search */}
<section className="py-8 sm:py-16">
  <div className="max-w-3xl mx-auto text-center">
    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Transforming Traditional Job Search</h3>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
        <p className="mb-4">From Tedious to Effortless: Traditional job searches involve countless hours of searching and applying. Agent transforms this into a seamless experience where experts handle the hard work for you.</p>
      </div>
      <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
        <p className="mb-4">From Uncertain to Strategic: Our agents use their industry knowledge to strategically target the best opportunities for you.</p>
      </div>
    </div>
    <div className="mt-8">
      <img src="/transform.png" alt="Transformation Icon" className="mx-auto w-24 h-24" />
    </div>
  </div>
</section>



        {/* How It Works */}
        <HowItWorks />
        
        {/* White space */}
        <div className="py-12 sm:py-24"></div>

        {/* Why Choose Agent */}
        <WhyChooseAgent />

        {/* Browse Items */}
        <BrowseItems />
        
        {/* Final Call to Action */}
<section className="py-8 sm:py-16 text-center">
<div className="bg-primary text-primary-foreground px-4 py-8 inline-block rounded-lg">
    <Link className="font-bold text-lg sm:text-2xl" href="/signup">Connect with an Agent</Link>
</div>
  <h3 className="text-xl sm:text-2xl mb-4">Create an Account or Sign In</h3>
</section>

        {/* Key Metrics Section */}

        <section className="py-8 sm:py-1 bg-blue-800 text-white">
  <div className="max-w-md mx-auto text-center">
    <div className="p-4 bg-blue-800 text-white rounded-lg hover:scale-105 transform transition-all duration-300">
      <h2 className="text-3xl font-bold mb-0">Join the Agent Success Story</h2>
    </div>
  </div>
</section>




         

        <KeyMetrics />
        


        {/* Testimonials Section */}
        <section className="py-8 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Mission</h2>
            <h3 className="text-xl sm:text-3xl font-bold mb-4">Faster. Easier. Streamlined. Fun.</h3>
            
    <p className="mb-8">We're providing the experience job seekers want.</p>
          </div>
        </section>

{/* Final Call to Action */}
<section className="py-8 sm:py-16 text-center">
  <h3 className="text-xl sm:text-3xl font-bold mb-4">Transform your job search.</h3>
  <h3 className="text-xl sm:text-2xl mb-4">Hire an expert agent today and get closer to your dream job.</h3>
  <div className="bg-primary text-primary-foreground px-4 py-8 inline-block rounded-lg">
    <Link className="font-bold text-lg sm:text-2xl" href="/signup">Sign Up Now</Link> | <Link className="font-bold text-lg sm:text-2xl" href="/learn-more">Learn More →</Link>
  </div>
</section>



      </MaxWContainer>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
