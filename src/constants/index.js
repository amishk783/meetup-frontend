import cardimg from "./cardimg.jpg";
import games from './icon/games.png'
import travel from "./icon/travel.png";
import sports from "./icon/sports.png";
import hobby from "./icon/hobby.png";
import robot from './icon/robot.png'
import meetupblog_1 from './icon/meetupblog_1.jpg'
import meetupblog_2 from './icon/meetupblog_2.jpg'
import meetupblog_3 from "./icon/meetupblog_3.jpg";


export const footerlinks = [
  {
    title: "Your Account",
    links: [
      { name: "Sign up", page: "/" },
      { name: "Log in", page: "/" },
      { name: "Help", page: "/" },
    ],
  },
  {
    title: "Discover",
    links: [
      { name: "Meetups", page: "/" },
      { name: "Make Friends", page: "/" },
      { name: "Cities", page: "/" },
    ],
  },
  {
    title: "Meetup",
    links: [
      { name: "About", page: "/" },
      { name: "Blog", page: "/" },
      { name: "Contact us", page: "/" },
    ],
  },
];
export const meetupDetails = [
  {
    id: 1,
    title: 'Kanpur - The Answer of "Why We Live?" in Buddhism',
    image: cardimg,
    hostedby: "kanpur",
    date: "Sat,Oct 28",
  },
  {
    id: 2,
    title: 'Jaipur - The Answer of "Why We Live?" in Buddhism',
    image: cardimg,
    hostedby: "kanpur",
    date: "Sat,Oct 28",
  },
  {
    id: 3,
    title: 'Delhi- The Answer of "Why We Live?" in Buddhism',
    image: cardimg,
    hostedby: "kanpur",
    date: "Sat,Oct 28",
  },
  {
    id: 4,
    title: 'India - The Answer of "Why We Live?" in Buddhism',
    image: cardimg,
    hostedby: "kanpur",
    date: "Sat,Oct 28",
  },
];

export const categoriesDetails = [
  {
    title: "Travel and Outdoor",
    icon: travel,
  },
  {
    title: "Social Activites",
    icon: sports,
  },
  {
    title: "Hobbies and Passions",
    icon: hobby,
  },
  {
    title: "Sports and Passions",
    icon: sports,
  },
  {
    title: "Technology",
    icon: robot,
  },
  {
    title: "Games",
    icon: games,
  },
]
export const meetupBlog = [
  {
    title: "I Used Meetup to Make Friends at Brunch",
    description:
      "New Jersey-based writer and college student Brianna Stryker wanted to meet friends in her hometown. Learn how she used Meetup to make connections by joining a Girls Night Out Meetup group.",
    image: meetupblog_1,
  },
  {
    title: "How to Turn Casual Connections into Close Friendships",
    description:
      "It’s proven that close friendships are harder to make as an adult. But don’t sweat it: here’s what you can do to simplify the process.",
    image: meetupblog_2,
  },
  {
    title: "Do You Have the “Right” Number of Friends?",
    description:
      "Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.",
    image: meetupblog_3,
  },
];
