// import React from "react";
// import { Card, Image, List, Segment } from "semantic-ui-react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const contributors = [
//   // contributors data...
//   {
//     name: "Kshitiz Lall",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Vivek Kumar",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Shubham Dhawdekar",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Yashika Tanwar",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Shivam Jain",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Shreyakansha Gupta",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Damini Sapate",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Rushikesh Pise",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Ankit Sengar",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
//   {
//     name: "Md. Izharul",
//     photo: "../assets/ImageHolder.jpg",
//     role: "Developer",
//   },
// ];

// const ContributorList = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 2000, // Set autoplay interval in milliseconds
//     cssEase: "linear", // Set easing for the autoplay animation
//     responsive: [
//       // Add responsive settings for different screen sizes
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Segment inverted textAlign="center" vertical>
//       <Slider {...settings}>
//         {contributors.map((contributor, index) => (
//           <Card key={index}>
//             <Image src={contributor.photo} wrapped ui={false} />
//             <Card.Content>
//               <Card.Header>{contributor.name}</Card.Header>
//               <Card.Meta>{contributor.role}</Card.Meta>
//             </Card.Content>
//           </Card>
//         ))}
//       </Slider>
//     </Segment>
//   );
// };

// export default ContributorList;

import React from "react";
import { Button, Card, Image, List, Segment } from "semantic-ui-react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contributors = [
  // contributors data...
  {
    name: "Kshitiz Lall",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/kshitizlall/",
  },
  {
    name: "Vivek Kumar",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Shubham Dhawdekar",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Yashika Tanwar",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Shivam Jain",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Shreyakansha Gupta",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Damini Sapate",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Rushikesh Pise",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Ankit Sengar",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
  {
    name: "Md. Izharul",
    photo: "../assets/ImageHolder.jpg",
    role: "Developer",
  },
];

const ContributorList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Segment inverted textAlign="center" vertical>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {contributors.map((contributor, index) => (
            <Card key={index} className="contributor-card">
              <Image src={contributor.photo} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{contributor.name}</Card.Header>
                <Card.Meta>{contributor.role}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Slider>
      </div>
    </Segment>
  );
};

export default ContributorList;
