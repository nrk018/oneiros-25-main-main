import Image from "next/image";

import "./PrevOno.css";
import FireFliesWrapper from "./FireFlies";

export default function PrevOnoSection() {
  return (
    <>
      <h2 className="prev-ono-card-title text-3xl pl-4">A little about past</h2>
      <div className="prev-ono-container m-4 pl-4 pr-4 pt-4">
        <div className="prev-ono-bg-texture"></div>
        <div className="prev-ono-title">
          <div className="prev-ono-title-logo h-12">
            <Image height={0} width={0} sizes="100%" src="/LandingPageImgs/PrevOnoLogo.png" alt="Previous Oneiros Logo" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
          </div>
          <h5 className="prev-ono-title-date -mt-3 text-center text-zinc-400">
            <em>12 Sep - 15 Sep</em>
          </h5>
          <h4 className="prev-ono-title-motto text-center text-2xl font-bold text-zinc-300">
            <span className="text-4xl">L</span>IVE <span className="text-4xl">L</span>OVE <span className="text-4xl">L</span>AUGH
          </h4>
        </div>
        <h3 className="prev-ono-section-title">Our Artists</h3>
        <div className="prev-ono-artist-container">
          <div className="prev-ono-artist-1">
            <h4 className="text-center font-bold">Day 1</h4>
            <FireFliesWrapper>
              <div className="prev-ono-artist-img-small">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="/LandingPageImgs/Naalayak.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className="prev-ono-artist-name text-center">Naalayak</h4>
              </div>
            </FireFliesWrapper>
          </div>
          <div className="prev-ono-artist-3">
            <h4 className="text-center font-bold">Day 3</h4>
            <FireFliesWrapper>
              <div className="prev-ono-artist-img-large">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="/LandingPageImgs/GajendraVerma.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className="prev-ono-artist-name text-center">Gajendra Verma</h4>
              </div>
            </FireFliesWrapper>
          </div>
          <div className="prev-ono-artist-2">
            <h4 className="text-center font-bold">Day 2</h4>
            <FireFliesWrapper>
              <div className="prev-ono-artist-img-small">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/12.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h4 className="prev-ono-artist-name text-center">Progressive Bros</h4>
              </div>
            </FireFliesWrapper>
          </div>
        </div>
        <h3 className="prev-ono-section-title">Major Events</h3>
        <div className="flex justify-center">
          <div className="prev-ono-major-events-container">
            <div className="prev-ono-major-text-1 prev-ono-major-text">Requim: Lorem ipsum dolor sit amet.</div>
            <div className="prev-ono-major-img-1">
              <FireFliesWrapper>
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/15.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </FireFliesWrapper>
            </div>
            <div className="prev-ono-major-text-2 prev-ono-major-text">Destival: Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
            <div className="prev-ono-major-img-2">
              <Image height={0} width={0} sizes="100%" src="https://jaipur.manipal.edu/img/dsw/event/11.jpeg" alt="Previous Oneiros Logo" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </div>
            <div className="prev-ono-major-text-3 prev-ono-major-text">Cosmos: Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</div>
            <div className="prev-ono-major-img-3">
              <FireFliesWrapper>
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/10.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </FireFliesWrapper>
            </div>
            <div className="prev-ono-major-text-4 prev-ono-major-text">Carnival: Lorem ipsum dolor sit amet.</div>
            <div className="prev-ono-major-img-4">
              <FireFliesWrapper>
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/8.jpeg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </FireFliesWrapper>
            </div>
          </div>
        </div>
        <h3 className="prev-ono-section-title">Minor Events</h3>
        <div className="prev-ono-minor-container my-6 grid grid-cols-2">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div className="prev-ono-minor-img-1 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/31.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="prev-ono-minor-img-2 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/16.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="prev-ono-minor-img-3 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/38.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="prev-ono-minor-img-4 prev-ono-minor-img">
                <Image
                  height={0}
                  width={0}
                  sizes="100%"
                  src="https://jaipur.manipal.edu/img/dsw/event/37.jpg"
                  alt="Previous Oneiros Logo"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="prev-ono-minor-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae, vero exercitationem totam aliquid laboriosam quam. Omnis quod eveniet neque odio, veniam suscipit magnam laudantium libero. Nulla eum tempore maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt totam doloremque sunt doloribus rem quam sapiente, rerum alias vitae sed optio iure vero reprehenderit necessitatibus cumque molestias mollitia suscipit, nisi illum voluptatem et at omnis vel! Non, ex consectetur.</div>
        </div>
        <h3 className="prev-ono-section-title">We forgot something? ... Yes!</h3>
        <div className="prev-ono-promo-container grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <span>More than 15K people attended Oneiros&apos;24, Several special artists, guests, and participants from all around the nation.</span>
            <span>Ah and also somebody special showed up!</span>
            <span>The crowd went crazy!!</span>
            <span>Overall it was a great time here and Oneiros&apos;24 was a great fun for everyone and a huge success for us.</span>
          </div>
          <div className="prev-ono-promo-img justify-self-center">
            <FireFliesWrapper>
              <Image height={0} width={0} sizes="100%" src="/LandingPageImgs/SidRas.jpg" alt="Previous Oneiros Logo" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </FireFliesWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
