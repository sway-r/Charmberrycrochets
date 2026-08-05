import { siteConfig } from "@/data/siteConfig";

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled || !siteConfig.announcement.text) {
    return null;
  }

  return (
    <div className="flex h-[38px] items-center justify-center bg-blush px-4 text-center text-[12px] font-medium tracking-wide text-berry">
      <p>{siteConfig.announcement.text}</p>
    </div>
  );
}
