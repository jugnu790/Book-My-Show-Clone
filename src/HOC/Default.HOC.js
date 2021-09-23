/* Transform component into another component
   Adding additional functionalities to the existing component
*/

import React from "react";
import {Route} from "react-router-dom";

//Layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component:Component , ...rest }) => {
  /* components
      props -> path exact
      */

  return (
    <>
    <Route
    {...rest}

    component = {(props)=> (
      <DefaultLayout>
       <Component {...props} />
      </DefaultLayout>
    )

    }
     />
    </>
  )

};

export default DefaultHOC;
