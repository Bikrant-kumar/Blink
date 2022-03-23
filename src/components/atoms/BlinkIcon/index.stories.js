import BlinkIcon from ".";
import icon from "../../../assets/images/icon";

const BlinkIconStory = {
  title: 'atoms/Icons',
  component: 'BlinkIcon',
};

export default BlinkIconStory;

const Template = (args) => <BlinkIcon {...args} />;

export const TimeIcon = Template.bind({});
  TimeIcon.args = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    d: icon.timeIcon,
};

export const SearchIcon = Template.bind({});
  SearchIcon.args = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    d: icon.searchIcon,
};
