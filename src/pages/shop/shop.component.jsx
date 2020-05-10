import React from 'react';

import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


//When routing from App.js to shop it will pass 3 props (match, history and location)
const shopPage = ({match}) =>(
   
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
        
);

export default shopPage;