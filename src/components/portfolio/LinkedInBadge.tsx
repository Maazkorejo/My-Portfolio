import { useEffect } from "react";
import { useTheme } from "next-themes";

export function LinkedInBadge() {
  const { theme } = useTheme();

  useEffect(() => {
    const scriptId = "linkedin-badge-script";
    const existing = document.getElementById(scriptId);
    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [theme]);

  const badgeTheme = theme === "light" ? "light" : "dark";

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold text-center">
        Verified LinkedIn Presence
      </p>
      <div
        key={badgeTheme}
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme={badgeTheme}
        data-type="VERTICAL"
        data-vanity="muhammad-maaz-korejo-1677a9267"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link font-mono text-xs text-accent hover:underline"
          href="https://pk.linkedin.com/in/muhammad-maaz-korejo-1677a9267?trk=profile-badge"
          target="_blank"
          rel="noreferrer"
        >
          Muhammad Maaz Korejo
        </a>
      </div>
    </div>
  );
}
