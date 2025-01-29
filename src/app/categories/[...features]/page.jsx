import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    if(params.features.length == 3){
        return <div>{params.features[2]}</div>
    }
    return (
        <div>
            This is categories details page

            Here we can add extra routes
        </div>
    );
};

export default CategoriesDetailsPage;