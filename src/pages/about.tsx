import React, {useState} from "react";

const AboutPage = ()=>{
    const [name, setName] = useState('Andrew Xie');
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <p>
                I'm {name}
            </p>
        </main>
    );
}

export default AboutPage;
