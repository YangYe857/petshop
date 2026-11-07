import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-ink/60">
        <p>© 2026 {site.name}. All prices include VAT.</p>
      </div>
    </footer>
  );
}
