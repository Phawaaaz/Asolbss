
const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your business needs, goals, and challenges.",
  },
  {
    number: "02",
    title: "Assessment",
    description: "Our experts evaluate your financial and business requirements.",
  },
  {
    number: "03",
    title: "Solution Design",
    description: "We recommend tailored financial or advisory solutions.",
  },
  {
    number: "04",
    title: "Support & Follow-Up",
    description: "We provide ongoing guidance to help you achieve sustainable results.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background relative">
        <div className="container">
            <div className="text-center mb-20">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Process</span>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mt-2">
                    How We Work With You
                </h2>
            </div>
            
            <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10 transform translate-y-1/2" />

                {steps.map((step, index) => (
                    <div key={step.number} className="relative flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 text-primary font-bold text-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300 z-10">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed px-4">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
