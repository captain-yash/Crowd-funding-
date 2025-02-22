import React from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Alice Johnson",
      feedback: "This platform helped me bring my dream to life!",
      img: "https://www.google.com/imgres?q=alice%20johnson&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9a%2FAlice_Johnson_-_2019_State_of_the_Union_Guests_%252840035011983%2529_%2528cropped%2529.jpg%2F640px-Alice_Johnson_-_2019_State_of_the_Union_Guests_%252840035011983%2529_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAlice_Marie_Johnson&docid=ywqoxmW5lLeTwM&tbnid=WiT4o4vnEqo6yM&vet=12ahUKEwjz4ZKXstaLAxXJTGwGHd10OLgQM3oECBwQAA..i&w=640&h=911&hcb=2&ved=2ahUKEwjz4ZKXstaLAxXJTGwGHd10OLgQM3oECBwQAA",
    },
    {
      name: "Michael Smith",
      feedback: "I love supporting innovative ideas and seeing them grow.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fsport%2Fdarts%2Farticles%2Fclyn1gw89gyo&psig=AOvVaw0NuwsmSE0T4gGhyLy6L12P&ust=1740283313032000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCQpd2y1osDFQAAAAAdAAAAABAE",
    },
    {
      name: "Sarah Lee",
      feedback: "A great place to find and fund creative projects.",
      img: "https://www.google.com/imgres?q=sarah%20lee&imgurl=https%3A%2F%2Fwww.wise-qatar.org%2F%2Fapp%2Fuploads%2F2021%2F10%2Fsarahlee-wise.jpg&imgrefurl=https%3A%2F%2Fwww.wise-qatar.org%2Fbiography%2Fsarah-lee%2F&docid=aCZ98f0MSaigcM&tbnid=BDHWxRxZVD6bkM&vet=12ahUKEwjxmtn2staLAxW5dmwGHQf8EsgQM3oECGQQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwjxmtn2staLAxW5dmwGHQf8EsgQM3oECGQQAA",
    },
  ];

  return (
    <section className="testimonials text-center py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold">What Our Users Say</h2>
        <div className="row mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="col-md-4">
              <img
                src={review.img}
                alt={review.name}
                className="rounded-circle mb-3"
              />
              <h5>{review.name}</h5>
              <p>"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
