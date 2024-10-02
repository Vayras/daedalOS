import React from 'react';
import { Icon} from '@iconify/react'

const ControlCenter = () => {
  const wifi=true;
  const bluetooth=true;
  const airdrop=true;
  const dark =false;
  const fullscreen=true;
  const toggleFullScreen= () => console.log("fullscreen");

  const toggleDark= () => console.log("dark");
  return (
    <div className="min-w-[330px] bg-[rgba(224,219,218,0.75)]   p-4 rounded-xl shadow-md absolute top-8 right-2">
      {/* Network Section */}
      <div className="flex items-center justify-between mb-4 gap-2 ">
        <div className="bg-gray-200 opacity-90 z-1 rounded-xl shadow-lg row-span-2 col-span-2 p-2 flex flex-col justify-around min-h-[148px] ">
          <div className="flex items-center space-x-2">
            <div
              className={wifi ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8" : "bg-gray-400/25 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"}
            >
              <span>
                <Icon
                  icon="material-symbols:wifi"
                  style={{ fontSize: "16px" }}
                />
              </span>
            </div>
            <div className="pt-0.5">
              <div className="font-medium leading-4 text-black">Wi-Fi</div>
              <div className="text-xs text-gray-500">
                {wifi ? "Home" : "Off"}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className={bluetooth ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8" : "bg-gray-400/25 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"}
            >
              <span>
                <Icon icon="charm:bluetooth" style={{ fontSize: "16px" }} />
              </span>
            </div>
            <div className="pt-0.5">
              <div className="font-medium leading-4 text-black">Bluetooth</div>
              <div className="text-xs text-gray-500">
                {bluetooth ? "On" : "Off"}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={airdrop ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8" : "bg-gray-400/25 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"}
            >
              <span>
                <Icon
                  icon="material-symbols:rss-feed-rounded"
                  style={{ fontSize: "16px" }}
                />
              </span>
            </div>
            <div className="pt-0.5">
              <div className="font-medium leading-4 text-black">AirDrop</div>
              <div className="text-xs text-gray-500">
                {airdrop ? "Contacts Only" : "Off"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center min-h-[152px] gap-1 text-black">
          <div className="flex justify-center items-center space-x-2 w-full bg-gray-200 rounded-xl shadow-lg backdrop-blur-2xl min-h-[75px] max-w-60">
            <span
              className={dark ? "bg-blue-500 text-white rounded-full flex items-center justify-center h-8 w-8" : "bg-gray-300 text-gray-700 rounded-full flex items-center justify-center h-8 w-8"}
              onClick={toggleDark}
            >
              {dark ? (
                <Icon icon="ion:moon" />
              ) : (
                <Icon icon="ion:sunny" />
              )}
            </span>
            <span className="font-medium text-black">
              {dark ? "Dark Mode" : "Light Mode"}
            </span>
          </div>
          <span className="flex gap-2">
            <span className="max-w-[72px] max-h-[72px] items-center flex flex-col justify-center text-center bg-gray-200 rounded-xl shadow-lg backdrop-blur-2xl py-2 px-6">
              <Icon icon="bi:brightness-alt-high" />
              keyboard Brightness
            </span>
            <span className="max-w-[72px] max-h-[72px] items-center flex flex-col justify-center text-center bg-gray-200 rounded-xl shadow-lg backdrop-blur-2xl py-2 px-6">
              <Icon icon="material-symbols-light:fullscreen" />
              Enter Fullscreen
            </span>
          </span>
        </div>
      </div>

      {/* Display and Sound Sliders */}
      <div className="mb-4">

      </div>

      {/* Music Player */}
      <div className="bg-gray-200 p-2 rounded-lg flex items-center bg-gray-200 opacity-90 z-1 rounded-xl shadow-lg">
        <img
          alt="Sunflower"
          className="w-10 h-10 rounded-lg mr-2"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAOAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIGBwgEBf/EADEQAAEDAwEHAQUJAAAAAAAAAAEAAgMEBRESBgchMUFRcYEiMmGhsRMUNEJicpGy0f/EABoBAQACAwEAAAAAAAAAAAAAAAABBQIDBAb/xAAuEQABAwIDBwMEAwEAAAAAAAABAAIDBBESITEFQVFxgZHwIqHBExRh0UKS4TL/2gAMAwEAAhEDEQA/AKNRE57HRkB7SMgOGeoKgEHRZPY5lsQ1zTVKxQiIREIiERCIrjtm7p152YpKxksX2kkfswyswNI4DDhxBIHZGU124hkfOnt1XoZ9oQNf9vMy7QAOWW7Qjv0KrrabZqqsdQ9ksT2Bp9pr+be3HqPisAS04XarlrdnMZH9zTOxRnuP88IXgrNVC6aKinrZdEDM45uPIeVBNsl1UtHLVOtGNNTuHndTe37urlHQyXGaje6KGMykynQCAM8G8z6qDFI7U2H4z/XtfmrWKGgp5A0uxvvyF+gPueigUwDZpAOQcQsrWyVHJ/2UxFgtT7B1UdVsVaZY8fhmt9RwP0XVDfCFsrDedzuNj3C5tuLHT3iyzMdGDUxMJjPU92+D/i2SRCUWW/Z1YaeXC7NjsiOazTNSvjrXUreLtelvx7Kvxem5UTUrmVJp25m9h8K993GyUFst8FZPE187xqYHD3P1eT8guymhs3G/U+ed117RqhCPs4D6W6nid/nRTHaCobSbN3OaXBa2lk/qQtktgCVWUwxSsH5CyjI7W9zj1OVwDRHuxOLuKapWKvHcbf2VNnmscz8T0zzJCCfeYeYHg/Vb4X2OErdKz6kIkH8cj8frorHqJGRxvfI7DGgk55YXbewuVyNaXENbqVnKpdRybb6+UBkzgfIecYVM83ud1/PdesDGjajG39QaP7YcvhaKtj2TQRvp3tdEWgsI5Y6K5cRYELyjw5ry1+u9QHfbtJHRWUWOnkBqasgzNH5IxxwfJx/C4Z3Xs0Lrgb9OJ0p35D5PQZcyqIWlaEIi77Ncam11rKqjkcyaM6mlpwT3CnDjbh36hdNLUmnkxWuDkQdCOCm143m1lxtX3Z7/AGnDDg2PSXfuPbxjKxMkzhhJ6q3ZU7Lp7zwMOPcDoPO/JV66WR0xlLj9oXatXXKWFrKjdK90n1CfVe9/ypjaN4l0ttCaeKWRvbTpI8jI4eihplYMLTkrh+0aOoGOphvJxGh5+FRa519Rc6ySqq5HPleckuOVlzVVPO6Z+I5cBwXIi0IREoJaQRwIUgkG4RK7BOQMAqXa3CJqxRKB1PJSOKJFCIREIiERKDgY6KbohQiCcqSbokUIhEX/2Q=="
        />
        <div className="flex flex-col justify-between">
          <span className="font-medium text-black">Sunflower</span>
          <span className="text-sm text-gray-500">Post Malone / Swae Lee</span>
        </div>
        <button className="ml-auto text-black mx-4">
          <Icon icon="ph:play-fill" style={{ fontSize: "16px" }} />
        </button>
      </div>
    </div>
  );
      };

      export default ControlCenter;
