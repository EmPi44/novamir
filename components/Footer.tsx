import { Footerdemo } from "@/components/ui/footer-section";

function Footer({ onOpenCookieSettings }: { onOpenCookieSettings?: () => void }) {
  return (
    <div className="dark">
      <Footerdemo onOpenCookieSettings={onOpenCookieSettings} />
    </div>
  );
}

export { Footer };
