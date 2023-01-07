// empty for now
import user from "../assets/slider_image_2.png";
import profilePhoto from "../assets/comment_profile_photo.svg";

const posts = [
  {
    id: 1,
    name: "Henry Okafor",
    photo: user,
    duration_posted: "5mon",
    posted_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lacus at lacus placerat, at venenatis metus aliquet. Donec sit amet lacinia turpis. Aliquam non nunc sed lacus cursus malesuada at at nisl. In ex tortor, sodales vitae aliquam non, consequat in massa. Curabitur et posuere nibh, vel tristique nisl. Aenean dictum aliquam velit, a condimentum diam viverra sit amet. Nulla facilisi. In consequat nulla",
    posted_photo: user,
    posted_video: "",
    reactions: {
      likes: 20,
      loves: 13,
      celebrations: 5,
    },
    comments: {
      count: 12,
      comments: [
        {
          id: 1,
          name: "Nana Adwoa Mensah",
          img: profilePhoto,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: false,
        },
        {
          id: 2,
          name: "Franca Adwoa Mensah",
          img: profilePhoto,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: false,
        },
        {
          id: 3,
          name: "Dmitry Kargaev Asamoah",
          img: user,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: true,
        },
      ],
    },
    views: {
      count: 0,
    },
  },
  {
    id: 2,
    name: "Princess Uhiene",
    photo: user,
    duration_posted: "3 days",
    posted_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lacus at lacus placerat, at venenatis metus aliquet. Donec sit amet lacinia turpis. Aliquam non nunc sed lacus cursus malesuada at at nisl. In ex tortor, sodales vitae aliquam non, consequat in massa. Curabitur et posuere nibh, vel tristique nisl. Aenean dictum aliquam velit, a condimentum diam viverra sit amet. Nulla facilisi. In consequat nulla",
    posted_photo: user,
    posted_video: "",
    reactions: {
      likes: 2,
      loves: 4,
      celebrations: 0,
    },
    comments: {
      count: 0,
      comments: [
        {
          id: 1,
          name: "Nana Adwoa Mensah",
          img: profilePhoto,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: false,
        },
        {
          id: 2,
          name: "Franca Adwoa Mensah",
          img: profilePhoto,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: false,
        },
        {
          id: 3,
          name: "Dmitry Kargaev Asamoah",
          img: user,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: true,
        },
      ],
    },
    views: {
      count: 234,
    },
  },
  {
    id: 3,
    name: "Azubuire Peter",
    photo: user,
    duration_posted: "9 weeks",
    posted_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere lacus at lacus placerat, at venenatis metus aliquet. Donec sit amet lacinia turpis. Aliquam non nunc sed lacus cursus malesuada at at nisl. In ex tortor, sodales vitae aliquam non, consequat in massa. Curabitur et posuere nibh, vel tristique nisl. Aenean dictum aliquam velit, a condimentum diam viverra sit amet. Nulla facilisi. In consequat nulla",
    posted_photo: user,
    posted_video: "",
    reactions: {
      likes: 0,
      loves: 13,
      celebrations: 0,
    },
    comments: {
      count: 7,
      comments: [
        {
          id: 1,
          name: "Nana Adwoa Mensah",
          img: profilePhoto,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: false,
        },
        {
          id: 2,
          name: "Franca Adwoa Mensah",
          img: profilePhoto,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: false,
        },
        {
          id: 3,
          name: "Dmitry Kargaev Asamoah",
          img: user,
          comment:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
          owner: true,
        },
      ],
    },
    views: {
      count: 79,
    },
  },
];

export default posts;
