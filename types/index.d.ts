import type React from "react";

export interface MacActions {
  restartMac: (e: React.MouseEvent) => void;
  setLogin: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  shutMac: (e: React.MouseEvent) => void;
  sleepMac: (e: React.MouseEvent) => void;
}

export {
  AppsData,
  BearMdData,
  BearData,
  LaunchpadData,
  MusicData,
  TerminalData,
  UserData,
  WallpaperData,
  WebsitesData,
  SiteSectionData,
  SiteData,
} from "./configs";
