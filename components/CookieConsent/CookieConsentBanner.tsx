import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CookiePreferencesDialog } from "./CookiePreferencesDialog";

interface CookieConsentBannerProps {
  show: boolean;
  onAccept: () => void;
  onReject: () => void;
  onUpdatePreferences: (prefs: {
    analytics: boolean;
    marketing: boolean;
  }) => void;
  preferencesOpen: boolean;
  onPreferencesOpenChange: (open: boolean) => void;
  currentAnalytics: boolean;
  currentMarketing: boolean;
}

export function CookieConsentBanner({
  show,
  onAccept,
  onReject,
  onUpdatePreferences,
  preferencesOpen,
  onPreferencesOpenChange,
  currentAnalytics,
  currentMarketing,
}: CookieConsentBannerProps) {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 top-4 z-50 mx-auto w-fit rounded-full border bg-background/95 px-5 py-2.5 shadow-lg backdrop-blur-sm"
            role="dialog"
            aria-label="Cookie consent"
          >
            <div className="flex items-center gap-3">
              <p className="text-xs text-muted-foreground whitespace-nowrap">
                We use{" "}
                <a
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  cookies
                </a>
              </p>
              <div className="flex shrink-0 items-center gap-1.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 rounded-full px-3 text-xs"
                  onClick={() => onPreferencesOpenChange(true)}
                >
                  Customize
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 rounded-full px-3 text-xs"
                  onClick={onReject}
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  className="h-7 rounded-full px-3 text-xs font-semibold"
                  onClick={onAccept}
                >
                  Accept
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookiePreferencesDialog
        open={preferencesOpen}
        onOpenChange={onPreferencesOpenChange}
        onSave={onUpdatePreferences}
        currentAnalytics={currentAnalytics}
        currentMarketing={currentMarketing}
      />
    </>
  );
}
