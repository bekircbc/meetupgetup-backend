import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4433;

app.get("/", (req, res) => {
  return res.json(getData());
});
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

function getData() {
  return {
    meetups: [
      {
        id: "m1",
        title: "Paris",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/800px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        adress: "Meetupstreet5, 12345 Meetup City",
        description:
          "This is an amazing meetup which you definitely should not miss.",
        isFavorite: false,
      },
      {
        id: "m2",
        title: "Amsterdam",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Buildings_in_Amsterdam_IMG_5153.jpg/800px-Buildings_in_Amsterdam_IMG_5153.jpg",
        adress: "Meetupstreet5, 12345 Meetup City",
        description:
          "This is an amazing meetup which you definitely should not miss.",
        isFavorite: false,
      },
      {
        id: "m3",
        title: "Düsseldorf",
        imageUrl: "https://picsum.photos/520/460",
        adress: "Meetupstreet5, 12345 Meetup City",
        description:
          "This is an amazing meetup which you definitely should not miss.",
        isFavorite: false,
      },
      {
        id: "m4",
        title: "Berlin",
        imageUrl: "https://picsum.photos/521/461",
        adress: "Meetupstreet5, 12345 Meetup City",
        description:
          "This is an amazing meetup which you definitely should not miss.",
        isFavorite: false,
      },
      {
        id: "m5",
        title: "Dresden",
        imageUrl: "https://picsum.photos/522/462",
        adress: "Meetupstreet5, 12345 Meetup City",
        description:
          "This is an amazing meetup which you definitely should not miss.",
        isFavorite: false,
      },
    ],
    accounts: [
      {
        id: "m1",
        owner: "Keyser Söze",
        pin: 1111,
        userFavorites: [],
      },
      {
        id: "m2",
        owner: "Harold Finch",
        pin: 2222,
        userFavorites: [],
      },
      {
        id: "m3",
        owner: "John Reese",

        pin: 3333,
        userFavorites: [],
      },
      {
        id: "m4",
        owner: "Jonas Kahnwald",

        pin: 4444,
        userFavorites: [],
      },
    ],
  };
}
