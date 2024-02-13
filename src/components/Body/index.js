import { Fragment } from 'react';


import Slider from './Slider';
import UpcomigMeetup from './UpcomigMeetup';
import SignupBlock from './SignupBlock';
import Categories from './Categories';
import MeetupBlog from './MeetupBlog';
const Body = () => {
    return (
      <Fragment>
        <Slider />
        <UpcomigMeetup/>
        <SignupBlock />
        <Categories />
        <MeetupBlog/>
      </Fragment>
    );
};
export default Body;