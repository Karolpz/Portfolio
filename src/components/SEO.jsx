import React from "react"
import { Helmet } from "react-helmet-async"
import schemaData from "../data/schemaData.json"

const SEO = () => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData.person)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(schemaData.organization)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(schemaData.website)}
            </script>
        </Helmet>
    );
};

export default SEO