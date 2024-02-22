
import games from "../assests/games.png"
import travel from "../assests/travel.png";
import sports from "../assests/sports.png";
import hobby from "../assests/hobby.png";
import robot from "../assests/robot.png";

import article1 from "../assests/images/article-1.jpg";
import article2 from "../assests/images/article-2.jpg";
import article3 from "../assests/images/article-3.jpg";

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
    image: article1,
  },
  {
    title: "How to Turn Casual Connections into Close Friendships",
    description:
      "It’s proven that close friendships are harder to make as an adult. But don’t sweat it: here’s what you can do to simplify the process.",
    image: article2,
  },
  {
    title: "Do You Have the “Right” Number of Friends?",
    description:
      "Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.",
    image: article3,
  },
];
