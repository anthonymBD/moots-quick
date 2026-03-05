
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
    {
        q: "Do the products have a warranty?",
        a: "Yes — all Moot's pet beds come with a 1-year warranty covering replacement due to damage on arrival or manufacturing defects. If something's wrong when it arrives, we'll make it right.",
    },
    {
        q: "Where are the products made?",
        a: "All our products are proudly made in Mexico with high-quality materials selected for durability, comfort, and pet safety.",
    },
    {
        q: "Do the products require assembly?",
        a: "No assembly needed — every bed arrives fully assembled and ready for your pet to enjoy right out of the box.",
    },
    {
        q: "Does the sofa bed have removable covers?",
        a: "Most of our sofa pet beds have removable, zippered covers that are machine washable, making cleanup easy after muddy paws or shedding season.",
    },
    {
        q: "Can the legs be removed or swapped for different ones?",
        a: "Some beds have legs that can be easily removed if needed, but we don't recommend replacing them with a different type — the new legs may not fit correctly and could affect stability.",
    },
    {
        q: "What sizes are available?",
        a: "We offer Small, Medium, Large, and XL to accommodate dogs from tiny Yorkies all the way up to Great Danes. Check our size guide to find the perfect fit for your pet's weight and breed.",
    },
    {
        q: "Is the sofa waterproof?",
        a: "The beds include a waterproof liner cover that prevents spills and accidents from soaking through, keeping the sofa clean and well-protected over time.",
    },
    {
        q: "How do I clean the bed?",
        a: "The leatherette exterior can be spot-cleaned with a damp cloth. The inner cushion cover is removable and machine washable — just unzip, wash on a gentle cycle, and air dry.",
    },
    {
        q: "How long does shipping take?",
        a: "We offer free shipping on all USA orders. Delivery typically takes 5–10 business days depending on your location. You'll receive a tracking number once your order ships.",
    },
    {
        q: "What is your return policy?",
        a: "We offer a 100% satisfaction guarantee. If you're not happy with your purchase for any reason, contact us at help@moots.pet and we'll make it right — no questions asked.",
    },
];

export default function FAQ() {
    return (
        <section className="bg-[#F9F8F6] py-14 px-4 sm:px-8">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-stone-400 mb-3">
                        <span className="w-6 h-px bg-stone-300" />
                        Got Questions?
                        <span className="w-6 h-px bg-stone-300" />
                    </span>
                    <h2 className="text-dark-blue text-2xl sm:text-3xl lg:text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-stone-500 text-base mt-3 max-w-lg mx-auto">
                        Everything you need to know about Moot's pet beds. Can't find your answer?{" "}
                        <a
                            href="mailto:help@moots.pet"
                            className="text-dark-blue font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
                        >
                            Email us
                        </a>.
                    </p>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="flex flex-col gap-2">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="rounded-2xl border border-stone-100 bg-white px-5 shadow-sm data-[state=open]:border-dark-blue/20 data-[state=open]:shadow-md transition-all duration-200"
                        >
                            <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-dark-blue hover:no-underline py-4">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-stone-500 text-sm sm:text-base leading-relaxed pb-5">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Bottom contact card */}
                <div className="mt-10 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-stone-100 rounded-2xl px-8 py-6 shadow-sm w-full sm:w-auto">
                        <div className="text-left">
                            <p className="text-dark-blue font-bold text-sm">Still have questions?</p>
                            <p className="text-stone-500 text-xs mt-0.5">Our team is happy to help.</p>
                        </div>
                        <Button
                            asChild
                            className="shrink-0 bg-dark-blue text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#0a1628] active:scale-95 transition-all duration-200 w-full sm:w-auto"
                        >
                            <a href="mailto:help@moots.pet">Contact Us</a>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}

