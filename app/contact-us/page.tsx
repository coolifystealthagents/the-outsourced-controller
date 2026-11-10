import type {Metadata} from "next";
import ContactShell from "@/components/ContactShell";
import LeadForm from "@/components/LeadForm";

export const metadata:Metadata={title:"Contact Us",description:"Tell us where close coordination, reporting, reconciliations, payables, or receivables need dependable support.",alternates:{canonical:"https://theoutsourcedcontroller.com/contact-us"}};
export default function ContactPage(){return <ContactShell brand={"The Outsourced Controller"} title={"Give finance work a clear owner."} intro={"Tell us where close coordination, reporting, reconciliations, payables, or receivables need dependable support."} preparation={["Your close calendar and recurring finance tasks", "Approved accounting tools and report cadence", "Review owners and approval responsibilities"]} boundary={"Your finance leaders retain accounting judgments, payment approvals, tax work, professional assurance and final reports."} calendar={"https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1"}><LeadForm source="contact-page-consultation"/></ContactShell>}
