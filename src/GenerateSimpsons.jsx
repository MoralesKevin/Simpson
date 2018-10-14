import React from 'react';

const GenerateSimpsons = ({ selectSimpsons }) => {
    return (
        <div className="GenerateSimpsons">
            <button onClick={selectSimpsons}> Changement de Personnage</button>
        </div>
    );
};

export default GenerateSimpsons;