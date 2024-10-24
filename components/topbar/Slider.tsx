import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import FeatherIcon from "feather-icons-react";

interface SliderProps {
  handleChange: (value: number) => void;
  icon: string;
  minimum: number;
  text: string;
  value: number;
}

interface SliderComponentProps {
  handleChange: (value: number) => void;
  minimum: number;
  value: number;
}

export const SliderComponent = ({
  value,
  handleChange,
  minimum,
}: SliderComponentProps): React.JSX.Element => (
  <div className="range">
    <Slider
      max={100}
      min={minimum}
      onChange={handleChange}
      orientation="horizontal"
      tooltip={false}
      value={value}
    />
  </div>
);

export const FullWidthSlider = ({
  text,
  icon,
  value,
  handleChange,
  minimum,
}: SliderProps): React.JSX.Element => (
  <div className="slider rounded-xl bg-gray-200/90 dark:bg-[#2e3c4b] shadow-md">
    <p className="font-semibold dark:text-white">{text}</p>
    <div className="slider-inner">
      <div className="icon">
        <FeatherIcon icon={icon} />
      </div>
      <SliderComponent
        handleChange={handleChange}
        minimum={minimum}
        value={value}
      />
    </div>
  </div>
);
