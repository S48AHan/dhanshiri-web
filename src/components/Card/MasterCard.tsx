import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MasterCardProps {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
}

const MasterCard = ({
  title,
  description,
  content,
  footer,
}: MasterCardProps) => {
  return (
    <Card className="border-2 border-gray-200 shadow-md p-4v mx-3 md:mx-10 xl:mx-[300px] my-3 md:my-5 xl:my-10">
      <CardHeader>
        {title ? <CardTitle>{title}</CardTitle> : <></>}
        {description ? (
          <CardDescription>{description}</CardDescription>
        ) : (
          <></>
        )}
      </CardHeader>
      <CardContent>
        <p>
          {content
            ? content
            : ""}
        </p>
      </CardContent>
      {/* <CardFooter>{footer? <p>Card Footer</p>:<></>}</CardFooter> */}
    </Card>
  );
};

export default MasterCard;
