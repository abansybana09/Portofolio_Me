"use client";

export default function FooterSection() {
  return (
    <footer className="mt-12 border-t border-muted/30 pt-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohamad Aban Sy'bana. All rights reserved.
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:abanstyle@gmail.com" className="text-primary">
            muhamadaban81@gmail.com
          </a>
          <a
            href="https://github.com/abansybana09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
