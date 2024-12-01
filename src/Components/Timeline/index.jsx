import {
  Timeline as MUITimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent
} from "@mui/lab";
import { Box } from "@mui/system";

import styles from "./style.module.scss"

const a = [
  {
    title: "Order was placed",
    description: "Your order has been placed successfully",
    active: true
  },
  {
    title: "Scheduled for delivery",
    description: "Order has been schedules for delivery",
    active: true
  },
  {
    title: "Dispatched for delivery",
    description: "Order is on the way",
    active: false
  },
  {
    title: "Delivered",
    description: "Order has been delivered Succesfully",
    active: false
  },
];

const Timeline = () => {
  return (
    <MUITimeline>
      {a.map((item) => (
        <TimelineItem>
          <TimelineOppositeContent
            style={{ maxWidth: "1px", paddingLeft: "0px", paddingRight: "0px" }}
          />
          <TimelineSeparator>
            <TimelineDot color={item.active ? "success" : "grey"} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", alignItems: "center" }}>
            <Box flex={1}>
              <p>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
            </Box>
            <p>Date</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MUITimeline>
  );
};

export default Timeline;
