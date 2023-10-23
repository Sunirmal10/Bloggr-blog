import "./header.css";

export default function Header() {
  return (
    <div className="header">
     <div className="header-left">
      <div className="header-banner">
        <img src="images/jayden-yoon-zk-OGWTZqz3wiI-unsplash.jpg" alt="" />
        <div className="heading">
        A Journey of Self-Discovery and Growth.
        </div>
        <div className="tagline">
        Embark on a journey of self-discovery and personal growth with our community.
        </div>
      </div>
     </div>
     <div className="header-right">
      <div className="header-1">
        <img src="/images/lucas-wesney-ZNz5UPRb2N8-unsplash.jpg" alt="" />
        <div className="header-title">
        UNLEASH YOURSELF TO THE WORLD.
        </div>
      </div>
      <div className="header-2">
        <h4><span>Discover yourself.</span>
         BUILD YOUR OWN HAPPINESS.
        </h4>
      </div>
     </div>
    </div>
  );
}
