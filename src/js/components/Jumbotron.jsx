import React from "react";
import Card from './Card'

const Jumbotron = () => {
    return (
        <div className="row">
            <div className="bg-light col-7 mx-auto pb-5">
                <h1>A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo tempora tenetur. Deleniti dolores itaque architecto, reiciendis quos voluptates amet distinctio veniam esse excepturi eum totam fugit sit explicabo temporibus.</p>
                <button type="button" className="btn btn-primary">Call an action</button>
            </div>
            <div className="row mt-4">
                <div className="col-7 mx-auto d-flex gap-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;