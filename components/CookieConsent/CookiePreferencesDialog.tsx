import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CookiePreferencesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (prefs: { analytics: boolean; marketing: boolean }) => void;
  currentAnalytics: boolean;
  currentMarketing: boolean;
}

export function CookiePreferencesDialog({
  open,
  onOpenChange,
  onSave,
  currentAnalytics,
  currentMarketing,
}: CookiePreferencesDialogProps) {
  const [analytics, setAnalytics] = useState(currentAnalytics);
  const [marketing, setMarketing] = useState(currentMarketing);

  useEffect(() => {
    if (open) {
      setAnalytics(currentAnalytics);
      setMarketing(currentMarketing);
    }
  }, [open, currentAnalytics, currentMarketing]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Choose which cookies you allow. You can change these settings at any
            time via the "Cookie Settings" link in the footer.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Label className="text-sm font-medium">Necessary</Label>
                <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                  Required
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Essential for the website to function. Includes session
                management and the Cal.com booking widget.
              </p>
            </div>
            <Switch checked disabled aria-label="Necessary cookies (always enabled)" className="data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-300" />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <Label htmlFor="analytics-switch" className="text-sm font-medium">
                Analytics
              </Label>
              <p
                id="analytics-description"
                className="text-sm text-muted-foreground"
              >
                Help us understand how visitors interact with our website to
                improve the experience.
              </p>
            </div>
            <Switch
              id="analytics-switch"
              checked={analytics}
              onCheckedChange={setAnalytics}
              aria-describedby="analytics-description"
              className="data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-300"
            />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <Label htmlFor="marketing-switch" className="text-sm font-medium">
                Marketing
              </Label>
              <p
                id="marketing-description"
                className="text-sm text-muted-foreground"
              >
                Allow personalized advertising and tracking across websites.
              </p>
            </div>
            <Switch
              id="marketing-switch"
              checked={marketing}
              onCheckedChange={setMarketing}
              aria-describedby="marketing-description"
              className="data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-300"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onSave({ analytics, marketing });
              onOpenChange(false);
            }}
          >
            Save Preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
