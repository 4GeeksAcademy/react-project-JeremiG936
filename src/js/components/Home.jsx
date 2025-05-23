import React from "react";
import NavBar from "./NavBar"
import Jumbotron from "./Jumbotron"
import Card from "./Card";

const cardsInfo = [
    {
        title: "Soemthing 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus minima modi ex natus dolor.",
        url: "https://picsum.photos/200/150?random=1"
    },
        {
        title: "Soemthing 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus minima modi ex natus dolor.",
        url: "https://picsum.photos/200/150?random=2"
    },
        {
        title: "Soemthing 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus minima modi ex natus dolor.",
        url: "https://picsum.photos/200/150?random=3"
    },
        {
        title: "Soemthing 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus minima modi ex natus dolor.",
        url: "https://picsum.photos/200/150?random=4"
    }
];



const Home = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <div className="row mt-4">
        <div className="col-7 mx-auto d-flex gap-3">
            {
                cardsInfo.map((cardInfo, index) => {
                    return <Card key={index} title={cardInfo.title} text={cardInfo.text} url={cardInfo.url} />
                })
            }
        </div>
      </div>
      <div className='bg-dark d-flex justify-content-center'>
        <p className='text-light'>Copyright © Your Website 2025</p>
      </div>
    </div>
  );
};

export default Home;