export const Presenters = {
  "molly-mackinlay": {
    name: "Molly Mackinlay",
    organization: "Protocol Labs",
    photo: "molly.jpeg",
  },
  "pooja-shah": {
    name: "Pooja Shah",
    organization: "Protocol Labs",
    photo: "pooja.jpeg",
  },
  "steven-allen": {
    name: "Steven Allen",
    organization: "Protocol Labs",
    photo: "steven.png",
  },
  "juan-benet": {
    name: "Juan Benet",
    organization: "Protocol Labs",
    photo: "juan.png",
  },
  "colin-evran": {
    name: "Colin Evran",
    organization: "Protocol Labs",
    photo: "colin.jpg",
  },
  "adrian-lanzafame": {
    name: "Adrian Lanzafame",
    organization: "Protocol Labs",
    photo: "adrian.jpg",
  },
  "yuni-graham": {
    name: "Yuni Graham",
    organization: "Protocol Labs",
    photo: "yuni.jpg",
  },
  "andrew-hill": {
    name: "Andrew Hill",
    organization: "Textile",
    photo: "andrew-hill.jpg",
  },
};

export const ScheduleOne = [
  {
    time: "9:45 AM",
    name: "Casual Meet & Greet",
    value: "Come say hi and hang out before the official start of the event.",
    duration: 15,
    presenters: null,
  },
  {
    time: "10:00 AM",
    name: "Introduction",
    value: "Welcome to the IPFS Pinning Summit!",
    duration: 15,
    presenters: null,
  },
  {
    time: "10:20 AM",
    name: "IPFS Ecosystem Update",
    value:
      "In this presentation, we discuss growth in the IPFS ecosystem and the 2020 IPFS project roadmap.",
    duration: 30,
    presenters: [Presenters["molly-mackinlay"]],
  },
  {
    time: "10:55 AM",
    name: "Filecoin Ecosystem Update",
    value:
      "In this presentation, we discuss Filecoin ecosystem growth and the 2020 Filecoin project roadmap.",
    duration: 20,
    presenters: [Presenters["pooja-shah"]],
  },
  {
    time: "11:20 AM",
    name: "What you should know about IPFS 0.5",
    value:
      "A presentation on IPFS 0.5, and the features and metrics relevant for pinning services and other infrastructure and service providers.",
    duration: 20,
    presenters: [Presenters["steven-allen"]],
  },
  {
    time: "11:40 AM",
    name: "Break",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "12:00 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "12:25 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "12:50 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "1:15 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "1:40 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "2:00 PM",
    name: "Break",
    value: null,
    duration: 15,
    presenters: null,
  },
  {
    time: "2:20 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "2:45 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "3:10 PM",
    name: "TBD (Attendee Presentation)",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "3:35 PM",
    name: "Break",
    value: null,
    duration: 10,
    presenters: null,
  },
  {
    time: "3:45 PM",
    name: "Day 1 Close",
    value: null,
    duration: 15,
    presenters: [Presenters["juan-benet"]],
  },
  {
    time: "4:00 PM",
    name: "Networking Happy Hour",
    value:
      "We will start by explaining the structure of the virtual networking hour, and then commence happy hour networking",
    duration: 60,
    presenters: [Presenters["colin-evran"], Presenters["yuni-graham"]],
  },
];

export const ScheduleTwo = [
  {
    time: "9:45 AM",
    name: "Casual Meet & Greet",
    value: "Come say hi and hang out before the official start of the event.",
    duration: 15,
    presenters: null,
  },
  {
    time: "10:00 AM",
    name: "Day 2 Keynote",
    value: null,
    duration: 30,
    presenters: [Presenters["juan-benet"]],
  },
  {
    time: "10:35 AM",
    name: "Pinning APIs & Use Cases",
    value:
      "In this presentation, we discuss current and potential pinning use cases and a pinning API to meet these envisioned needs.",
    duration: 20,
    presenters: [Presenters["adrian-lanzafame"]],
  },
  {
    time: "11:00 AM",
    name: "Exploring Filecoin Integrations",
    value: null,
    duration: 30,
    presenters: [Presenters["pooja-shah"]],
  },
  {
    time: "11:35 AM",
    name: "A Tour of Powergate",
    value: null,
    duration: 30,
    presenters: [Presenters["andrew-hill"]],
  },
  {
    time: "12:05 PM",
    name: "Break",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "12:25 PM",
    name: "Pinning Service Integrations in IPFS Applications",
    value: null,
    duration: 20,
    presenters: null,
  },
  {
    time: "12:50 PM",
    name: "IPFS Pinning API Workshop",
    value: null,
    duration: 120,
    presenters: null,
  },
  {
    time: "2:50 PM",
    name: "Break",
    value: null,
    duration: 10,
    presenters: null,
  },
  {
    time: "3:00 PM",
    name: "Opportunties in the Pinning Industry",
    value: null,
    duration: 15,
    presenters: null,
  },
  {
    time: "3:20 PM",
    name: "Summit Close",
    value: null,
    duration: 20,
    presenters: null,
  },  
];