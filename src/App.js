import React, { useState } from 'react';
import './App.css';



function App() {

    let [title, newTitle] = useState(["Food", "Fashion", "recipe", "travel"]);
    let [like, likeChange] = useState([0, 0, 0, 0]);
    let [shouldShowDetails, updateShowDetails] = useState(false);

    function changeTitle() {
        let newArray = [...title];
        newArray[0] = "Drinks";
        newTitle(newArray);

    }

    function updateLikeAt(likeArray, indexToUpdate) {
        return likeArray.map((like, index) => {
            if (index === indexToUpdate) {
                return like + 1;
            } else {
                return like;
            }
        })
    }

    function toggleDetails() {
        updateShowDetails(!shouldShowDetails)
    }

    return (

        <div className="App">
            <div className="black-nav">
                <div>In Switzerland</div>
            </div>
            <button onClick={changeTitle}>Change first blog article title</button>
            {
                title.map((t, index) => {
                    return <div key={index.toString()} className="list">
                        <h4> {t} <span onClick={() => { likeChange(updateLikeAt(like, index)) }}>♥︎</span>{like[index]}</h4>
                        <p onClick={toggleDetails}>Issued {index+1}/02/21</p>
                        {
                            shouldShowDetails ? <ArticleDetails /> : null
                        }
                        <hr />
                    </div>
                })
            }
            <Modal />

        </div>
    );
}

function ArticleDetails() {
    return <div>Some Content</div>
}

function Modal() {
    return (

        <div className="modal">
            <h2>Title</h2>
            <p>Date </p>
            <p>Context</p>
        </div>
    )
}
export default App;
