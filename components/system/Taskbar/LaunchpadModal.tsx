/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { m, AnimatePresence } from "framer-motion";
import { type FC, useState, useEffect } from "react";
import { useProcesses } from "contexts/process";

interface LaunchpadModalProps {
  closeModal: () => void;
}

const LAUNCHPAD_APPS = [
  "FileExplorer",
  "Terminal",
  "Messenger",
  "Safari",
  "Paint",
  "AppleCalc",
  "NotesApp",
  "AppleMusic",
  "FaceTime",
  // Add more apps as needed
];

const LaunchpadModal: FC<LaunchpadModalProps> = ({ closeModal }) => {
  const { open } = useProcesses();
  const [searchTerm, setSearchTerm] = useState("");

  const openApp = (app: string) => {
    open(app);
    closeModal();
  };

  const filteredApps = LAUNCHPAD_APPS.filter((app) =>
    app.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      <m.div
        animate={{ opacity: 1 }}
        className=" absolute bottom-[-50px] mb-[200px] lg:mb-0"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={closeModal}
      >
        <m.div
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/70 dark:bg-slate-700/90  backdrop-blur-2xl rounded-2xl p-6 shadow-lg lg:h-[680px] h-[500px] lg:min-w-[800px] min-w-[320px] border-2 border-gray-600 text-white"
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          transition={{ damping: 25, stiffness: 300, type: "spring" }}
        >
          {/* Header with Search Bar */}
          <div className="flex items-center mb-6">
            <input
              className="flex-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              type="text"
              value={searchTerm}
            />
            <button
              aria-label="Close Launchpad"
              className="ml-4 text-gray-600 hover:text-gray-800 dark:text-white"
              onClick={closeModal}
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <m.div
                key={app}
                className="cursor-pointer flex flex-col items-center"
                onClick={() => openApp(app)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  alt={`${app} icon`}
                  className="w-20 h-20 mb-2"
                  src={`/System/icons/144x144/${app}.avif`}
                />
                <span className="text-sm text-center">{app}</span>
              </m.div>
            ))}
            {filteredApps.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No apps found.
              </p>
            )}
          </div>
        </m.div>
      </m.div>
    </AnimatePresence>
  );
};

export default LaunchpadModal;
