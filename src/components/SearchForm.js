import React, {useState, useEffect} from "react";
import axios from "axios";
export default function SearchForm(){
    //
    // let userPages = Number

    const [photo, setPhoto] = useState("");
    const [result,setResult] = useState([]);
    const [show, setShow] = useState([]);
    const [count, setCount] = useState(10);

    const clientid = "GDl4Eft7EwaPFBiMooIoncJvzPNVQWKw6d826gKnW6o";
    const pageurl = "https://api.unsplash.com/photos?page=" + count + "&client_id="
    const url = "https://api.unsplash.com/search/photos?page=" + count + "&query=" + photo + "&client_id=" + clientid;

    useEffect(() => {
        axios.get(pageurl).then((response) => setShow(response.data));
    });
    const handleChange = (e) => {
        setPhoto(e.target.value);
    };
    const handleD = () => {
        setCount((PrevCount) => PrevCount - 1);
        //search
        axios.get(url).then((response) => setResult(response.data.results));
    };
    const handleI = () => {
        setCount((PrevCount) => PrevCount + 1);
        //search
        axios.get(url).then((response) => setResult(response.data.results));
    };
    const handleKeySearch = (e) => {
        if (e.key === "Enter") {
            return axios
                .get(url)
                .then((response) => setResult(response.data.results));
        }
    };

    return (
        <div className="ba">
            <div className="input">
                <input
                    type="text"
                    name="photo"
                    placeholder="search"
                    onChange={handleChange}
                    onKeyPress={handleKeySearch}
                />
                <button onClick={handleI}>Search</button>
            </div>

            <div className="btn1">
                <button onClick={handleD}>prev </button>
                <button onClick={handleI}>next</button>
            </div>
            <div className="desk">
                {result.map((pto) => (
                    <div className="img-card">
                        <img src={pto.urls.small} alt={photo} key={pto.id} />
                    </div>
                ))}

                <div className="desk">
                    {show.map((poto) => (
                        <div className="img-card">
                            <img src={poto.urls.small} alt={photo} key={poto.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}