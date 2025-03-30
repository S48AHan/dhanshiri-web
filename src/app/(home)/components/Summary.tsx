import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MasterCard from "@/components/Card/MasterCard";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

const Summary = () => {
  return (
    // <Card className="border-2 border-gray-200 shadow-md p-4v mx-3 md:mx-10 xl:mx-[300px] my-3 md:my-5 xl:my-10">
    //   <CardHeader>
    //     {/* <CardTitle>Card Title</CardTitle>
    //     <CardDescription>Card Description</CardDescription> */}
    //   </CardHeader>
    //   <CardContent>
    //     <p>
    //       From the establishment in 1992, Dhanshiri Printing & Accessories has
    //       been committedly supplying garments accessories for European, American
    //       and Indian buyers. In Dhaka, Bangladesh, we have facilities for the
    //       production of Woven Label, Printing Label, Printing Press and Poly.
    //       The devotion to delivery time, quality, and production capacity is
    //       what has led to our company's positive reputation with international
    //       buyerst.
    //     </p>
    //   </CardContent>
    //   <CardFooter>
    //     {/* <p>Card Footer</p> */}
    //   </CardFooter>
    // </Card>
    <>
    <MasterCard
      title="Dhanshiri Printing & Accessories"
      // description="Dhanshiri Printing & Accessories"
      content="From the establishment in 1992, Dhanshiri Printing & Accessories has been committedly supplying garments accessories for European, American and Indian buyers. In Dhaka, Bangladesh, we have facilities for the production of Woven Label, Printing Label, Printing Press and Poly. The devotion to delivery time, quality, and production capacity is what has led to our company's positive reputation with international buyerst."
    />
    </>
  );
};

export default Summary;
