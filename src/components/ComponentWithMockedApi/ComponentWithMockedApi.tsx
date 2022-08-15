import { useEffect, useState } from "react";
import { CAT_FACT_URL } from "../../constants";
import { getAPIInstance } from "../../services/axios";

export const ComponentWithMockedApi = () => {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    const innerFetchFunction = async () => {
      const response = await getAPIInstance().get(CAT_FACT_URL + "/facts");
      setCatFacts(response.data.data);
    };

    innerFetchFunction();
  }, []);

  return (
    <div>
      <h1> Hello, facts!</h1>
      {catFacts.map(({ fact }) => (
        <div key={fact}>{fact}</div>
      ))}
    </div>
  );
};
