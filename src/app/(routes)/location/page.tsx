import styles from "./location.module.scss";

import Container from "@/app/components/layout/Container";

import { FaClock, FaMapPin, FaPhone } from "react-icons/fa6";

export default function Location() {
  const locations = [
    {
      url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3106.97483041253!2d-77.09291092512406!3d38.855933149151376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUxJzIxLjMiTiA3N8KwMDUnMjUuMiJX!5e0!3m2!1spt-BR!2sbr!4v1713354773171!5m2!1spt-BR!2sbr",
      title: "Crimson Crest Avenue",
      text: "Located on the bustling Crimson Crest Avenue, Endurance Gym stands as a beacon of fitness in the heart of the city. Nestled amidst the vibrant urban landscape, this haven for health enthusiasts offers more than just a place to sweat.",
      local: "Crimson Crest Avenue",
      phone: "(555) 123-4567",
      time: "07:00AM to 10:00PM",
    },
    {
      url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3106.97483041253!2d-77.09291092512406!3d38.855933149151376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUxJzIxLjMiTiA3N8KwMDUnMjUuMiJX!5e0!3m2!1spt-BR!2sbr!4v1713354773171!5m2!1spt-BR!2sbr",
      title: "Whispering Willow Way",
      text: "Nestled serenely on Whispering Willow Way, Endurance Gym is a tranquil retreat for those seeking to strengthen body and mind. Surrounded by the soothing whispers of nature, this gym offers a sanctuary from the chaos of daily life.",
      local: "Whispering Willow Way",
      phone: "(555) 765-4321",
      time: "07:00AM to 10:00PM",
    },
    {
      url: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3106.97483041253!2d-77.09291092512406!3d38.855933149151376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUxJzIxLjMiTiA3N8KwMDUnMjUuMiJX!5e0!3m2!1spt-BR!2sbr!4v1713354773171!5m2!1spt-BR!2sbr",
      title: "Mystic Moonlight Lane",
      text: "Perched along the enchanting Mystic Moonlight Lane, Endurance Gym emerges as a celestial sanctuary for fitness enthusiasts. Beneath the shimmering moonlight, this haven beckons with promises of strength and perseverance.",
      local: "Mystic Moonlight Lane",
      phone: "(555) 123-7654",
      time: "07:00AM to 10:00PM",
    },
  ];

  return (
    <main className={styles.location}>
      <Container>
        <div className={styles.location_container}>
          {locations.map((location) => (
            <div className={styles.location_local} key={location.title}>
              <div className={styles.location_map}>
                <iframe
                  src={location.url}
                  loading="lazy"
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className={styles.location_text}>
                <h1>{location.title}</h1>
                <p>{location.text}</p>
                <div className={styles.location_info}>
                  <span>
                    <FaMapPin /> {location.local}
                  </span>
                  <span>
                    <FaPhone /> {location.phone}
                  </span>
                  <span>
                    <FaClock /> {location.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
