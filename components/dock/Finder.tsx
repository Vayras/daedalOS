import {Icon} from "@iconify/react"
import React from "react";
import Draggable from "react-draggable";

interface FinderProps {
  open:boolean;
  setOpen: (open: boolean) => void;
}


export const Finder = ({ setOpen, open }: FinderProps) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Draggable>
      <div
        className="min-w-[1018px] h-[450px] justify-between items-center flex absolute top-48 left-12 rounded-xl shadow-lg"
        style={{ border: "1px solid gray" }}
      >
        <div
          className="h-full  min-w-[160px] rounded-l-xl bg-[#202733] opacity-90 backdrop-blur-lg text-white flex flex-col overflow-scroll"
          style={{ borderRight: "2px solid black" }}
        >
          <div>
            <ul
              className="flex flex-row pt-5 px-5 gap-3 h-[10px]"
              onClick={handleClick}
            >
              {/* Close button */}
              <li className="bg-[#fe6057] rounded-full w-3 h-3" />
              {/* Minimize button */}
              <li className="bg-[#feba2e] rounded-full w-3 h-3" />
              {/* Maximize button */}
              <li className="bg-[#28c940] rounded-full w-3 h-3" />
            </ul>
          </div>

          <span className="flex flex-col justify-center ml-5 mt-7 ">
            <h1 className="text-[12px] text-[#535b67]">Favourites</h1>
            <ul className="text-[14px] flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="hugeicons:hotspot"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>AirDrop</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ph:clock-light"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Recents</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="icon-park-solid:all-application"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Application</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ph:desktop"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Desktop</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ion:document-outline"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Documents</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="grommet-icons:download-option"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Downloads</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ion:home-outline"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>User</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="streamline:orientation-landscape-solid"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Pictures</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ion:film-outline"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Movies</span>
              </li>
            </ul>
          </span>
          <span className="flex flex-col justify-center ml-5 mt-5">
            <h1 className="text-[12px] text-[#535b67]">iCloud</h1>
            <ul className="text-[14px] flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="hugeicons:hotspot"
                    className="text-[#00b8d3]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>icloud Drive</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ph:clock-light"
                    className="text-[#00b8d3]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Shared</span>
              </li>
            </ul>
          </span>
          <span className="flex flex-col justify-center ml-5 mt-5">
            <h1 className="text-[12px] text-[#535b67]">Location</h1>
            <ul className="text-[14px] flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="hugeicons:hotspot"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>icloud Drive</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Icon
                    icon="ph:clock-light"
                    className="text-[#0080fa]"
                    style={{ fontSize: "16px" }}
                  />
                </span>
                <span>Shared</span>
              </li>
            </ul>
          </span>
        </div>
        <div className="bg-[#1b1c1f] w-full h-full rounded-r-xl flex flex-col">
          <div
            className="w-full min-h-[50px] justify-between items-center flex px-4 text-white font-semibold"
            style={{ borderBottom: "1px solid black" }}
          >
            <div className="flex-row gap-4 pr-5 flex items-center">
              <span>
                <Icon icon="weui:back-filled" />
              </span>
              <span>
                <Icon icon="uiw:right" />
              </span>
              <p>Downloads</p>
            </div>

            <div className="flex items-center gap-12">
              <span className="flex items-center gap-2 justify-center">
                <Icon
                  icon="mingcute:upload-line"
                  style={{ fontSize: "24px", color: "darkgray" }}
                />
                <Icon
                  icon="material-symbols-light:bookmark-outline"
                  style={{ fontSize: "26px", color: "darkgray" }}
                />
                <Icon
                  icon="ph:dots-three-circle"
                  style={{ fontSize: "26px", marginLeft: "14px" }}
                />
              </span>
              <span className="text-lg  px-1 h-6 cursor-default rounded flex items-center">
                <Icon icon="bx:search" style={{ fontSize: "24px" }} />
              </span>
            </div>
          </div>
          <div className="pt-4 px-8 flex gap-12">
            <span className="flex flex-col justify-center items-center">
              <img
                className="max-w-20 max-h-20"
                src="https://www.macworld.com/wp-content/uploads/2023/12/folder-icon-macos.png?resize=1200%2C800&quality=50&strip=all"
                alt="folder"
              />
              <label className="text-white text-[14px]" htmlFor="folder">
                Images
              </label>
              <label className="text-blue-400 text-[10px]" htmlFor="folder">
                3 items
              </label>
            </span>
          </div>
          <div />
        </div>
      </div>
    </Draggable>
  );
};
