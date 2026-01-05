import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you service?",
    answer:
      "We proudly serve the entire metropolitan area and surrounding suburbs within a 50-mile radius. Our mobile teams are strategically positioned to ensure quick response times across all service zones.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes! We offer 24/7 emergency plumbing services. Our emergency team is always on standby to handle urgent issues like burst pipes, severe leaks, and gas emergencies. Call our hotline anytime for immediate assistance.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We provide transparent, upfront pricing before any work begins. Service costs vary based on the complexity of the job. We offer free estimates for most services and competitive rates across all our plans.",
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer:
      "Absolutely. All our plumbers are fully licensed, insured, and undergo regular training. We carry comprehensive liability insurance and workers' compensation to protect both our team and your property.",
  },
  {
    question: "What warranty do you offer on your work?",
    answer:
      "We stand behind our work with warranties ranging from 90 days to 2 years depending on your service plan. Our Premium plan includes a comprehensive 2-year warranty on all parts and labor.",
  },
  {
    question: "How quickly can you respond to a service call?",
    answer:
      "Our average response time is under 1 hour for emergency calls. For scheduled appointments, we offer same-day service for most requests and always arrive within the scheduled time window.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free estimates for most plumbing services. Our technicians will assess the situation, explain the issue, and provide a detailed quote before any work begins. No surprises, no hidden fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, checks, and cash. We also offer financing options for larger projects to help make your plumbing needs more affordable.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 animate-enter">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              FAQ
            </h4>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow animate-enter"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary py-5 [&[data-state=open]>svg]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
