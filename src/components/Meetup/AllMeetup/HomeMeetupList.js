import { Link } from "react-router-dom";
import useGet from "../../../Hooks/useGet";
import HomeMeetupListItem from "./HomeMeetupListItem";
import SkeletonLoader from "../../ui/SkeletoonLoader";

import FeedBackToast from "../../common/Functionality/FeedBackToast";

const HomeMeetupList = ({ selectedFilter }) => {
  
  const { data: meetups, isLoading, error } = useGet("meetup/get-all-meetups");

  const sortedArray = [...meetups];

  if (selectedFilter === "Today") {
    sortedArray.filter(
      (meetup) => new Date(meetup.date).getDate() === new Date().getDate()
    );
  } else if (selectedFilter === "Near") {
    sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (selectedFilter === "Far") {
    sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="grid grid-rows-4 pt-12 md:mx-5">
      {sortedArray &&
        sortedArray.map((meetup) =>
          isLoading ? (
            <SkeletonLoader />
          ) : (
            <Link key={meetup.id} to={`meetups/${meetup.id}`}>
              <HomeMeetupListItem
                key={meetup.id}
                name={meetup.title}
                description={meetup.description}
                address={meetup.address}
                image={meetup.image}
                date={meetup.date}
              />
            </Link>
          )
        )}
      {error && (
        <FeedBackToast
          message={"Smomething went wrong, please try again later"}
          isOpen={true}
          code={"failure"}
        />
      )}
    </div>
  );
};

export default HomeMeetupList;
