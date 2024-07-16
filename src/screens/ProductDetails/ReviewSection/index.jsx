import { Tabs, TabPanel } from "../../../Components/Tabs";

import CustomerReviews from "../CustomerReviews";
import WriteReview from "../WriteReview";

const ReviewSection = () => {
  return (
    <Tabs tabList={["Customer Reviews", "Write a Review"]}>
      <TabPanel>
        <CustomerReviews />
      </TabPanel>
      <TabPanel>
        <WriteReview />
      </TabPanel>
    </Tabs>
  );
};

export default ReviewSection
