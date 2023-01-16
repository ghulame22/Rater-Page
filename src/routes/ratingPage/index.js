import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Ratings() {
  const navigate = useNavigate();

  const [rate, setRate] = useState(null);
  console.log(rate);
  const handleClick = (item) => {
    setRate(item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".rate")) {
        setRate(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const rated = () => {
    navigate("/thankyou", { state: { rated: rate } }, { replace: true });
  };

  return (
    <main className="main">
      <div className="container">
        <div className="logo">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we didwith your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="btn">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <button
              key={index}
              className="rate"
              value={item}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="submit" onClick={rated} disabled={!rate}>
          SUBMIT
        </button>
      </div>
    </main>
  );
}

export default Ratings;
