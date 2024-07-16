import { Tabs, TabPanel } from "../../../Components/Tabs";

import CustomerReviews from "../CustomerReviews";

const ReviewSection = () => {
  return (
    <Tabs tabList={["Customer Reviews", "Write a Review"]}>
      <TabPanel>
        <CustomerReviews />
      </TabPanel>
      <TabPanel>
        <h2>content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ReviewSection
