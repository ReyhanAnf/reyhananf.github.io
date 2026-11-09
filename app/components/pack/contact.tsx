import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="grid gap-9 rounded-2xl border border-border bg-secondary/60 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-12">
      <div>
        <p className="eyebrow mb-5"><span className="mr-3 text-primary">04</span> A conversation is a good start</p>
        <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-[2.75rem]">Something in mind?<br />Let’s build it<span className="text-primary">.</span></h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">Have a project, an opportunity, or just want to say hello? I’d love to hear from you.</p>
      </div>
      <div className="flex flex-col items-start gap-4">
        <a href="mailto:andreafirdausr@gmail.com" className="action-button bg-foreground text-background hover:bg-primary hover:text-primary-foreground"><Mail size={16} aria-hidden="true" /> Say hello <ArrowUpRight size={15} aria-hidden="true" /></a>
        <a href="mailto:andreafirdausr@gmail.com" className="break-all text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary">andreafirdausr@gmail.com</a>
      </div>
    </div>
  );
}
